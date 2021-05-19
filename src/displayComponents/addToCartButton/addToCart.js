import "../../styles/button.css";
import { useState } from "react";
import { useCartContext } from "../../context/cartcontext";
import { ADD_TO_CART } from "../../constants/constants";
function ButtonAddToCart({ item }) {
  const [inCartStatus, setInCartStatus] = useState(false);
  const { dispatch } = useCartContext();

  function additionToCart(item, inCartStatus) {
    dispatch({ type: ADD_TO_CART, item });
    setInCartStatus((inCartStatus) => !inCartStatus);
  }
  return (
    <button
      class="btn-text btn-style-color btn"
      onClick={() => additionToCart(item, inCartStatus)}
    >
      {inCartStatus ? "Item In Cart" : "Add to cart"}
    </button>
  );
}

export default ButtonAddToCart;
