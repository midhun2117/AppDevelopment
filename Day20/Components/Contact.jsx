import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Assets/Contact.css';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios'; // Import axios

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/Feedback/post", {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        toast.success("Thank you for your message!");
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error(`An error occurred: ${error.message}`);
    }
    
  };

  return (
    <div>
      <div className="contact-container">
        <Header />

        <div className="contact-content">
          <h1>
            <center>Contact Us</center>
          </h1>
          <p>
            If you have any questions or inquiries, please feel free to
            contact us using the information below:
          </p>2

          <div className="contact-details">
            <div className="contact-section">
              <h2>Address</h2>
              <p>123 Main Street</p>
              <p>Your City, State 12345</p>
            </div>

            <div className="contact-section">
              <h2>Email</h2>
              <p>Email: info@example.com</p>
            </div>

            <div className="contact-section">
              <h2>Phone</h2>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="form-box">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2 className="opinion-heading">Send Your Opinion</h2>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  className="qw"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className="qw"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="qw"
                  id="message"
                  name="message"
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>

        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
