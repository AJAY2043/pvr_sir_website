import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faStar } from '@fortawesome/free-solid-svg-icons';
import './UserStories.css';

const stories = [
  {
    name: 'Ravi Kumar',
    story: 'PVR sir’s teaching helped me land my first job as a software engineer. His training sessions are top-notch!',
    icon: faUserTie,
    rating: 5
  },
  {
    name: 'Anusha Reddy',
    story: 'I have gained immense confidence in coding thanks to PVR sir’s practical lessons and real-world projects.',
    icon: faUserTie,
    rating: 4
  },
  {
    name: 'Suresh Babu',
    story: 'The institute’s environment and PVR sir’s guidance were exactly what I needed to succeed in my software career.',
    icon: faUserTie,
    rating: 4
  }
];

const renderStars = (rating) => {
  const totalStars = 5;
  return (
    <div className="stars">
      {[...Array(totalStars)].map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`star-icon ${i < rating ? 'filled-star' : ''}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

const UserStories = () => {
  return (
    <div className="user-stories-container">
      <h2 className="section-title">Success Stories</h2>
      <div className="user-stories-list">
        {stories.map((story, index) => (
          <div key={index} className="user-story-card">
            <FontAwesomeIcon icon={story.icon} className="user-icon" aria-hidden="true" />
            <div className="user-story-content">
              <h3 className="user-name">{story.name}</h3>
              <p className="user-story">{story.story}</p>
              {renderStars(story.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStories;
