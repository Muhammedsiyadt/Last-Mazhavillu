import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const Payment = ({ onSubmit, onPay }) => {
    const [method, setMethod] = useState('');
    const [upi, setUpi] = useState('');
    const [card, setCard] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (Object.keys(errors).length === 0 && method) {
            const data = { method, ...(method === 'upi' && { upi }), ...(method === 'card' && { card }) };
            onSubmit(data);
        }
    }, [errors]); // eslint-disable-line

    const validate = () => {
        const newErrors = {};
        if (!method) newErrors.method = 'Please select a payment method';
        if (method === 'upi' && !upi.trim()) newErrors.upi = 'UPI ID is required';
        if (method === 'card' && !card.trim()) newErrors.card = 'Card details are required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) onPay();
    };

    return (
        <div className="checkout-section">
            <div className="section-header">Payment Options</div>
            <Form onSubmit={handleSubmit}>
                <Form.Check
                    type="radio"
                    label="Cash on Delivery"
                    name="method"
                    value="cod"
                    onChange={(e) => { setMethod(e.target.value); setErrors({}); }}
                    isInvalid={!!errors.method}
                    className='payment-radio'
                />
                <Form.Check
                    type="radio"
                    label="UPI"
                    name="method"
                    value="upi"
                    onChange={(e) => { setMethod(e.target.value); setErrors({}); }}
                    isInvalid={!!errors.method}
                     className='payment-radio'
                />
                {method === 'upi' && (
                    <>
                        <Form.Control
                            className="mt-2"
                            placeholder="Enter UPI ID"
                            value={upi}
                            onChange={(e) => setUpi(e.target.value)}
                            isInvalid={!!errors.upi}
                        />
                        <Form.Control.Feedback type="invalid">{errors.upi}</Form.Control.Feedback>
                    </>
                )}
                <Form.Check
                    type="radio"
                    label="Card Payment"
                    name="method"
                    value="card"
                    onChange={(e) => { setMethod(e.target.value); setErrors({}); }}
                    isInvalid={!!errors.method}
                    className='payment-radio'
                />
                {method === 'card' && (
                    <>
                        <Form.Control
                            className="mt-2 "
                            placeholder="Enter Card Details"
                            value={card}
                            onChange={(e) => setCard(e.target.value)}
                            isInvalid={!!errors.card}
                            
                        />
                        <Form.Control.Feedback type="invalid">{errors.card}</Form.Control.Feedback>
                    </>
                )}
                {errors.method && (
                    <div className="text-danger mt-1">{errors.method}</div>
                )}
                <Button className="mt-3 orange-btn" type="submit">
                   proceed to pay
                </Button>

            </Form>
        </div>
    );
};

export default Payment;
