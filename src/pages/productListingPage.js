import {productData} from "../assets/productData";
import "../styles/productCard.css";
import "../styles/button.css";
function ProductList(){

    return(<div className="product-display-list-container">
        {
            productData.map(({
                id,
                name,
                image,
                price,
                productName,
                inStock,
                level,
                fastDelivery
              })=>{
                return(<div
                className="product-item-display"
                    key={id}
                    
                >
                   <div class="card-container">
                        <div class="card-medium">
                            <div class="card-content">
                                <img class="image-card-size-medium" src={image} width="100%" height="auto" alt={productName}/>
                                <h3> {name} </h3>
                                <div>Rs. {price}</div>
                                {inStock && <div> In Stock </div>}
                                {!inStock && <div> Out of Stock </div>}
                                <div>{level}</div>
                                {fastDelivery ? (
                                    <div> Fast Delivery </div>
                                        ) : (
                                    <div> 3 days minimum </div>
                                        )}
                                                   
                            
                            </div>
                            </div>
                            <div class="card-medium-showSimilar-section">
                                    <button class="btn-text btn-style-color">Add To Cart</button>
                            </div>
                        
                            
                    </div>    

                </div>)
            })
        }
    </div>)
}

export default ProductList;