import {productData} from "../assets/productData";
import "../styles/productCard.css";
import "../styles/button.css";
import {useCartContext} from "../context/cartcontext";
import { ADD_TO_CART } from "../constants/constants";
import ButtonAddToCart from "../displayComponents/addToCartButton/addToCart";
import ButtonAddToWishList from "../displayComponents/wishListButton/wishListItem";
function ProductList(){

    const {dispatch} = useCartContext();
    return(<div className="product-display-list-container">
        {
            productData.map((item)=>{
                return(<div
                className="product-item-display"
                    key={item.id}
                    
                >
                   <div class="card-container">
                       
                        <div class="card-medium">
                        <ButtonAddToWishList item={item}/> 

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
                            <div class="card-medium-showSimilar-section">
                                   
                                    <ButtonAddToCart item={item}/> 
                            </div>
                        
                            
                    </div>    

                </div>)
            })
        }
    </div>)
}

export default ProductList;