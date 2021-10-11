import "../../styles/button.css";
import { useState } from "react";
import { useAuth } from "../../context/authcontext";
import {
  SET_LOADING_TO_TRUE,
  SUCCESSFULLY_FETCHED_USER_CART_ITEMS,
  FAILED_TO_FETCH_USER_CART_ITEMS,
  SET_LOADING_TO_FALSE,
} from "../../constants/constants";
import axios from "axios";
import { retrieveToken } from "../../utility/retrieveStoredToken";
import { toast } from "react-toastify";

function ButtonAddToCart({ item }) {
  const [inCartStatus, setInCartStatus] = useState(false);
  const { dispatch } = useAuth();

  async function additionToCart() {
    const token = retrieveToken();
    console.log("token: " + token.authenticationToken);

    console.log("item id: " + item._id.toString());
    dispatch({ type: SET_LOADING_TO_TRUE });
    setInCartStatus((inCartStatus) => !inCartStatus);
    try {
      const response = await axios.post(
        "http://localhost:3000/cart/",

        { itemInCart_id: item._id.toString(), itemInCart_quantity: 1 },

        { headers: token }
      );
      if (response.data.success) {
        toast.success("successfully added product to cart!");
      }
    } catch (error) {
      toast.error("Failed to add product to user cart!");
      console.log(error.message);
    }
    fetchUpdatedCart();
    dispatch({ type: SET_LOADING_TO_FALSE });
  }

  function fetchUpdatedCart() {
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
  }

  return (
    <button
      className="btn-text btn-style-color btn"
      onClick={() => additionToCart()}
    >
      {inCartStatus ? "Item In Cart" : "Add to cart"}
    </button>
  );
}

export default ButtonAddToCart;
