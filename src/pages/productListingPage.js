import {productData} from "../assets/productData";
import "../styles/productCard.css";
import "../styles/button.css";
import {useCartContext} from "../context/cartcontext";
function ProductList(){

    const {dispatch} = useCartContext();
    return(<div className="product-display-list-container">
        {
            productData.map((item)=>{
                return(<div
                className="product-item-display"
                    key={id}
                    
                >
                   <div class="card-container">
                        <div class="card-medium">
                            <div class="card-content">
                                <img class="image-card-size-medium" src={item.image} width="100%" height="auto" alt={iten.productName}/>
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
                                    <button class="btn-text btn-style-color" onClick={()=>dispatch({type:"ADD_TO_CART",item})}>Add To Cart</button>
                            </div>
                        
                            
                    </div>    

                </div>)
            })
        }
    </div>)
}

export default ProductList;