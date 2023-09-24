import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/Services.css'
import Header from './Header';
import Footer from './Footer';

function Services() {
    return (
      <div><Header/>
      <div className='services-container'>
        <div><center>
      <h1>Our Services</h1></center>
      <p>Welcome to BookMyStay! We offer a range of services to make your travel experience as seamless as possible.</p>

      <h2>Hotel Bookings</h2>
      <p>Find and book hotels in your desired destination with ease. We have a wide selection of accommodations to suit your preferences and budget.</p>

      <h2>Vacation Packages</h2>
      <p>Explore our vacation packages that include hotel stays, flights, and more. Let us take care of the details while you enjoy your vacation.</p>

      <h2>Customer Support</h2>
      <p>Our dedicated customer support team is available 24/7 to assist you with any questions or issues you may have during your travel journey.</p>

      

    </div>
    </div><Footer/></div>
  );
}

export default Services;
