import { useCartContext } from "../context/cartcontext";
import "../styles/cart.css";
import "../styles/productCard.css";
import "../styles/button.css";
import { REMOVE_FROM_CART } from "../constants/constants";
import CartSummary from "../displayComponents/cartSummary/cartSummary";
import {useNavigate} from "react-router-dom";
function Cartdisplay(){

    const {state,dispatch}=useCartContext();
    const navigate=useNavigate();
    return(
       <div >
           {state.cart.length!==0 && <h2>Your Cart</h2> || <h2>Your cart is empty</h2>}
           {state.cart.length!==0 && <button class="btn-text btn-style-color" onClick={()=>navigate("/checkout")}>Checkout</button> || <button class="btn-text btn-style-color" onClick={()=>navigate("/productlist")}>Go back to view products</button>}
            { state.cart.length!==0 && <div className="cart-container">
            
                 <div className="product-display-list-container cart-items-section">       
                    {
                        state.cart.map((item)=>{
                            return(
                                <div
                                    className="product-item-display"
                                        key={item.id}
                                        
                                    >
                                    <div class="card-container">
                                            <div class="card-medium">
                                            <button class="card-remove-btn" onClick={()=>dispatch({type:REMOVE_FROM_CART,item})}>&times;</button>
                                                <div class="card-content">
                                                    <img class="image-card-size-medium" src={item.image} width="100%" height="auto" alt={item.productName}/>
                                                    <h3> {item.name} </h3>
                                                    <div>Rs. {item.price}</div>
                                                    {item.inStock && <div> In Stock </div>}
                                                    {!item.inStock && <div> Out of Stock </div>}
                                                    <div>{item.level}</div>
                                                    {item.fastDelivery ? (
                                                        <div> Fast Delivery </div>
                                                            ) : (
                                                        <div> 3 days minimum </div>
                                                            )}
                                                                    
                                                
                                                </div>
                                                </div>
                                                
                                            
                                                
                                        </div>    

                                    </div>
                            )
                        })
                    }
        
                </div> 
            
                <div className="cart-summary-section">
                <CartSummary/>
                </div>

            </div>}
       </div>
        )
}export default Cartdisplay;