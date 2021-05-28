import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";

export const AuthContext = createContext();
export const userCredentials = {
  usernname: "neog",
  password: "neog",
};
export function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    login: false,
    userCredVerification: false,
  });
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
