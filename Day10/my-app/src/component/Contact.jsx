import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or inquiries, feel free to reach out to us through the following contact methods:</p>
      
      <div className="contact-info">
        <h2>Email</h2>
        <p>support@mytalorzone.com</p>
        
        <h2>Phone</h2>
        <p>+1 (234) 567-8901</p>

        <h2>Address</h2>
        <p>123 Fashion St., New York, NY, 10001</p>
      </div>

      <h3>Or fill out the contact form below:</h3>

      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
