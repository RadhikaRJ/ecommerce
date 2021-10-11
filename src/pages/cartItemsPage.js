import { useAuth } from "../context/authcontext";
import "../styles/cart.css";
import "../styles/productCard.css";
import "../styles/button.css";
import { REMOVE_FROM_CART } from "../constants/constants";
import CartSummary from "../displayComponents/cartSummary/cartSummary";
import { useNavigate, Navigate } from "react-router-dom";
import ButtonQuantityUpdate from "../displayComponents/buttonQuantityUpdate/buttonQuantityUpdate";
import { retrieveToken } from "../utility/retrieveStoredToken";
import axios from "axios";
import { useEffect } from "react";
import {
  SUCCESSFULLY_FETCHED_USER_CART_ITEMS,
  FAILED_TO_FETCH_USER_CART_ITEMS,
} from "../constants/constants";
function Cartdisplay() {
  const { state, dispatch } = useAuth();

  const navigate = useNavigate();

  const fetchUserCart = async () => {
    const token = retrieveToken();

    try {
      const response = axios
        .get("http://localhost:3000/cart/", { headers: token })
        .then((response) => {
          if (response.data.success) {
            dispatch({
              type: SUCCESSFULLY_FETCHED_USER_CART_ITEMS,
              payload: response.data.userCart.cart_product_list,
            });
            return response.data.cart_product_list;
          } else {
            dispatch({
              type: FAILED_TO_FETCH_USER_CART_ITEMS,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserCart();
  }, []);

  return (
    <div>
      {localStorage.getItem("TOKEN") ? (
        <div>
          {(state.cart.length !== 0 && <h2>Your Cart</h2>) || (
            <h2>Your cart is empty</h2>
          )}
          {(state.cart.length !== 0 && (
            <button
              className="btn-text btn-style-color"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          )) || (
            <button
              className="btn-text btn-style-color"
              onClick={() => navigate("/products")}
            >
              Go back to view products
            </button>
          )}
          {state.cart.length !== 0 && (
            <div className="cart-container">
              <div className="product-display-list-container cart-items-section">
                {state.cart.map((item) => {
                  return (
                    <div
                      key={item.itemInCart_id._id}
                      className="product-item-display"
                    >
                      <div className="card-container">
                        <div className="card-medium">
                          <button
                            className="card-remove-btn"
                            onClick={() =>
                              dispatch({ type: REMOVE_FROM_CART, item })
                            }
                          >
                            &times;
                          </button>
                          <div className="card-content">
                            <img
                              className="image-card-size-medium image-size-setter"
                              src={item.itemInCart_id.url}
                              width="100%"
                              height="auto"
                              alt={item.itemInCart_id.name}
                            />
                            <h3> {item.itemInCart_id.name} </h3>
                            <div>Rs. {item.itemInCart_id.price}</div>
                            {item.itemInCart_id.availability && (
                              <div> In Stock </div>
                            )}
                            {!item.itemInCart_id.availability && (
                              <div> Out of Stock </div>
                            )}
                            <div>{item.itemInCart_id.level}</div>
                            {item.itemInCart_id.fast_delivery ? (
                              <div> Fast Delivery </div>
                            ) : (
                              <div> 3 days minimum </div>
                            )}

                            <ButtonQuantityUpdate item={item} />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="cart-summary-section">
                <CartSummary />
              </div>
            </div>
          )}
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
}
export default Cartdisplay;
