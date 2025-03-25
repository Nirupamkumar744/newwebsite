// src/VideoSection.js
import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="text-container">
        <h2 className="section-heading">Bihar's First Trading Floor</h2>
        <p className="section-text">
        Welcome to Stock Archery, your premier source for expert trading knowledge and strategies. Achieve trading success with our in-depth resources, tips, and insights tailored for savvy investors. Start mastering the market today
        </p>
      </div>
      <div className="video-container">
        <video className="video" muted autoPlay loop>
          <source src="https://res.cloudinary.com/dyrn2eg1j/video/upload/v1741760954/IMG_5261_ewbvad.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;