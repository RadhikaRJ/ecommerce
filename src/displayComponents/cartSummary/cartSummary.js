import { useCartContext } from "../../context/cartcontext"


function CartSummary(){
    function grandTotalCalculator(acc,value){
        return acc + value.price * value.quantity;
    }
    const {state}=useCartContext();
    const grandTotalValue=state.cart.reduce(grandTotalCalculator,0);

    console.log(state.grandTotalValue.sum);
    return(<div>
        <h3>Cart Summary</h3>
        <div>
            <table>
                <tr>
                    
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>                    
                </tr>
                {
                state.cart.length !== 0 && state.cart.map((item)=>{
                    return(<tr>
                        
                        <th>{item.name}</th>
                        <th>{item.price}</th>
                        <th>{item.quantity}</th>
                        <th>{item.price * item.quantity}</th>
                    </tr>)
                })
                }
                <tr>
                    <th>Grand Total:</th>
                    <th>{grandTotalValue}</th>
                </tr>
            </table>
        </div>
    </div>)
}



export default CartSummary;