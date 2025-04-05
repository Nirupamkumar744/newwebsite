import React from 'react';
import './Footer.css'; // CSS file import

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3 className="footer-title">About Us</h3>
          <p className="footer-text">
            We are a passionate team delivering top-notch solutions with a futuristic vibe.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home" className="footer-link">Home</a></li>
            <li><a href="#services" className="footer-link">Services</a></li>
            <li><a href="#about" className="footer-link">About</a></li>
            <li><a href="#contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-section">
          <h3 className="footer-title">Connect With Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61564590580574" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/stockarchery" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/stock.archery/?hl=en" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;