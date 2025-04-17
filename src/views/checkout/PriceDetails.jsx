import React from 'react';

const PriceDetails = () => {
  const subtotal = 1000;
  const discount = 150;
  const delivery = 50;
  const total = subtotal - discount + delivery;

  return (
    <div className="checkout-section">
      <div className="section-header">Price Details</div>
      <p>Subtotal: ₹{subtotal}</p>
      <p>Discount: -₹{discount}</p>
      <p>Delivery Charges: ₹{delivery}</p>
      <hr />
      <h5>Total: ₹{total}</h5>
      <p className="text-success mt-2">You will save ₹{discount} on this order</p>
    </div>
  );
};

export default PriceDetails;
