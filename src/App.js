
import './App.css';
import ProductList from "../src/pages/productListingPage";
import Navigation from "../src/displayComponents/Navigation/navbar";
import Footer from "../src/displayComponents/Footer/footer";
import { Routes,Route } from 'react-router-dom';
import Checkout from "./pages/private/checkout";
import Homepage from './pages/homepage';
import Cartdisplay from './pages/cartItemsPage';
import WishListdisplay from './pages/wishlistedItemsPage';
import PrivateRoute from './PrivateRoute';
import Loginpage from './pages/login';
import ProductDetails from "./pages/productDetails";
function App() {
  return (
    <div className="App">
     <Navigation/>

      <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      <Route exact path="/productlist" element={<ProductList/>}/>
      <Route exact path="/cartpage" element={<Cartdisplay/>}/>
      <Route exact path="/wishlistpage" element={<WishListdisplay/>}/>
      <PrivateRoute exact path="/checkout" element={<Checkout/>}/>
      <Route exact path="/loginpage" element={<Loginpage/>}/>
      <Route exact path="/productlist/:productId" element={<ProductDetails/>} />
      </Routes>
    
     <Footer/>
    </div>
  );
}

export default App;
