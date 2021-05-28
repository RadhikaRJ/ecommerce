import {
  SORT,
  TOGGLE_FAST_DELIVERY,
  TOGGLE_IN_STOCK,
} from "../constants/constants";

export function filterReducer(state, action) {
  switch (action.type) {
    case SORT:
      return {
        ...state,
        sortBy: action.payload,
      };
      break;
    case TOGGLE_IN_STOCK:
      return {
        ...state,
        showAllInventory: !state.showAllInventory,
      };
      break;
    case TOGGLE_FAST_DELIVERY:
      return {
        ...state,
        showFastDeliveryOnly: !state.showFastDeliveryOnly,
      };
  }
}
