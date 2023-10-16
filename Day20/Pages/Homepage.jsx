import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Assets/Home.css';
import {  useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate=useNavigate();
  return (
    <div>
      <div className='home-container'>
        <Header />
        
        <h2>Choose Your Hotel</h2>
        <section className="featured-products">
  
        <div className="list" onClick={() => navigate('/homepage')}>
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/187363337/photo/modern-hotel-building-in-summer.jpg?s=612x612&w=0&k=20&c=eRVDcadZTKs5t2K-CEeXT6DiJQ68Fnbs6u9F-0S_v8Q="
              className="image"
            />
            <h3>Four Seasons Hotels and Resorts</h3>
            
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1545175707-9eec1209f720?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              className="image"
            />
            <h3>Holiday Inn</h3>
            
          </div>
          <div className="card">
            <img
              src="https://media.istockphoto.com/id/503019528/photo/road-front-of-luxury-building-in-clear-sky-at-night.jpg?s=612x612&w=0&k=20&c=xkjUByXNE5SdMSeYxLqIwweZMg9XZ6xnWEK7ypdeO4I="
              className="image"
            />
            <h3>Holiday Inn Express</h3>
          </div>
          <div className="card">
            <img
              src="https://thumbs.dreamstime.com/b/hotel-building-10664473.jpg"
              className="image"
            />
            <h3>Mandarin Oriental Hotel Group</h3>
          </div>
          <div className="card">
            <img
              src="https://arcmaxarchitect.com/sites/default/files/best_architects_for_3_star_hotel_design_and_planning_in_india_usa_and_uk.jpg"
              className="image"
            />
            <h3>Residence Inn by Marriott</h3>
          </div>
          <div className="card">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/09/fa/78/e1/hotel-elizabeth-baguio.jpg"
              className="image"
            />
            <h3>Hilton Garden Inn</h3>
          </div>
          
          
          
          </div>
      </section>
      <Footer />
      </div>
    </div>
  );
}

export default Homepage;
