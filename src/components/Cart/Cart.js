import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props.cart);

  let total = 0;
  let shipping = 0;
  for (const product of props.cart) {
    // console.log(product);
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = ((total * 10) / 100).toFixed(2); // tax = total*10*01;
  const grandTotal = total + shipping + parseFloat(tax);

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>Selected Items: {props.cart.length}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Price: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
