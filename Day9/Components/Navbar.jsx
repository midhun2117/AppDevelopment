
import Header from './Header';
import Footer from './Footer';
import '../Assets/Navbar.css';
import {  useNavigate } from 'react-router-dom';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {

  const navigate=useNavigate();
  
 
  return (
    <div className='home-container'>
    <Header/>
    
    <div class="rectangle">

    <button className="aqa">
    <SearchIcon />
  </button></div>
    <section className="featured-products">
  
        <div className="product-list" onClick={() => navigate('/homepage')}>
          <div className="product-card">
            <img
              src="https://setupmyhotel.com/images/Room-Type-Single-Room.jpg?ezimgfmt=rs:300x250/rscb337/ng:webp/ngcb337"
              alt="Single Bed"
              className="product-image"
            />
            <h3>Single Bed</h3>
            <p>Price: ₹1000/day</p>
          </div>
          <div className="product-card">
            <img
              src="https://setupmyhotel.com/images/Room-Type-Double-Room.jpg?ezimgfmt=rs:300x250/rscb337/ng:webp/ngcb337"
              alt="Double Bed"
              className="product-image"
            />
            <h3>Double Bed</h3>
            <p>Price: ₹1500/day</p>
          </div>
          <div className="product-card">
            <img
              src="https://setupmyhotel.com/images/Room-Type-Triple-Room.jpg?ezimgfmt=rs:300x250/rscb337/ng:webp/ngcb337"
              alt="Triple Bed"
              className="product-image"
            />
            <h3>Triple Bed</h3>
            <p>Price: ₹1800/day</p>
          </div>
          <div className="product-card">
            <img
              src="https://setupmyhotel.com/images/Room-Type-murphy-bed-rooms.jpg?ezimgfmt=rs:300x250/rscb337/ng:webp/ngcb337"
              alt="Quad Bed"
              className="product-image"
            />
            <h3>Quad Bed</h3>
            <p>Price: ₹2200/day</p>
          </div>
          <div className="product-card">
            <img
              src="https://setupmyhotel.com/images/Room-Type-Adjoining-rooms.jpg?ezimgfmt=rs:275x183/rscb337/ng:webp/ngcb337"
              alt="Adjoining Rooms"
              className="product-image"
            />
            <h3>Adjoining Rooms</h3>
            <p>Price: ₹2300/day</p>
          </div>
          <div className="product-card">
            <img
              src="https://setupmyhotel.com/images/Room-Type-Villas.jpg?ezimgfmt=rs:300x250/rscb337/ng:webp/ngcb337"
              alt="Villa"
              className="product-image"
            />
            <h3>Villa</h3>
            <p>Price: ₹3100/day</p>
          </div>
          
          
          
          
        </div>
      </section>
    
    
    <Footer/>
</div>
   
  );
}

export default Navbar;