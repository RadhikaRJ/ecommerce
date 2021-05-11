import {createContext, useContext, useReducer, useState} from "react";
import { ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    INCREMENT_ITEM_QUANTITY,
    DECREMENT_ITEM_QUANTITY } from "../constants/constants";


export const CartContext=createContext();

export const wishList=[];
export const cart=[];


 export function CartContextProvider({children}){
   
    
    const [state,dispatch]=useReducer(cartReducer,{wishList,cart});

    


    return(
        <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>
    );
}

export function useCartContext(){
    return useContext(CartContext);
}


function cartReducer(state,action){

    switch(action.type){

        case ADD_TO_CART:
            return{
                ...state,
                cart: state.cart.concat(action.item),
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart:state.cart.filter((item)=>item.id!== action.item.id),
            }
        case ADD_TO_WISHLIST:
            return{
                ...state,
                wishList: state.wishList.concat(action.item),
            }
        case REMOVE_FROM_WISHLIST:
            return{
                ...state,
                wishList:state.wishList.filter((item)=>item.id!==action.item.id),
            }
        // case INCREMENT_ITEM_QUANTITY:
            default:
              return state;
    }
}