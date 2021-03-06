import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { CartContextProvider } from "./context/cartcontext";
import { AuthContextProvider } from "./context/authcontext";
import { FilterContextProvider } from "./context/filtercontext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <CartContextProvider>
          <FilterContextProvider>
            <App />
          </FilterContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
