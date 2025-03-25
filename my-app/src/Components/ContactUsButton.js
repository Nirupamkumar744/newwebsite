// ContactUsButton.js
import React from 'react';
import './ContactUsButton.css';  // We'll style it in this CSS file

const ContactUsButton = () => {
  const handleClick = () => {
    // WhatsApp URL with predefined message
    const phoneNumber = '+919229102334';
    const message = encodeURIComponent('Hello, I need assistance!');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button className="contact-us-button" onClick={handleClick}>
      <i className="fab fa-whatsapp"></i> Contact Us
    </button>
  );
};

export default ContactUsButton;
