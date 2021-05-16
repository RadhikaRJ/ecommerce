import "../../styles/button.css";
import {useState} from "react";
import { useCartContext } from "../../context/cartcontext";
import { ADD_TO_CART } from "../../constants/constants";
function ButtonAddToCart({item}){
    const [inCartStatus,setInCartStatus]=useState(false);
    const {dispatch}=useCartContext();
    return(
        <button class="btn-text btn-style-color btn" onClick={()=>{
                dispatch({type:ADD_TO_CART,item});
                setInCartStatus((inCartStatus)=>!inCartStatus);              
            }
            
        }>{inCartStatus ? "Item In Cart" : "Add to cart"}</button>
    )
}

export default ButtonAddToCart;
