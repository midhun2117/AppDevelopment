import React from 'react';
import '../Assets/About.css';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function About() {
  return (
    <div>
      <div className="about-container">
        <Header />
        <h2>About BookMyStay</h2>
        <p>
          Welcome to BookMyStay, your trusted travel companion in finding the perfect accommodations 
          for your next adventure.
        </p>
        <p>
          At BookMyStay, we're passionate about making your travel experience unforgettable. We believe that where you stay plays a crucial role in shaping your journey, and that's why we're dedicated to offering a diverse range of lodging options tailored to your needs.
        </p>
        <p>
          Our mission is to simplify your travel planning process. With our intuitive platform and powerful search features, you can effortlessly explore a variety of accommodations, from luxury resorts to charming bed and breakfasts. We strive to provide you with all the information you need to make an informed choice, ensuring your stay is comfortable and enjoyable.
        </p>
        <p>
          We take pride in being your travel companion, offering a one-stop solution for your lodging needs. Whether you're embarking on a family vacation, a romantic getaway, or a solo adventure, BookMyStay is here to assist you every step of the way.
        </p>
        <p>
          Thank you for choosing BookMyStay as your trusted travel partner. We're excited to be part of your journey and look forward to helping you create remarkable memories on your next excursion.
        </p>
        <Link to="/contact">Have questions or need assistance? Contact us today.</Link>
      </div>
      <Footer />
    </div>
  );
}

export default About;
