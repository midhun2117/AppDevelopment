import React from 'react';
import '../Assets/Terms.css'; 
import Header from './Header';
import Footer from './Footer';

function Terms() {
  return (
    <div><Header/>
    <div className="terms-and-conditions-container">
      <div className="close-button">
      </div>
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to our Terms and Conditions page. These terms and conditions govern your use of our services
        and website. By accessing or using our services, you agree to comply with and be bound by these terms.
      </p>
      <h2>Use of Our Services</h2>
      <p>
        By using our services, you agree to:
      </p>
      <ul>
        <li>Use our services for lawful purposes only.</li>
        <li>Not use our services for any illegal, harmful, or unauthorized activities.</li>
        <li>Not interfere with the proper operation of our services.</li>
        <li>Not attempt to gain unauthorized access to our services or systems.</li>
      </ul>
      <h2>Intellectual Property</h2>
      <p>
        All content and materials available on our website and services, including but not limited to text,
        graphics, logos, images, audio, and video, are protected by intellectual property rights.
      </p>
      <p>
        You may not reproduce, distribute, modify, or create derivative works from any content or materials
        on our website without our prior written consent.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        We make no representations or warranties of any kind, express or implied, regarding the accuracy,
        reliability, or completeness of any information on our website or services.
      </p>
      <p>
        In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages
        arising out of or in connection with your use of our services.
      </p>
      <h2>Changes to These Terms</h2>
      <p>
        We reserve the right to update or modify these terms and conditions at any time without prior notice.
        Your continued use of our services after any changes will constitute your acceptance of the new terms.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about these terms and conditions, please contact us at
        [email address].
      </p>
    </div><Footer/></div>
  );
}

export default Terms;
