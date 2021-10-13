import "../styles/productCard.css";
import "../styles/button.css";
import "../styles/filters.css";

import { PRICE_HIGH_TO_LOW, PRICE_LOW_TO_HIGH } from "../constants/constants";
import ButtonAddToCart from "../displayComponents/addToCartButton/addToCart";
import ButtonAddToWishList from "../displayComponents/wishListButton/wishListItem";
import { Link } from "react-router-dom";
import { useFilterContext } from "../context/filtercontext";
import { useState } from "react";
import FilterMenu from "../displayComponents/filterMenu/filterMenu";

import { useDataContext } from "../context/datacontext";

function ProductList() {
  const productData = useDataContext();

  const { sortBy, showFastDeliveryOnly, showAllInventory, filterDispatch } =
    useFilterContext();
  const [priceRange, setPriceRange] = useState(3000);

  function getDataSortedByPrice(productDataList, sortBy) {
    if (sortBy && sortBy === PRICE_LOW_TO_HIGH) {
      return productDataList.sort((a, b) => a["price"] - b["price"]);
    }

    if (sortBy && sortBy === PRICE_HIGH_TO_LOW) {
      return productDataList.sort((a, b) => b["price"] - a["price"]);
    }

    return productDataList;
  }

  function getDataFilteredByAvailabilityAndDelivery(
    productDataList,
    { showFastDeliveryOnly, showAllInventory }
  ) {
    return productDataList
      .filter(({ availability }) => (showAllInventory ? true : availability))
      .filter(({ fast_delivery }) =>
        showFastDeliveryOnly ? fast_delivery : true
      );
  }

  function getDataFilteredByPriceRange(productDataList, priceRange) {
    return productDataList.filter(({ price }) =>
      price <= priceRange ? true : false
    );
  }

  const dataSortedbyPrice = getDataSortedByPrice(productData, sortBy);

  const dataFilteredByAvailabilityStockPrice =
    getDataFilteredByAvailabilityAndDelivery(dataSortedbyPrice, {
      showFastDeliveryOnly,
      showAllInventory,
    });

  const dataFilteredbyPrice = getDataFilteredByPriceRange(
    dataFilteredByAvailabilityStockPrice,
    priceRange
  );

  return (
    <div className="inventory-page-container">
      <FilterMenu
        filterDispatch={filterDispatch}
        setPriceRange={setPriceRange}
        priceRange={priceRange}
      />
      <div className="product-display-list-container apply-shadow">
        {dataFilteredbyPrice &&
          dataFilteredbyPrice.map((item) => {
            return (
              <div className="product-item-display " key={item._id}>
                <div className="card-container ">
                  <div className="card-large ">
                    <ButtonAddToWishList item={item} />

                    <div className="card-content ">
                      <img
                        className="image-card-size-large image-size-setter"
                        src={item.url}
                        width="100%"
                        height="auto"
                        alt={item.productName}
                      />
                      <h3> {item.name} </h3>
                      <div>Rs. {item.price}</div>
                      {item.availability && <div> In Stock </div>}
                      {!item.availability && <div> Out of Stock </div>}

                      {item.fast_delivery ? (
                        <div> Fast Delivery </div>
                      ) : (
                        <div> 3 days minimum </div>
                      )}
                    </div>
                  </div>
                  <div className="card-large-showSimilar-section ">
                    <ButtonAddToCart item={item} />{" "}
                    <button className="btn-text btn-style-color ">
                      <Link
                        to={`/products/${item._id}`}
                        className="btn-style-color link-btn"
                      >
                        View Details
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProductList;
