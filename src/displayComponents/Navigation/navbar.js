import {Link} from "react-router-dom";
import "../../styles/nav.css";
function Navigation(){

    return(<div>
        <nav class="navigation container ">
                            <h1>🌼Udyaan Bazaar🌼</h1>
                            <ul class="list-non-bullet nav-pills">
                                <li class="list-item-inline">
                                    <Link to="/" class="link" ><span class="material-icons md-24">home</span></Link>
                                </li>
                                <li class="list-item-inline">
                                    <Link to="/favorites" class="link"><span class="material-icons">favorite</span></Link>
                                </li>
                                <li class="list-item-inline">
                                    <Link to="/cart" class="link"><span class="material-icons">shopping_cart</span></Link>
                                </li>

                            </ul>
                        </nav>
    </div>)
}

export default Navigation;