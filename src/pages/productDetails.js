import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDataContext } from "../context/datacontext";
import { productData } from "../data/productData";
import ButtonAddToCart from "../displayComponents/addToCartButton/addToCart";
import ButtonAddToWishList from "../displayComponents/wishListButton/wishListItem";
import "../styles/productCard.css";

function ProductDetails() {
  let { productId } = useParams();
  const productData = useDataContext();
  const [productDetail, setProductDetail] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await axios
        .get(`http://127.0.0.1:3000/product/${productId}`)
        .then((response) => {
          setProductDetail(response.data.product);
        });
    })();
  }, []);

  return (
    <div>
      <div className="product-detail-card apply-shadow">
        <div className="product-detail-header">
          <h2>{productDetail.name}</h2>
          <div>
            <ButtonAddToCart item={productDetail} />
            <ButtonAddToWishList item={productDetail} />
          </div>
        </div>

        <div className="product-detail-description-container">
          <div classname="product-detail-image-section">
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
    </div>
  );
}

export default ProductDetails;
