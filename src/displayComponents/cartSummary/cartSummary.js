import { useCartContext } from "../../context/cartcontext";
import "../../styles/cartSummaryTable.css";

function CartSummary() {
  function grandTotalCalculator(acc, value) {
    return acc + value.price * value.quantity;
  }
  const { state } = useCartContext();
  const grandTotalValue = state.cart.reduce(grandTotalCalculator, 0);

  return (
    <div>
      <h3>Cart Summary</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Unit Price INR</th>
              <th>Quantity</th>
              <th>Total Price INR</th>
            </tr>
          </thead>
          <tbody>
            {state.cart.length !== 0 &&
              state.cart.map((item) => {
                return (
                  <tr>
                    <th>{item.name}</th>
                    <th>{item.price}</th>
                    <th>{item.quantity}</th>
                    <th>{item.price * item.quantity}</th>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <th colspan="3">Grand Total:</th>
              <th className="cart-grand-total-amount">
                Rs. {grandTotalValue}/-{" "}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default CartSummary;
