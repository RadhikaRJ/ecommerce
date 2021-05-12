
import {createContext,useContext,useState,useReducer} from "react";

export const AuthContext=createContext();
export const userCredentials={
    usernname: "neog",
    password: "neog"
}
export function AuthContextProvider({children}){




const [state,dispatch]=useReducer(authReducer,{login:false,userCredVerification:false});
    return(
        <AuthContext.Provider value={{state,dispatch}}>{children}</AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}

function authReducer(state,action){

    switch(action.type){

        case "LOG_IN":
            return {...state,login:true};
        case "LOG_OUT":
            return {...state,login:false};
        case "INVALID_CREDENTIALS":
            return {...state, userCredVerification:false}
        case "VALID_CREDENTIALS":
            return {...state, userCredVerification:true}
        default:
            return state;
    }
}