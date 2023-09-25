import React from 'react';
import '../Assets/Faq.css'; 
import Header from './Header';
import Footer from './Footer';

function Faq() {
  return (
    <div>
      <Header />
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-item">
          <h2>What is BookMyStay?</h2>
          <p>
            BookMyStay is your ultimate travel companion, helping you find the perfect accommodations for your next adventure.
          </p>
        </div>
        <div className="faq-item">
          <h2>Why should I use BookMyStay?</h2>
          <p>
            BookMyStay simplifies your travel planning process by offering a wide range of lodging options tailored to your needs, whether you're planning a relaxing vacation or a business trip.
          </p>
        </div>
        <div className="faq-item">
          <h2>How can I book a stay with BookMyStay?</h2>
          <p>
            Booking with BookMyStay is easy. Simply use our user-friendly platform and powerful search tools to discover and book the ideal stay that suits your preferences and budget.
          </p>
        </div>
        <div className="faq-item">
          <h2>Is BookMyStay free to use?</h2>
          <p>
            Yes, BookMyStay is completely free to use, and there are no hidden fees. You can browse and book accommodations without any additional costs.
          </p>
        </div>
        <div className="faq-item">
          <h2>Can I trust the accommodations listed on BookMyStay?</h2>
          <p>
            Absolutely! We carefully curate our listings to ensure the quality and reliability of accommodations. You can read reviews from other travelers to make informed decisions.
          </p>
        </div>
        <div className="faq-item">
          <h2>How can I contact BookMyStay for assistance?</h2>
          <p>
            If you have any questions or need assistance, please don't hesitate to <a href="/contact">contact us</a>. Our support team is here to help you.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Faq;
