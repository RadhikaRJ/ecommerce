import { useCartContext } from "../context/cartcontext";

import "../styles/productCard.css";
import "../styles/button.css";
import { REMOVE_FROM_WISHLIST } from "../constants/constants";
function WishListdisplay(){

    const {state,dispatch}=useCartContext();

    return(
        <div>
<h3>Your wishlisted items:</h3>
    
    <div className="product-display-list-container">
        
        
{
    state.wishList.map((item)=>{
        return(
            <div
                className="product-item-display"
                    key={item.id}
                    
                >
                   <div class="card-container">
                        <div class="card-medium">
                        <button class="card-remove-btn" onClick={()=>dispatch({type:REMOVE_FROM_WISHLIST,item})}>&times;</button>
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
        </div>
        )
}export default WishListdisplay;