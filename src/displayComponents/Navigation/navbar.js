import { NavLink } from "react-router-dom";
import "../../styles/nav.css";
function Navigation() {
  return (
    <div>
      <nav className="navigation container ">
        <h1>🌼Udyaan Bazaar🌼</h1>
        <ul className="list-non-bullet nav-pills">
          <li className="list-item-inline">
            <NavLink to="/" className="link">
              <span className="material-icons md-24">home</span>
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/products" className="link">
              <span className="material-icons-outlined">inventory_2</span>
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/wishlist" className="link">
              <span className="material-icons">favorite</span>
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/cart" className="link">
              <span className="material-icons">shopping_cart</span>
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/login" className="link">
              <span className="material-icons">login</span>
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/user" className="link">
              <span className="material-icons">account_circle</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
