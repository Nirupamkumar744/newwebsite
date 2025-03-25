// src/Components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">STOCK ARCHERY</h1>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-links" onClick={toggleMenu}>Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/contactUs" className="nav-links" onClick={toggleMenu}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/faq" className="nav-links" onClick={toggleMenu}>FAQ</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;