import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Adjust the path based on where firebase.js is located
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ContactUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get current date in YYYY-MM-DD format for node creation
      const today = new Date().toISOString().split('T')[0];

      // Add document to Firestore under a collection named with today's date
      await addDoc(collection(db, `submissions/${today}/messages`), {
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
        timestamp: serverTimestamp()
      });

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Styles (unchanged, included for completeness)
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '15px' : '40px',
    background: 'linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)',
    border: '2px solid #00ccff',
    borderRadius: '15px',
    boxShadow: '0 0 20px rgba(0, 204, 255, 0.4)',
    maxWidth: isMobile ? '90%' : '700px',
    width: '100%',
    margin: isMobile ? '80px auto 15px' : '100px auto 30px',
    fontFamily: "'Poppins', sans-serif",
    position: 'relative',
    boxSizing: 'border-box'
  };

  const titleStyle = {
    color: '#00ccff',
    marginBottom: isMobile ? '15px' : '25px',
    fontSize: isMobile ? '1.5rem' : '2.5rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    textShadow: '0 0 8px rgba(0, 204, 255, 0.6)'
  };

  const formContainerStyle = {
    width: '100%',
    padding: isMobile ? '10px' : '25px',
    background: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box'
  };

  const inputStyle = {
    width: '100%',
    maxWidth: isMobile ? '100%' : '400px',
    padding: isMobile ? '10px' : '12px',
    marginBottom: isMobile ? '10px' : '15px',
    borderRadius: '6px',
    border: '1px solid #b0c4de',
    fontSize: isMobile ? '0.85rem' : '1rem',
    background: '#fff',
    color: '#333',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 5px rgba(0, 204, 255, 0.2)',
    boxSizing: 'border-box'
  };

  const textareaStyle = {
    width: '100%',
    maxWidth: isMobile ? '100%' : '400px',
    padding: isMobile ? '10px' : '12px',
    marginBottom: isMobile ? '10px' : '15px',
    borderRadius: '6px',
    border: '1px solid #b0c4de',
    minHeight: isMobile ? '80px' : '100px',
    fontSize: isMobile ? '0.85rem' : '1rem',
    background: '#fff',
    color: '#333',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 5px rgba(0, 204, 255, 0.2)',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    background: 'linear-gradient(90deg, #00ccff, #ff66b2)',
    color: '#fff',
    padding: isMobile ? '8px 15px' : '12px 25px',
    fontSize: isMobile ? '0.9rem' : '1.2rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 0 12px rgba(0, 204, 255, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    width: isMobile ? '70%' : '50%',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxSizing: 'border-box'
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = '#ff66b2';
    e.target.style.boxShadow = '0 0 10px rgba(255, 102, 178, 0.6)';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = '#b0c4de';
    e.target.style.boxShadow = '0 0 5px rgba(0, 204, 255, 0.2)';
  };

  const handleButtonHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.boxShadow = '0 0 20px rgba(0, 204, 255, 0.7)';
  };

  const handleButtonLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 0 12px rgba(0, 204, 255, 0.5)';
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Get in Touch</h2>
      <div style={formContainerStyle}>
        <form onSubmit={handleSubmit}>
          <input
            style={inputStyle}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <input
            style={inputStyle}
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleInputChange}
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <textarea
            style={textareaStyle}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            required
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></textarea>
          <button
            style={buttonStyle}
            type="submit"
            disabled={isSubmitting}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {submitStatus === 'success' && (
          <p style={{ color: 'green', textAlign: 'center', marginTop: '10px' }}>
            Message sent successfully!
          </p>
        )}
        {submitStatus === 'error' && (
          <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
            Failed to send message. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;