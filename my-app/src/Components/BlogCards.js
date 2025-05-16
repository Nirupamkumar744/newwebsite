import React from 'react';
import './BlogCards.css'; // Import the CSS file for styling

const blogData = [
     {
        id: 6,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1747382676/USA-TRUMP-TARIFFS-INDIA-0_1747295397691_1747295428411_dxbtug.jpg',
        title: 'India Vs Us Tariff Deal',
        link: '/blog6',
    },
    {
        id: 5,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1746867309/Flux_Dev_Create_a_highresolution_digital_illustration_depictin_0_l2a6g1.jpg',
        title: 'India Vs Pakistan War 2025',
        link: '/blog5',
    },
     {
        id: 4,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1745216657/image_fh7ljf.webp',
        title: 'India Renewable Energy Surge',
        link: '/blog4',
    },
     {
        id: 3,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1745045207/Flux_Dev_A_dramatic_sketchstyle_illustration_of_a_trade_war_be_2_1_hcd6hw.jpg',
        title: 'USA Vs CHINA TRIFF WAR',
        link: '/blog3',
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725792479/316945-bajaj-housing-finance-ipo_tx03z5.avif',
        title: 'Bajaj Housing Finance IPO',
        link: '/blog1',
    },
    {
        id: 1,
        image: 'https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724308567/Pitch_work_-_OLA_Electric_pjd5zk.jpg',
        title: 'OLA IPO',
        link: '/blog2',
    },

    
   
   
    
    
   
    
];

const BlogCards = () => {
    return (
        <div className="blog-container">
            {blogData.map((blog) => (
                <div className="card" key={blog.id}>
                    <img src={blog.image} alt={`${blog.title}`} />
                    <h3>{blog.title}</h3>
                    <p>{blog.text}</p>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/accounts/login/?hl=en" aria-label="Facebook">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/accounts/login/?hl=en" aria-label="Twitter">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/accounts/login/?hl=en" aria-label="Instagram">
                            <i className="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                    <a href={blog.link} className="read-more" aria-label="Read more about this blog">Read More</a>
                </div>
            ))}
        </div>
    );
};

export default BlogCards;