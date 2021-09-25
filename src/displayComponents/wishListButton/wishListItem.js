import "../../styles/button.css";
import { useState } from "react";
import { useCartContext } from "../../context/cartcontext";
import { ADD_TO_WISHLIST } from "../../constants/constants";
function ButtonAddToWishList({ item }) {
  const [isWishListedStatus, setIsWishListedStatus] = useState(false);
  const { dispatch } = useCartContext();
  return (
    <button
      className="btn-icon btn-wishListed"
      onClick={() => {
        setIsWishListedStatus((isWishListedStatus) => !isWishListedStatus);
        dispatch({ type: ADD_TO_WISHLIST, item });
      }}
    >
      <span className="material-icons-outlined">
        {isWishListedStatus ? "favorite" : "favorite_border"}
      </span>{" "}
    </button>
  );
}

export default ButtonAddToWishList;
