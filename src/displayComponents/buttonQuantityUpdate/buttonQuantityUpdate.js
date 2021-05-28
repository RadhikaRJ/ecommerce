import "../../styles/button.css";
import { useState } from "react";
import { useCartContext } from "../../context/cartcontext";
import {
  INCREMENT_ITEM_QUANTITY,
  DECREMENT_ITEM_QUANTITY,
} from "../../constants/constants";
function ButtonQuantityUpdate({ item }) {
  const { dispatch } = useCartContext();

  const [itemQuantity, setItemQuantity] = useState(item.quantity);

  function decrementQuantityOfItem(item, itemQuantity) {
    if (itemQuantity > 1) {
      setItemQuantity((itemQuantity) => itemQuantity - 1);
      dispatch({ type: DECREMENT_ITEM_QUANTITY, item });
    }
  }

  function incrementQuantityOfItem(item, itemQuantity) {
    setItemQuantity((itemQuantity) => itemQuantity + 1);
    dispatch({ type: INCREMENT_ITEM_QUANTITY, item });
  }

  return (
    <div className="btn-quantity-container">
      <button
        className="btn-quantity"
        onClick={() => incrementQuantityOfItem(item, itemQuantity)}
      >
        +
      </button>
      <span>{itemQuantity}</span>
      <button
        className="btn-quantity"
        onClick={() => decrementQuantityOfItem(item, itemQuantity)}
      >
        -
      </button>
    </div>
  );
}

export default ButtonQuantityUpdate;
