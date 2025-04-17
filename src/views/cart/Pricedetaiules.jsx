


import React from "react";
import "../../assets/css/cart.css";
import cartpricebottom from "../../assets/images/cartpricebottom.png";

const Pricedetaiules = ({ cartItems }) => {
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const discount = 8.0;
  const total = subtotal - discount;

  const handleCheckout = () => {
    console.log("Proceeding to checkout with items:", cartItems);
  };

  return (
    <div className="col-lg-4 summerycol">
      <div className="summary-wrapper">
        <div className="card p-4 summary-card">
          <h5 className="mb-3 text-muted">Price details</h5>

          <div className="d-flex justify-content-between mb-2">
            <span><b>Subtotal</b></span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span><b>Discount</b></span>
            <span className="text-success">- ₹{discount.toFixed(2)}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span><b>Delivery Charges</b></span>
            <span className="text-success">Free</span>
          </div>

          <hr />

          <div className="d-flex justify-content-between mb-2 totalamount">
            <span><b>Total Amount</b></span>
            <span><b>₹{total.toFixed(2)}</b></span>
          </div>

          <div className="youwillsave text-success mb-3">
            You will save ₹{discount.toFixed(2)} on this order
          </div>

          <button className="btn checkoutbtn" onClick={handleCheckout}>
            <b>Proceed to checkout</b>
          </button>
        </div>

        <img
          className="cartpricebottom"
          src={cartpricebottom}
          alt="cartpricebottom"
        />
      </div>
    </div>
  );
};

export default Pricedetaiules;
