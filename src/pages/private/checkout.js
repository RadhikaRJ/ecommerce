import CartSummary from "../../displayComponents/cartSummary/cartSummary";
import "../../styles/cart.css";
function Checkout() {
  return (
    <div class="checkout-container">
      <CartSummary></CartSummary>
    </div>
  );
}

export default Checkout;
