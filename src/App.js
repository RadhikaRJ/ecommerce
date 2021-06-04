import "./App.css";
import ProductList from "../src/pages/productListingPage";
import Navigation from "../src/displayComponents/Navigation/navbar";
import Footer from "../src/displayComponents/Footer/footer";
import { Routes, Route } from "react-router-dom";
import Checkout from "./pages/private/checkout";
import Homepage from "./pages/homepage";
import Cartdisplay from "./pages/cartItemsPage";
import WishListdisplay from "./pages/wishlistedItemsPage";
import PrivateRoute from "./PrivateRoute";
import Loginpage from "./pages/login";
import ProductDetails from "./pages/productDetails";
import UserRegistration from "./pages/userRegistration";
import UserDetails from "./pages/private/userDetails";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/products" element={<ProductList />} />
        <Route exact path="/cart" element={<Cartdisplay />} />
        <Route exact path="/wishlist" element={<WishListdisplay />} />
        <Route exact path="/login" element={<UserRegistration />} />
        <Route exact path="/products/:productId" element={<ProductDetails />} />
        <PrivateRoute exact path="/checkout" element={<Checkout />} />
        <Route exact path="/user" element={<UserDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
