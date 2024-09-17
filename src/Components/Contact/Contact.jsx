import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Correct import for WhatsApp icon
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact PVR or <h4>PVR Coding Academy</h4></h2>
      <div className="contact-info">
        <p>If you have any questions or would like to get in touch,the contact details below or the form to send a message.</p>
        <div className="contact-details">
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <p>+91 8977043244</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faWhatsapp} className="contact-icon" />
            <p>WhatsApp: +91 9701427892</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <p>pvrcodingacademy.hyd@gmail.com</p>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <p>
Opp SBI Bank, Near JNTU Metro Station, Sardar Patel Nagar, Kukatpally, Hyd, TS-500085</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
