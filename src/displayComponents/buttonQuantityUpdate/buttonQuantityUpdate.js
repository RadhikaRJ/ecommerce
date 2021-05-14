
import "../../styles/button.css"
import {useState} from "react";
import { useCartContext } from "../../context/cartcontext";
import {INCREMENT_ITEM_QUANTITY,DECREMENT_ITEM_QUANTITY} from "../../constants/constants";
function ButtonQuantityUpdate({item}){
     
    const {dispatch}=useCartContext();

    const[itemQuantity,setItemQuantity]=useState(item.quantity);
    return(
        <div className="btn-quantity-container">
        <button className="btn-quantity" 
        onClick={()=>{
            setItemQuantity((itemQuantity)=>itemQuantity+1)
            dispatch({type:INCREMENT_ITEM_QUANTITY, item})
        }}
        
        >+</button>
       <span>{itemQuantity}</span>
        <button className="btn-quantity"
        onClick={()=>{
            if(itemQuantity>1){
                setItemQuantity(itemQuantity=>itemQuantity-1)
                dispatch({type:DECREMENT_ITEM_QUANTITY,item})
            }
            }}
        >-</button>                                                
        </div>
    )
}

export default ButtonQuantityUpdate;