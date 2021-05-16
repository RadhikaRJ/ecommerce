import { useParams } from "react-router-dom";
import {productData} from "../assets/productData";
import ButtonAddToCart from "../displayComponents/addToCartButton/addToCart";
import ButtonAddToWishList from "../displayComponents/wishListButton/wishListItem";
import "../styles/productCard.css";

function ProductDetails(){

    let { productId } = useParams();
    function getProductDetails(productDb,productId){
        return productDb.find((item)=>item.id===productId);
    }

    const detailsOfProduct = getProductDetails(productData, productId);
    return(<div>
    <div className="product-detail-card apply-shadow">
       <div className="product-detail-header">
       <h2>{detailsOfProduct.name}</h2>
            <div>
            <ButtonAddToCart item={detailsOfProduct}/>        
            <ButtonAddToWishList item={detailsOfProduct}/> 
            </div>
       </div>
      
        <div className="product-detail-description-container">
                <div classname="product-detail-image-section">
                    <img src={detailsOfProduct.image} className="product-detail-image-container"/>
                </div>
                <hr className="product-detail-section-divider"></hr>
                <div className="product-description-section">
                    <p><strong>Price:</strong> Rs.{detailsOfProduct.price} /- </p>
                    <p><strong>Brand:</strong> {detailsOfProduct.brand}</p>
                    <p><strong>Availability:</strong> {detailsOfProduct.inStock ? "Available" : "Currently out of stock"}</p>
                    <p><strong>Delivery:</strong> {detailsOfProduct.fastDelivery ? "Fast delivery available" : "3 days minimum"}</p>
                    <p><strong>Ideal for :</strong> {detailsOfProduct.idealFor}</p>
                    <p><strong>Suggested for:</strong> {detailsOfProduct.level} level gardeners</p>
                    <p><strong>Description:</strong> {detailsOfProduct.description}</p>
                </div>
        </div>

    </div>

    </div>)
}

export default ProductDetails;