import { useAuth } from "../context/authcontext";

import "../styles/productCard.css";
import "../styles/button.css";
import { REMOVE_FROM_WISHLIST } from "../constants/constants";
import ButtonAddToCart from "../displayComponents/addToCartButton/addToCart";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function WishListdisplay() {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      {localStorage.getItem("TOKEN") ? (
        <div>
          {state.wishlist.length === 0 ? (
            <div>
              <h3>You don't have any items in your wish list</h3>
              <button
                className="btn-text btn-style-color"
                onClick={() => navigate("/products")}
              >
                Go back to view products
              </button>
            </div>
          ) : (
            <h3>Your wishlisted items:</h3>
          )}

          <div className="product-display-list-container">
            {state.wishlist.map((item) => {
              return (
                <div
                  className="product-item-display "
                  key={item.product_id._id}
                >
                  <div className="card-container">
                    <div className="card-large">
                      <button
                        className="card-remove-btn"
                        onClick={() =>
                          dispatch({ type: REMOVE_FROM_WISHLIST, item })
                        }
                      >
                        &times;
                      </button>
                      <div className="card-content">
                        <img
                          className="image-card-size-large image-size-setter"
                          src={item.product_id.url}
                          width="100%"
                          height="auto"
                          alt={item.product_id.name}
                        />
                        <h3> {item.product_id.name} </h3>
                        <div>Rs. {item.product_id.price}</div>
                        {item.product_id.availability && <div> In Stock </div>}
                        {!item.product_id.availability && (
                          <div> Out of Stock </div>
                        )}

                        {item.product_id.fast_delivery ? (
                          <div> Fast Delivery </div>
                        ) : (
                          <div> 3 days minimum </div>
                        )}
                      </div>
                    </div>

                    <div className="card-large-showSimilar-section">
                      <ButtonAddToCart item={item} />{" "}
                      <button className="btn-text btn-style-color ">
                        <Link
                          to={`/products/${item.product_id._id}`}
                          className="btn-style-color link-btn"
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
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
export default WishListdisplay;
