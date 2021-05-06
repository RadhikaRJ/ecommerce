import logo from './logo.svg';
import './App.css';
import ProductList from "../src/pages/productListingPage";
import Navigation from "../src/displayComponents/Navigation/navbar";
import Footer from "../src/displayComponents/Footer/footer";
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Switch>
     <Route exact path="/"><ProductList/></Route>
     </Switch>
    
     <Footer/>
    </div>
  );
}

export default App;
