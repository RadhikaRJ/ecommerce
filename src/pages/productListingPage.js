//import { productData } from "../data/productData";
import "../styles/productCard.css";
import "../styles/button.css";
import "../styles/filters.css";

import {
  PRICE_HIGH_TO_LOW,
  PRICE_LOW_TO_HIGH,
  SUCCESSFULLY_FETCHED_USER_WISHLIST_DATA,
  FAILED_TO_FETCH_USER_WISHLIST_DATA,
  SUCCESSFULLY_FETCHED_USER_CART_ITEMS,
  FAILED_TO_FETCH_USER_CART_ITEMS,
} from "../constants/constants";
import ButtonAddToCart from "../displayComponents/addToCartButton/addToCart";
import ButtonAddToWishList from "../displayComponents/wishListButton/wishListItem";
import { Link } from "react-router-dom";
import { useFilterContext } from "../context/filtercontext";
import { useEffect, useState } from "react";
import FilterMenu from "../displayComponents/filterMenu/filterMenu";
import { retrieveToken } from "../utility/retrieveStoredToken";
import axios from "axios";
import { useDataContext } from "../context/datacontext";
import { useAuth } from "../context/authcontext";

function ProductList() {
  const productData = useDataContext();
  const { dispatch } = useAuth();

  const fetchUserWishlistedProducts = async () => {
    const token = retrieveToken();

    try {
      const response = axios
        .get("http://localhost:3000/wishlist/", { headers: token })
        .then((response) => {
          if (response.data.success) {
            dispatch({
              type: SUCCESSFULLY_FETCHED_USER_WISHLIST_DATA,
              payload: response.data.userWishlist.wishlist_product_list,
            });
            return response.data.userWishlist.wishlist_product_list;
          } else {
            dispatch({
              type: FAILED_TO_FETCH_USER_WISHLIST_DATA,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserWishlistedProducts();
  }, []);

  const fetchUserCart = async () => {
    const token = retrieveToken();

    try {
      const response = axios
        .get("http://localhost:3000/cart/", { headers: token })
        .then((response) => {
          if (response.data.success) {
            dispatch({
              type: SUCCESSFULLY_FETCHED_USER_CART_ITEMS,
              payload: response.data.userCart.cart_product_list,
            });
            return response.data.cart_product_list;
          } else {
            dispatch({
              type: FAILED_TO_FETCH_USER_CART_ITEMS,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserCart();
  }, []);

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
              <div className="product-item-display " key={item.id}>
                <div class="card-container ">
                  <div class="card-large ">
                    <ButtonAddToWishList item={item} />

                    <div class="card-content ">
                      <img
                        class="image-card-size-large image-size-setter"
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
                  <div class="card-large-showSimilar-section ">
                    <ButtonAddToCart item={item} />{" "}
                    <button class="btn-text btn-style-color ">
                      <Link
                        to={`/products/${item._id}`}
                        class="btn-style-color link-btn"
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
