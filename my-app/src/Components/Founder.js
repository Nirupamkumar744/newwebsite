// src/Founder.js
import React from 'react';
import './Founder.css'; // Ensure to create a CSS file for styling

const Founder = () => {
  return (
    <div className="founder-section">
      <div className="founder-image">
        <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742793764/STOCK_ARCHERY_10_eojbx1.png" alt="Founder" /> {/* Replace with your image URL */}
      </div>
      <div className="founder-content">
        <h2 className="founder-heading">Our Founder</h2>
        <p className="founder-message">
          "With over eight years of experience in price action trading and a specialization in swing trades, I offer unparalleled expertise in market dynamics. My mission is to equip aspiring traders with essential insights and skills for confident, profitable market navigation. Discover comprehensive strategies and practical techniques tailored for success. Join me to enhance your trading skills and achieve remarkable results in the ever-evolving financial markets." <span className="colon-icon"></span>
        </p>
      </div>
    </div>
  );
};

export default Founder;