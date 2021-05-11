import {NavLink} from "react-router-dom";
import "../../styles/nav.css";
function Navigation(){

    return(<div>
        <nav class="navigation container ">
                            <h1>🌼Udyaan Bazaar🌼</h1>
                            <ul class="list-non-bullet nav-pills">
                                <li class="list-item-inline">
                                    <NavLink to="/" class="link" ><span class="material-icons md-24">home</span></NavLink>
                                </li>
                                <li class="list-item-inline">
                                    <NavLink to="/productlist" class="link"><span class="material-icons-outlined">inventory_2</span></NavLink>
                                </li>
                                <li class="list-item-inline">
                                    <NavLink to="/wishlistpage" class="link"><span class="material-icons">favorite</span></NavLink>
                                </li>
                                <li class="list-item-inline">
                                    <NavLink to="/cartpage" class="link"><span class="material-icons">shopping_cart</span></NavLink>
                                </li>

                            </ul>
                        </nav>
    </div>)
}

export default Navigation;