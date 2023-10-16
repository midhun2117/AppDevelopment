import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Header from './Header';
import Footer from './Footer';
import '../Assets/Navbar.css';

function Navbar() {
  const initialQuantities = [0, 0, 0, 0, 0, 0];
  const [quantities, setQuantities] = useState(initialQuantities);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const savedQuantities = JSON.parse(localStorage.getItem('quantities'));
    const savedTotalPrice = JSON.parse(localStorage.getItem('totalPrice'));

    if (savedQuantities) {
      setQuantities(savedQuantities);
    }

    if (savedTotalPrice) {
      setTotalPrice(savedTotalPrice);
    }
  }, []);

  const updateQuantities = (newQuantities) => {
    setQuantities(newQuantities);
    localStorage.setItem('quantities', JSON.stringify(newQuantities));
  };

  const incrementQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    updateQuantities(newQuantities);
    updateTotalPrice(newQuantities);
  };

  const decrementQuantity = (index) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index] -= 1;
      updateQuantities(newQuantities);
      updateTotalPrice(newQuantities);
    }
  };

  const updateTotalPrice = (newQuantities) => {
    const productPrices = [
      1000, // Single Bed
      1500, // Double Bed
      1800, // Triple Bed
      2200, // Quad Bed
      2300, // Adjoining Rooms
      3100, // Villa
    ];

    let newTotalPrice = 0;
    for (let i = 0; i < newQuantities.length; i++) {
      newTotalPrice += newQuantities[i] * productPrices[i];
    }

    setTotalPrice(newTotalPrice);
    localStorage.setItem('totalPrice', newTotalPrice);
  };

  return (
    <div className="home-container">
      <Header />
      <div className="rectangle"></div>
      <section className="featured-products">
        <div className="list">
          {[
            {
              name: 'Single Bed',
              image: 'https://setupmyhotel.com/images/Room-Type-Single-Room.jpg?ezimgfmt=rs:300x250/rscb337/ng:webp/ngcb337',
              price: 'Price: ₹1000/day',
            },
            {
              name: 'Double Bed',
              image: 'https://setupmyhotel.com/images/Room-Type-Double-Room.jpg?ezimgfmt=rs:300x250/rscb337/ng:webp/ngcb337',
              price: 'Price: ₹1500/day',
            },
            {
              name: 'Triple Bed',
              image: 'https://setupmyhotel.com/images/Room-Type-Triple-Room.jpg?ezimgfmt=rs:300x250/rscb337/ng:webp/ngcb337',
              price: 'Price: ₹1800/day',
            },
            {
              name: 'Quad Bed',
              image: 'https://setupmyhotel.com/images/Room-Type-murphy-bed-rooms.jpg?ezimgfmt=rs:300x250/rscb337/ng:webp/ngcb337',
              price: 'Price: ₹2200/day',
            },
            {
              name: 'Adjoining Rooms',
              image: 'https://setupmyhotel.com/images/Room-Type-Adjoining-rooms.jpg?ezimgfmt=rs:275x183/rscb337/ng:webp/ngcb337',
              price: 'Price: ₹2300/day',
            },
            {
              name: 'Villa',
              image: 'https://setupmyhotel.com/images/Room-Type-Villas.jpg?ezimgfmt=rs:300x250/rscb337/ng:webp/ngcb337',
              price: 'Price: ₹3100/day',
            },
          ].map((product, index) => (
            <div className="card" key={index}>
              <img src={product.image} alt={product.name} className="image" />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <div>
                <button onClick={() => decrementQuantity(index)}>-</button>
                <span>{quantities[index]}</span>
                <button onClick={() => incrementQuantity(index)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="total-price">
        Total Price: ₹{totalPrice}
        {totalPrice > 0 ? (
          <Link to={`/payment?totalPrice=${totalPrice}`}>
            <h2>Confirm Booking</h2>
          </Link>
        ) : (
          <p>Please select your room</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Navbar;
