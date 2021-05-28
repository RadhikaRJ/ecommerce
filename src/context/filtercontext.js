import { useReducer, createContext, useContext } from "react";
import { filterReducer } from "../reducers/filterReducer";

export const FilterContext = createContext();

export function FilterContextProvider({ children }) {
  const [{ sortBy, showFastDeliveryOnly, showAllInventory }, filterDispatch] =
    useReducer(filterReducer, {
      sortBy: null,
      showFastDeliveryOnly: false,
      showAllInventory: true,
    });

  return (
    <FilterContext.Provider
      value={{ sortBy, showFastDeliveryOnly, showAllInventory, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilterContext() {
  return useContext(FilterContext);
}
