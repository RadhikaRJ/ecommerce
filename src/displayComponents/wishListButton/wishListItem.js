import "../../styles/button.css";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/authcontext";
import { retrieveToken } from "../../utility/retrieveStoredToken";
import { toast } from "react-toastify";
import {
  SET_LOADING_TO_TRUE,
  SET_LOADING_TO_FALSE,
  SUCCESSFULLY_FETCHED_USER_WISHLIST_DATA,
  FAILED_TO_FETCH_USER_WISHLIST_DATA,
} from "../../constants/constants";

function ButtonAddToWishList({ item }) {
  const [isWishListedStatus, setIsWishListedStatus] = useState(false);
  const { dispatch } = useAuth();

  async function addItemToWishlist() {
    const token = retrieveToken();
    dispatch({ type: SET_LOADING_TO_TRUE });
    setIsWishListedStatus((isWishListedStatus) => !isWishListedStatus);

    try {
      const response = await axios.post(
        "http://localhost:3000/wishlist/",
        {
          product_id: item._id,
        },
        { headers: token }
      );
      if (response.data.success) {
        toast.success("successfully added to wishlist");
      }
    } catch (error) {
      toast.error("Failed to add product to wishlist");
      console.log(error.message);
    }
    fetchUpdatedWishlist();
    dispatch({ type: SET_LOADING_TO_FALSE });
  }

  function fetchUpdatedWishlist() {
    const token = retrieveToken();
    try {
      const response = axios
        .get("http://localhost:3000/wishlist/", {
          headers: token,
        })
        .then((response) => {
          if (response.data.success) {
            dispatch({
              type: SUCCESSFULLY_FETCHED_USER_WISHLIST_DATA,
              payload: response.data.userWishlist.wishlist_product_list,
            });
            return response.data.userWishlist.wishlist_product_list;
          } else {
            dispatch({ type: FAILED_TO_FETCH_USER_WISHLIST_DATA });
          }
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <button
      className="btn-icon btn-wishListed"
      onClick={() => addItemToWishlist()}
    >
      <span className="material-icons-outlined">
        {isWishListedStatus ? "favorite" : "favorite_border"}
      </span>{" "}
    </button>
  );
}

export default ButtonAddToWishList;
