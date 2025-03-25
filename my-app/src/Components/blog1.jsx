import React from 'react';

const Blog1 = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: '40px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        maxWidth: '800px',
        margin: '100px auto 20px auto',
        fontFamily: 'Arial, sans-serif',
    };

    const titleStyle = {
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '40px',
        textAlign: 'left',
        position: 'relative',
        display: 'inline-block'
    };

    const underlineStyle = {
        position: 'absolute',
        bottom: '-30px',
        left: '0',
        width: '100%',
        height: '20px',
        backgroundImage: 'url(https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742880435/Financial-Underline_s5hilj.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain'
    };

    const sectionStyle = {
        marginBottom: '20px',
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#007BFF',
        marginBottom: '10px',
        textAlign: 'left',
        borderBottom: '3px solid #007BFF',
        display: 'inline-block',
        paddingBottom: '6px'
    };

    const paragraphStyle = {
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#555',
        marginBottom: '10px',
        textAlign: 'left',
    };

    const imageStyle = {
        width: '100%',
        borderRadius: '8px',
        marginBottom: '15px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>
                Bajaj Housing Finance IPO: A Comprehensive Guide
                <div style={underlineStyle}></div>
            </h1>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>Introduction</h2>
                <p style={paragraphStyle}>
                    Bajaj Housing Finance has announced its IPO, offering investors an opportunity to become a part of its growth story. The company specializes in housing finance, providing loans for purchasing, renovating, and refinancing homes. With a solid reputation and strong market presence, Bajaj Housing Finance has consistently expanded its customer base, making it a preferred choice for housing loans.
                </p>
                <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742879825/Bajaj_housing_finance_g6khwc.png" alt="Bajaj Housing Finance" style={imageStyle} />
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>Company Overview</h2>
                <p style={paragraphStyle}>
                    Bajaj Housing Finance Limited (BHFL) is a wholly-owned subsidiary of Bajaj Finance Limited. Established in 2008, the company has become one of the leading housing finance companies in India. It offers a wide range of products, including home loans, loan against property, and lease rental discounting.
                </p>
                <p style={paragraphStyle}>
                    The company operates with a strong focus on customer satisfaction and has maintained a low non-performing asset (NPA) ratio. Its strategic growth and innovation in the financial sector make it a robust player in the housing finance segment.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>Key Highlights of the IPO</h2>
                <p style={paragraphStyle}>- The IPO aims to raise funds for business expansion and capital enhancement.</p>
                <p style={paragraphStyle}>- Investors can participate to capitalize on the growing housing finance sector.</p>
                <p style={paragraphStyle}>- Bajaj Housing Finance has shown consistent financial performance, making it a reliable investment option.</p>
                <p style={paragraphStyle}>- The company plans to use the raised funds for strengthening its lending capacity and enhancing technological capabilities.</p>
            </div>
        </div>
    );
};

export default Blog1;
