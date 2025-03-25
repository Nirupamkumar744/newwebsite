// src/OurServices.js
import React, { forwardRef } from 'react';
import './OurServices.css'; // Ensure to create a CSS file for styling

const services = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1741774146/two_mcxbt6.jpg',
    title: 'Live Market Trading',
    description: 'The only institute in Bihar offering real-time trading classes, setting a new standard for stock market education.',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1741774144/Three_xqs55d.jpg',
    title: 'One on One Mentorship',
    description: 'Benefit from personalized instruction and proven strategies from seasoned trading professionals.',
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1741774140/six_jtjjxt.jpg',
    title: 'Learn and Trade Simultaneously',
    description: 'Students gain hands-on experience by learning and trading in a live market environment.',
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1741774138/one_vdxbmk.jpg',
    title: 'Comprehensive Trading Experience',
    description: 'A unique blend of theoretical knowledge and practical execution, ensuring well-rounded trading expertise.',
  },
];

// Use forwardRef to forward the ref to the main div
const OurServices = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="services-section">
      <h2 className="services-heading">What you'll get</h2>
      <div className="services-container">
        {services.map(service => (
          <div className="service-card" key={service.id}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default OurServices;