import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/authcontext";
import ButtonAddToCart from "../displayComponents/addToCartButton/addToCart";
import ButtonAddToWishList from "../displayComponents/wishListButton/wishListItem";
import "../styles/productCard.css";
import { toast } from "react-toastify";

function ProductDetails() {
  let { productId } = useParams();

  const [productDetail, setProductDetail] = useState([]);
  let { state, dispatch } = useAuth();

  async function fetchProductData() {
    dispatch({ type: "SET_LOADING_TO_TRUE" });
    try {
      const response = await axios
        .get(`http://127.0.0.1:3000/product/${productId}`)
        .then((response) => {
          setProductDetail(response.data.product);
        });
      dispatch({ type: "SET_LOADING_TO_FALSE" });
    } catch (error) {
      toast.error("Failed to load");
      console.log(error.message);
    } finally {
      dispatch({ type: "SET_LOADING_TO_FALSE" });
    }
  }

  useEffect(() => {
    fetchProductData();
  }, [productDetail]);

  return (
    <div>
      {state.loading && <h4>loading...</h4>}
      {!state.loading && (
        <div className="product-detail-card apply-shadow">
          <div className="product-detail-header">
            <h2>{productDetail.name}</h2>
            <div>
              <ButtonAddToCart item={productDetail} />
              <ButtonAddToWishList item={productDetail} />
            </div>
          </div>

          <div className="product-detail-description-container">
            <div className="product-detail-image-section">
              <img
                src={productDetail.url}
                className="product-detail-image-container"
              />
            </div>
            <hr className="product-detail-section-divider"></hr>
            <div className="product-description-section">
              <p>
                <strong>Price:</strong> Rs.{productDetail.price} /-{" "}
              </p>

              <p>
                <strong>Availability:</strong>{" "}
                {productDetail.availability
                  ? "Available"
                  : "Currently out of stock"}
              </p>
              <p>
                <strong>Delivery:</strong>{" "}
                {productDetail.fast_delivery
                  ? "Fast delivery available"
                  : "3 days minimum"}
              </p>

              <p>
                <strong>Description:</strong> {productDetail.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
