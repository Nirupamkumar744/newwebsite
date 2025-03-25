import React, { useState, useEffect } from 'react';

const ContactUs = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '100px auto 20px auto',
        fontFamily: 'Arial, sans-serif',
        color: '#fff',
        
      };
      
    

    const titleStyle = {
        color: '#333',
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
    };

    const buttonStyle = {
        backgroundColor: '#007BFF',
        color: '#fff',
        padding: '12px 24px',
        fontSize: '18px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center the button content
        margin: '0 auto', // Center the button itself
        width: isMobile ? '90%' : 'auto', // Responsive width for button
    };

    const formContainerStyle = {
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: '#fff' // Adjust text color for visibility if necessary
    };
    

    const inputStyle = {
        width: isMobile ? '90%' : '400px', // Responsive width for input fields
        padding: '12px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px',
        transition: 'border-color 0.3s ease',
    };

    const textareaStyle = {
        width: isMobile ? '90%' : '400px', // Responsive width for textarea
        padding: '12px',
        marginBottom: '15px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        minHeight: '100px',
        fontSize: '16px',
        transition: 'border-color 0.3s ease',
    };

    const handleFocus = (e) => {
        e.target.style.borderColor = '#007BFF';
    };

    const handleBlur = (e) => {
        e.target.style.borderColor = '#ccc';
    };

    return (
        
        <div style={containerStyle}>
            <h2 style={titleStyle}>Get in Touch</h2>
            <div style={formContainerStyle}>
                <form>
                    <input
                        style={inputStyle}
                        type="text"
                        placeholder="Your Name"
                        required
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <input
                        style={inputStyle}
                        type="tel" // Changed to 'tel' for phone number input
                        placeholder="Your Phone Number"
                        required
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                    <textarea
                        style={textareaStyle}
                        placeholder="Your Message"
                        required
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    ></textarea>
                    <button style={buttonStyle} type="submit">Send Message</button>
                </form>
            </div>
        </div>
    
    );
};

export default ContactUs;