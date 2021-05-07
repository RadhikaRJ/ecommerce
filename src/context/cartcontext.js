import {createContext, useContext, useReducer} from "react";

export const CartContext=createContext();

export const wishList=[];
export const cart=[];

function getTotalCheckOutPrice(acc,value){
    return {totalSum:acc.sum+value.price*value.quantity}
}
function CartContextProvider({children}){
    const totalCheckoutAmount=state.cart.reduce(getTotalCheckOutPrice,{totalSum:0});

    const [state,dispatch]=useReducer(cartReducer,{wishList,cart, totalCheckoutAmount});
    return(
        <CartContext.Provider value={{wishList:state.wishList,cart:state.cart,dispatch, totalCheckoutAmount}}>{children}</CartContext.Provider>
    );
}

export function useCartContext(){
    return useContext(CartContext);
}

export default CartContextProvider;

function cartReducer(state,action){

    switch(action.type){

        case "ADD_TO_CART":
            return{
                wishList: state.wishList,
                cart: state.cart.concat(action.item)
            }
            break;
            default:
              return;
    }
}