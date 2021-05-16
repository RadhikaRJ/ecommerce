import { useReducer, createContext, useContext } from "react";
import { SORT, TOGGLE_FAST_DELIVERY, TOGGLE_IN_STOCK } from "../constants/constants";
import { useCartContext } from "./cartcontext";

export const FilterContext = createContext();

export function FilterContextProvider({children}){

    const [{sortBy, showFastDeliveryOnly, showAllInventory},filterDispatch] = useReducer(filterReducer,{sortBy:null, showFastDeliveryOnly:false, showAllInventory:true});


    return(
        <FilterContext.Provider value={{ sortBy, showFastDeliveryOnly, showAllInventory,filterDispatch }}>{children}</FilterContext.Provider>
    )
};

export function useFilterContext(){
    return useContext(FilterContext);
}

function filterReducer(state,action){

    switch(action.type){
        case SORT:
            return{
                ...state,
                sortBy: action.payload
            }
            break;
        case TOGGLE_IN_STOCK:
            return{
                ...state,
                showAllInventory:!state.showAllInventory
            }
            break;
        case TOGGLE_FAST_DELIVERY:
            return{
                ...state,
                showFastDeliveryOnly:!state.showFastDeliveryOnly
            }

    }
}