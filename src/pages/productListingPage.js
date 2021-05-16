import {productData} from "../assets/productData";
import "../styles/productCard.css";
import "../styles/button.css";
import "../styles/filters.css";

import { PRICE_HIGH_TO_LOW, PRICE_LOW_TO_HIGH, SORT, TOGGLE_FAST_DELIVERY, TOGGLE_IN_STOCK } from "../constants/constants";
import ButtonAddToCart from "../displayComponents/addToCartButton/addToCart";
import ButtonAddToWishList from "../displayComponents/wishListButton/wishListItem";
import {Link} from "react-router-dom";
import { useFilterContext } from "../context/filtercontext";
import {useState} from "react";
import FilterMenu from "../displayComponents/filterMenu/filterMenu";
function ProductList(){


    
    const {sortBy, showFastDeliveryOnly, showAllInventory,filterDispatch}= useFilterContext();
    const [priceRange,setPriceRange]=useState(250);


    function getDataSortedByPrice(productDataList,sortBy){
        if(sortBy && sortBy === PRICE_LOW_TO_HIGH ){
            return productDataList.sort((a,b)=>a["price"]-b["price"]);
        }

        if(sortBy && sortBy === PRICE_HIGH_TO_LOW){
            return productDataList.sort((a,b)=>b["price"]-a["price"]);
        }

        return productDataList;
    }

    function getDataFilteredByAvailabilityAndDelivery(productDataList,{showFastDeliveryOnly,showAllInventory}){
        return productDataList.filter(({inStock})=>(showAllInventory  ? true : inStock)) 
        .filter(({fastDelivery})=>(showFastDeliveryOnly ? fastDelivery : true))
    }

    function getDataFilteredByPriceRange(productDataList,priceRange){
        return productDataList.filter(({price})=>( price<=priceRange ? true : false));
    }
    
    const dataSortedbyPrice=getDataSortedByPrice(productData,sortBy);
    
    const dataFilteredByAvailabilityStockPrice=getDataFilteredByAvailabilityAndDelivery(dataSortedbyPrice,{showFastDeliveryOnly,showAllInventory});
    const dataFilteredbyPrice=getDataFilteredByPriceRange(dataFilteredByAvailabilityStockPrice,priceRange);

    return(<div className="inventory-page-container">
        <FilterMenu filterDispatch={filterDispatch} setPriceRange={setPriceRange} priceRange={priceRange}/>
        <div className="product-display-list-container apply-shadow">
        {
            dataFilteredbyPrice.map((item)=>{
                return(<div
                className="product-item-display "
                    key={item.id}
                    
                >
                   <div class="card-container ">
                       
                        <div class="card-large ">
                        <ButtonAddToWishList item={item}/> 

                            <div class="card-content ">
                                <img class="image-card-size-large" src={item.image} width="100%" height="auto" alt={item.productName}/>
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
                            <div class="card-large-showSimilar-section ">
                                   
                                    <ButtonAddToCart item={item}/> <button class="btn-text btn-style-color ">
                                    <Link  to={`/productlist/${item.id}`} class="btn-style-color link-btn">View Details</Link></button>
                            </div>
                        
                            
                    </div>    

                </div>)
            })
        }
    </div>
    </div>)
}

export default ProductList;