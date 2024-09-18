import React from 'react';
import { FaVideo } from 'react-icons/fa';
import './Interviews.css';

const Interviews = () => {
  const videos = [
    'https://www.youtube.com/embed/An6xLo7tScY',
    'https://www.youtube.com/embed/skysyekRLR8',
    'https://www.youtube.com/embed/365JO2KGtqI',
    'https://www.youtube.com/embed/GvmAYZcFzPE',
    'https://www.youtube.com/embed/LPvVXj4Upy0'
  ];

  return (
    <div className="interviews-container">
      <h2 className="interviews-title">
        <FaVideo className="video-icon" /> Interviews of Your PVR
      </h2>
      <div className="interviews-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
           <iframe
            className="video-frame"
            src={`${video}?autoplay=0`}
            title={`Interview ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0">
            </iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interviews;
