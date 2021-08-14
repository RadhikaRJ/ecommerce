import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();
// export const userCredentials = {
//   usernname: "neog",
//   password: "neog",
// };
export function AuthContextProvider({ children }) {
  const initialState = {
    products: [],
    cart: [],
    wishlist: [],
    loading: false,
    product: {},
    user: {},
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
