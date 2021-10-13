import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authcontext";
import { retrieveToken } from "../../utility/retrieveStoredToken";
import {
  SUCCESSFULLY_FETCHED_USER_WISHLIST_DATA,
  FAILED_TO_FETCH_USER_WISHLIST_DATA,
} from "../../constants/constants";

function ButtonRemoveFromWishlist({ item }) {
  const { dispatch } = useAuth();

  async function removeFromWishlistHandler() {
    const token = retrieveToken();
    try {
      const response = await axios.delete("http://localhost:3000/wishlist/", {
        headers: token,
        data: { product_id: item._id.toString() },
      });
      if (response.data.success) {
        toast.success("Item removed from Wishlist successfully!");
      }
    } catch (error) {
      toast.error("Failed to remove item from wishlist");
      console.log(error.message);
    }

    fetchUpdatedWishlist();
  }

  function fetchUpdatedWishlist() {
    const token = retrieveToken();
    try {
      const response = axios
        .get("http://localhost:3000/wishlist/", { headers: token })
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
      console.log(error.message);
    }
  }
  return (
    <button
      className="card-remove-btn"
      onClick={() => removeFromWishlistHandler()}
    >
      {" "}
      &times;
    </button>
  );
}
export default ButtonRemoveFromWishlist;
