import {
  INVALID_CREDENTIALS,
  LOG_IN,
  LOG_OUT,
  VALID_CREDENTIALS,
  USER_DETAILS,
  SUCCESSFULLY_FETCHED_USER_WISHLIST_DATA,
  FAILED_TO_FETCH_USER_WISHLIST_DATA,
  SUCCESSFULLY_FETCHED_USER_CART_ITEMS,
  FAILED_TO_FETCH_USER_CART_ITEMS,
  SET_LOADING_TO_TRUE,
  SET_LOADING_TO_FALSE,
} from "../constants/constants";

export function authReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case LOG_IN:
      localStorage.setItem("TOKEN", payload);
      return state;
    case LOG_OUT:
      localStorage.removeItem("TOKEN", payload);
      return { ...state, user: {} };
    case INVALID_CREDENTIALS:
      return { ...state, userCredVerification: false };
    case VALID_CREDENTIALS:
      return { ...state, userCredVerification: true };
    case USER_DETAILS:
      return { ...state, user: payload };
    case SUCCESSFULLY_FETCHED_USER_WISHLIST_DATA:
      return { ...state, wishlist: payload };
    case FAILED_TO_FETCH_USER_WISHLIST_DATA:
      return { ...state, wishlist: [] };
    case SUCCESSFULLY_FETCHED_USER_CART_ITEMS:
      return { ...state, cart: payload };
    case FAILED_TO_FETCH_USER_CART_ITEMS:
      return { ...state, cart: [] };
    case SET_LOADING_TO_TRUE:
      return { ...state, loading: true };
    case SET_LOADING_TO_FALSE:
      return { ...state, loading: false };

    default:
      return state;
  }
}
