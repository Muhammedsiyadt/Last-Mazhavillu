import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const Address = ({ onSubmit }) => {
  const [address, setAddress] = useState({
    name: '',
    phone: '',
    pin: '',
    locality: '',
    fullAddress: '',
    city: '',
    state: '',
    landmark: '',
    altPhone: '',
    addressType: 'home',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const requiredFields = ['name', 'phone', 'pin', 'locality', 'fullAddress', 'city', 'state'];
    requiredFields.forEach(field => {
      if (!address[field].trim()) {
        newErrors[field] = `${field[0].toUpperCase() + field.slice(1)} is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      onSubmit(address);
    }
  }, [errors]); // eslint-disable-line

  const handleChange = (e) => {
    const { name, value } = e.target;

    let filteredValue = value;

    // Only allow digits in phone, altPhone, and pin
    if (['phone', 'altPhone', 'pin'].includes(name)) {
      filteredValue = value.replace(/\D/g, '');
    }

    setAddress(prev => ({ ...prev, [name]: filteredValue }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSubmit(address);
  };

  return (
    <div className="checkout-section p-3 bg-white rounded shadow-sm mb-4">
      <h5 className="mb-3">Delivery Address</h5>
      <Form noValidate onSubmit={handleSubmit}>
        <div className="row g-3">

          {/* Name */}
          <div className="col-md-6">
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              value={address.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </div>

          {/* Phone */}
          <div className="col-md-6">
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={address.phone}
              onChange={handleChange}
              isInvalid={!!errors.phone}
              inputMode="numeric"
            />
            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
          </div>

          {/* PIN Code */}
          <div className="col-md-6">
            <Form.Control
              type="text"
              name="pin"
              placeholder="PIN Code"
              value={address.pin}
              onChange={handleChange}
              isInvalid={!!errors.pin}
              inputMode="numeric"
            />
            <Form.Control.Feedback type="invalid">{errors.pin}</Form.Control.Feedback>
          </div>

          {/* Locality */}
          <div className="col-md-6">
            <Form.Control
              type="text"
              name="locality"
              placeholder="Locality"
              value={address.locality}
              onChange={handleChange}
              isInvalid={!!errors.locality}
            />
            <Form.Control.Feedback type="invalid">{errors.locality}</Form.Control.Feedback>
          </div>

          {/* Full Address */}
          <div className="col-12">
            <Form.Control
              as="textarea"
              rows={2}
              name="fullAddress"
              placeholder="Full Address"
              value={address.fullAddress}
              onChange={handleChange}
              isInvalid={!!errors.fullAddress}
            />
            <Form.Control.Feedback type="invalid">{errors.fullAddress}</Form.Control.Feedback>
          </div>

          {/* City */}
          <div className="col-md-6">
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              isInvalid={!!errors.city}
            />
            <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
          </div>

          {/* State */}
          <div className="col-md-6">
            <Form.Control
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleChange}
              isInvalid={!!errors.state}
            />
            <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
          </div>

          {/* Landmark */}
          <div className="col-md-6">
            <Form.Control
              type="text"
              name="landmark"
              placeholder="Landmark (Optional)"
              value={address.landmark}
              onChange={handleChange}
            />
          </div>

          {/* Alternate Phone */}
          <div className="col-md-6">
            <Form.Control
              type="tel"
              name="altPhone"
              placeholder="Alternate Phone (Optional)"
              value={address.altPhone}
              onChange={handleChange}
              inputMode="numeric"
            />
          </div>

          {/* Address Type */}
          <div className="col-12 mt-2">
            <Form.Label>Address Type</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Home"
                name="addressType"
                value="home"
                checked={address.addressType === 'home'}
                onChange={handleChange} 
                 className="custom-radio"
              />
              <Form.Check
                inline
                type="radio"
                label="Work"
                name="addressType"
                value="work"
                checked={address.addressType === 'work'}
                onChange={handleChange}
                 className="custom-radio"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button className="mt-3" type="submit" variant='success'>Save Address</Button>
      </Form>
    </div>
  );
};

export default Address;
