import { useCartContext } from "../context/cartcontext";

import "../styles/productCard.css";
import "../styles/button.css";
import { REMOVE_FROM_WISHLIST } from "../constants/constants";
import ButtonAddToCart from "../displayComponents/addToCartButton/addToCart";
import { Link, useNavigate } from "react-router-dom";
function WishListdisplay() {
  const { state, dispatch } = useCartContext();
  const navigate = useNavigate();
  return (
    <div>
      {state.wishList.length === 0 ? (
        <div>
          <h3>You don't have any items in your wish list</h3>
          <button
            class="btn-text btn-style-color"
            onClick={() => navigate("/products")}
          >
            Go back to view products
          </button>
        </div>
      ) : (
        <h3>Your wishlisted items:</h3>
      )}

      <div className="product-display-list-container">
        {state.wishList.map((item) => {
          return (
            <div className="product-item-display " key={item._id}>
              <div class="card-container">
                <div class="card-large">
                  <button
                    class="card-remove-btn"
                    onClick={() =>
                      dispatch({ type: REMOVE_FROM_WISHLIST, item })
                    }
                  >
                    &times;
                  </button>
                  <div class="card-content">
                    <img
                      class="image-card-size-large image-size-setter"
                      src={item.url}
                      width="100%"
                      height="auto"
                      alt={item.name}
                    />
                    <h3> {item.name} </h3>
                    <div>Rs. {item.price}</div>
                    {item.availability && <div> In Stock </div>}
                    {!item.availability && <div> Out of Stock </div>}

                    {item.fast_delivery ? (
                      <div> Fast Delivery </div>
                    ) : (
                      <div> 3 days minimum </div>
                    )}
                  </div>
                </div>

                <div class="card-large-showSimilar-section">
                  <ButtonAddToCart item={item} />{" "}
                  <button class="btn-text btn-style-color ">
                    <Link
                      to={`/products/${item._id}`}
                      class="btn-style-color link-btn"
                    >
                      View Details
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default WishListdisplay;
