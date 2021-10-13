import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authcontext";
import { retrieveToken } from "../../utility/retrieveStoredToken";
import {
  SUCCESSFULLY_FETCHED_USER_CART_ITEMS,
  FAILED_TO_FETCH_USER_CART_ITEMS,
} from "../../constants/constants";

function ButtonRemoveFromCart({ item }) {
  const { dispatch } = useAuth();

  async function removeItemFromCart() {
    const token = retrieveToken();
    console.log("token: " + token.authenticationToken);
    console.log("item Id " + item.itemInCart_id._id);
    try {
      const deleteResponse = await axios.delete("http://localhost:3000/cart/", {
        headers: token,
        data: {
          itemInCart_id: item.itemInCart_id._id.toString(),
        },
      });
      if (deleteResponse.data.success) {
        toast.success("Successfully removed item from your cart!");
      }
    } catch (error) {
      toast.error("something went wrong while removing product from cart!");
      console.log(error.message);
    }
    fetchUpdatedCart();
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
      console.log(error.message);
    }
  }
  return (
    <button className="card-remove-btn" onClick={() => removeItemFromCart()}>
      {" "}
      &times;
    </button>
  );
}
export default ButtonRemoveFromCart;
