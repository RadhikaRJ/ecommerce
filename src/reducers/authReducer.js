import {
  INVALID_CREDENTIALS,
  LOG_IN,
  LOG_OUT,
  VALID_CREDENTIALS,
} from "../constants/constants";

export function authReducer(state, action) {
  switch (action.type) {
    case LOG_IN:
      return { ...state, login: true };
    case LOG_OUT:
      return { ...state, login: false };
    case INVALID_CREDENTIALS:
      return { ...state, userCredVerification: false };
    case VALID_CREDENTIALS:
      return { ...state, userCredVerification: true };
    default:
      return state;
  }
}
