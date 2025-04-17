import React, { useState } from 'react';
import AddressForm from './Address';
import PriceDetails from './PriceDetails';
import PaymentOptions from './Payment';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/Checkout.css';

const Checkout = () => {
  const [addressData, setAddressData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  const handleSubmit = async () => {
    if (addressData && paymentData) {
      const payload = { ...addressData, ...paymentData };
      try {
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          alert('Order placed successfully!');
        } else {
          alert('Submission failed.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Network error.');
      }
    } else {
      alert('Please fill in all sections.');
    }
  };

  return (
    <div className="checkout-bg pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <AddressForm onSubmit={setAddressData} />
            <PaymentOptions onSubmit={setPaymentData} onPay={handleSubmit} />
          </div>
          <div className="col-md-3 offset-md-1">
            <PriceDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
