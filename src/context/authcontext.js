
import {createContext,useContext,useState,useReducer} from "react";

export const AuthContext=createContext();

export function AuthContextProvider({children}){

const [userLogin,setUserLogin]=useState(true);
    return(
        <AuthContext.Provider value={{userLogin}}>{children}</AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}

