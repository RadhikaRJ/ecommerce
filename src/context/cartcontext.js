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
export const grandTotalValue=0;


 export function CartContextProvider({children}){
   
    
   
    
    const [state,dispatch]=useReducer(cartReducer,{wishList,cart,grandTotalValue});

    
    


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
        case INCREMENT_ITEM_QUANTITY:
            return{
                ...state,
                cart:state.cart.map((item)=>{
                    if(item.id === action.item.id){
                        return {...item,quantity:action.item.quantity+1}
                    }
                    return item;
                })
            }
        case DECREMENT_ITEM_QUANTITY:
            return{
                ...state,
                cart:state.cart.map((item)=>{
                    if(item.id === action.item.id){
                        return {...item,quantity:action.item.quantity-1}
                    }
                    return item;
                })
            }
            default:
              return state;
    }
}