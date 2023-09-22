import React from 'react';
import '../Assets/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Address</h3>
          <p>39,gopal street<br />Coimbatore, Tamil Nadu<br />641042</p>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: Bookmystay@gmail.com<br />Phone: +81 (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="a">
              <FacebookIcon />
            </a>
            <a href="a">
              <WhatsAppIcon />
            </a>
            <a href="a">
              <TwitterIcon />
            </a>
            <a href="a">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;