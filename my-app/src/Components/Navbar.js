import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBook, FaEnvelope, FaQuestionCircle } from 'react-icons/fa'; // Import icons
import './Navbar.css'; // Import the CSS file for styling

const Navbar = ({ servicesRef, testimonialsRef }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('blur'); // Add blur class to body when menu is open
    } else {
      document.body.classList.remove('blur'); // Remove blur class when menu is closed
    }
  };

  // Cloudinary URL with size and quality optimization
  const logoUrl = 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152409/logo1_rzt9qj.png';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link" onClick={toggleMenu}>
          <img src={logoUrl} alt="Stock Archery Logo" className="navbar-logo-img" />
          <h1 className="navbar-logo">STOCK ARCHERY</h1>
        </Link>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              <FaHome /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>
              <FaInfoCircle /> About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={toggleMenu}>
              <FaBook /> Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contactUs" className="nav-links" onClick={toggleMenu}>
              <FaEnvelope /> Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-links" onClick={toggleMenu}>
              <FaQuestionCircle /> FAQ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;