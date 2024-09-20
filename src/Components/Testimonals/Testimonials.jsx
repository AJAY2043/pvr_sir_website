import React from 'react'
import './Testimonals.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faUser, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const testimonials = [
  {
    name: 'Gopal Rao',
    role: 'Software Engineer',
    testimonial: 'An excellent platform with seamless features. It truly helped improve my productivity.',
    rating: 4,
    icon: faUserTie,
    
  },
  {
    name: 'Vamsi Krishna',
    role: 'Web Developer',
    testimonial: 'Fantastic experience! The customer support was outstanding and the features are top-notch.',
    rating: 5,
    icon: faUser,
    
  },
  {
    name: 'Trivikram',
    role: 'Graphic Designer',
    testimonial: 'I’m very impressed with the ease of use and the powerful features. Highly recommend!',
    rating: 3,
    icon: faUserNinja,
    
  }
];

const renderStars = (rating) => {
  const totalStars = 5;
  return [...Array(totalStars)].map((_, i) => (
    <img
      key={i}
      src={i < rating ? star_icon : star_dull_icon}
      alt={i < rating ? 'Filled star' : 'Empty star'}
      className="star-icon"
    />
  ));
};

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            
            <div className="testimonial-details">
              <FontAwesomeIcon icon={testimonial.icon} className="testimonial-icon" aria-hidden="true" />
              <h3 className="testimonial-name">{testimonial.name}, {testimonial.role}</h3>
              <p className="testimonial-quote">"{testimonial.testimonial}"</p>
              <div className="stars-container">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
