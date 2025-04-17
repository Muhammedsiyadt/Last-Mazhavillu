import React from 'react'

import '../../assets/css/Checkout.css';

const Checkout = () => {
  return (
    <div>
      <div className="checkout-container">
      <div className="form-section">
        <div className="form-header">
          <h2>Delivery address</h2>
          <button className="add-address-btn">+ Add new address</button>
        </div>

        <form className="address-form">
          <div className="form-grid">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="10-digit mobile number" />
            <input type="text" placeholder="Pincode" />
            <input type="text" placeholder="Locality" />
          </div>

          <textarea placeholder="Address (Area and Street)" rows="3" />

          <div className="form-grid">
            <input type="text" placeholder="City/District/Town" />
            <select>
              <option>--Select State--</option>
            </select>
            <input type="text" placeholder="Landmark (Optional)" />
            <input type="text" placeholder="Alternate Phone (Optional)" />
          </div>

          <div className="address-type">
            <p>Address Type</p>
            <label>
              <input type="radio" name="addressType" defaultChecked />
              Home <span className="note">(All day delivery)</span>
            </label>
            <label>
              <input type="radio" name="addressType" />
              Work <span className="note">(Delivery between 10 AM - 5 PM)</span>
            </label>
          </div>

          <button type="submit" className="submit-btn">
          </button>
        </form>
      </div>

      <div className="price-section">
        <h3>Price details</h3>
        <div className="price-row">
          <span>Subtotal</span>
          <span>₹118.00</span>
        </div>
        <div className="price-row discount">
          <span>Discount</span>
          <span>- ₹8.00</span>
        </div>
        <div className="price-row">
          <span>Delivery Charges</span>
          <span className="free">Free</span>
        </div>
        <div className="price-row total">
          <span>Total Payable</span>
          <span>₹110.00</span>
        </div>
        <p className="savings-note">You will save ₹8.00 on this order</p>
      </div>
    </div>





    </div>
  )
}

export default Checkout
