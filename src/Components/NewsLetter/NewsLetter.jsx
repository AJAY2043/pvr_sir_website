import React, { useState } from 'react';
import './NewsLetter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      // Here you would normally send the email to your server
      // For example: await axios.post('/api/subscribe', { email });

      setSuccess(true);
      setEmail('');
      
      // Hide success message after 3 seconds
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      // Handle the error case
      console.error('Subscription failed:', error);
      setSuccess(false);
    }
  };

  return (
    <div className="newsletter-container">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with the latest news and updates from Me.</p>
      {success === true && <p className="success-message">Thank you for subscribing!</p>}
      {success === false && <p className="error-message">Subscription failed. Please try again.</p>}
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
