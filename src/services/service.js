import axios from "axios";

//retreive product IDs of items wishlisted in one wishlit data record
export async function retrieveWishlistedProductIds(list) {
  const response = await axios
    .get("http://127.0.0.1:3000/wishlist/")
    .then((response) => {
      return response.data;
    });
  console.log(response);
  if (response.success) {
    const wishlistItems = response.wishlistItems;
    list = productIdFromWishlist(wishlistItems, list);
    console.log(list);
  }

  return list;
}

function productIdFromWishlist(wishlistItems, list) {
  return wishlistItems.map(({ wishlist_product_list }) => {
    return wishlist_product_list.map((i) => {
      return i.product_id;
    });
  });
}

//fetch productlist from server
export async function fetchProductDataFromServer() {
  const response = await axios
    .get("http://127.0.0.1:3000/product/")
    .then((resp) => {
      return resp.data;
    });

  if (response.success) {
    return response.product;
  }
  return response.success;
}
//by passing array of productId, fetch the product data from productlist
