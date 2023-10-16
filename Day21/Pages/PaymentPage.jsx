import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Assets/Payment.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PaymentPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const totalPrice = searchParams.get('totalPrice');

  const [paymentMethod, setPaymentMethod] = useState('');
  const [upiId, setUpiId] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    const totalAmount = parseFloat(totalPrice);
    const amount = parseFloat(enteredAmount);

    if (amount !== totalAmount) {
      toast.error('Payment Failed! Entered amount does not match the total amount.');
      return;
    }

    const paymentData = {
      paymentMethod,
      totalAmount,
      upiId: upiId,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/payment/make-payment', paymentData);

      if (response.status === 200) {
        toast.success('Payment Successful!');
      } else {
        toast.error('Payment Failed! Something went wrong.');
      }
    } catch (error) {
      console.error('Error making payment:', error);
      toast.error('Payment Failed! Something went wrong.');
    }
  };

  return (
    <div>
      <Header />
      <div className="payment-container">
        <h1 className="payment-heading">Payment Page</h1>
        <p className="total-price">Total Price: ₹{totalPrice}</p>
        <div className="payment-message">
          <ToastContainer />
        </div>

        <form onSubmit={handlePayment} className="payment-form">
          <label>
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="Cash">Cash</option>
              <option value="UPI">UPI</option>
            </select>
          </label>

          <label>
            Enter the Amount:
            <input
              type=""
              placeholder="Enter Amount"
              value={enteredAmount}
              onChange={(e) => setEnteredAmount(e.target.value)}
              required
            />
          </label>

          {paymentMethod === 'UPI' && (
            <label>
              UPI ID:
              <input
                type="text"
                placeholder="Enter UPI ID"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                required
              />
            </label>
          )}

          <button type="submit">Pay Now</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentPage;
