// src/AboutUs.js
import React from 'react';
import './About.css'; // Import the CSS file

const AboutUs = () => {
    return (
        <>
            <div className="about-us-container">
                <div className="about-us-content">
                    <h2 className="about-us-subtitle">About Us</h2>
                    <h1 className="about-us-title">
                        Where trading skills meet 
                        <span className="highlight"> real market </span> 
                        experience. 
                    </h1>
                    <p className="about-us-description">
                        Stock Archery is a leading stock market trading institute, offering expert-led training, live market sessions, and personalized mentorship. With 9 years of experience, we empower traders to master market strategies, manage risks, and achieve consistent profitability.
                    </p>
                    <a href='/ContactUs'> <button className="about-us-button">Contact Us</button></a>
                </div>
                <div className="about-us-image-container">
                    <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742809840/Add_a_heading_2_scoibs.png" alt="Person working on a laptop at a desk with colorful wall art in the background" className="about-us-image" />
                </div>
            </div>

            {/* New Card Section - Positioned Below About Us Container */}
            <div className="about-us-cards">
                <div className="card">
                    <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742800346/Add_a_subheading_2_e8hsr1.png" alt="Expert Training" className="card-image" />
                    <h3 className="card-title">Expert Training</h3>
                    <p className="card-description">Learn from industry experts with years of experience.</p>
                </div>
                <div className="card">
                    <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742800345/Add_a_subheading_3_l8uay9.png" alt="Live Market Sessions" className="card-image" />
                    <h3 className="card-title">Live Market Sessions</h3>
                    <p className="card-description">Participate in live trading sessions to gain real-time experience.</p>
                </div>
                <div className="card">
                    <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742800345/Add_a_subheading_5_kvtkjb.png" alt="Personalized Mentorship" className="card-image" />
                    <h3 className="card-title">Personalized Mentorship</h3>
                    <p className="card-description">Get one-on-one mentorship tailored to your trading goals.</p>
                </div>
                <div className="card">
                    <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742800345/Add_a_subheading_4_rjr3ll.png" alt="Risk Management" className="card-image" />
                    <h3 className="card-title">Risk Management</h3>
                    <p className="card-description">Learn effective strategies to manage risks in trading.</p>
                </div>
            </div>
        </>
    );
};

export default AboutUs;