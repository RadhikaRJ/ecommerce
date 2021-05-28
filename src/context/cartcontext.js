import { createContext, useContext, useReducer, useState } from "react";
import { cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext();

const initialState = {
  wishList: [],
  cart: [],
  grandTotalValue: 0,
};

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
