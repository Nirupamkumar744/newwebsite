import React from 'react';

const BlogOla = () => {
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
                Ola Electric IPO: A Comprehensive Guide
                <div style={underlineStyle}></div>
            </h1>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>Introduction</h2>
                <p style={paragraphStyle}>
                    Ola Electric, one of India’s leading electric mobility companies, is gearing up for its highly anticipated Initial Public Offering (IPO). With its innovative electric scooters and plans for expanding into other segments, the company has captured the attention of both consumers and investors.
                </p>
                <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1742881150/Bajaj_housing_finance_1_ppu1fy.png" alt="Ola Electric" style={imageStyle} />
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>Company Overview</h2>
                <p style={paragraphStyle}>
                    Ola Electric was founded in 2017 as a subsidiary of Ola Cabs, with a vision to accelerate the transition to sustainable mobility. The company has quickly emerged as a market leader in the electric two-wheeler segment with its Ola S1 series scooters.
                </p>
                <p style={paragraphStyle}>
                    With a focus on innovation, Ola Electric has established one of the world’s largest EV manufacturing facilities, the Futurefactory. Backed by significant investments from leading venture capital firms, the company is well-positioned for future growth.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>Key Highlights of the IPO</h2>
                <p style={paragraphStyle}>- The IPO is expected to raise substantial capital for scaling up manufacturing capabilities and R&D.</p>
                <p style={paragraphStyle}>- Ola Electric’s strong market presence and competitive pricing give it a strategic advantage.</p>
                <p style={paragraphStyle}>- Proceeds from the IPO will also be used to expand its charging infrastructure across India.</p>
                <p style={paragraphStyle}>- Investors will gain exposure to the rapidly growing electric vehicle sector in India.</p>
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>Growth Potential and Market Impact</h2>
                <p style={paragraphStyle}>
                    India’s EV adoption rate is on the rise, driven by government incentives and increasing consumer awareness. Ola Electric has aligned its vision with the country’s green mobility goals, making it a key player in this sector.
                </p>
                <p style={paragraphStyle}>
                    With a robust supply chain and technological advancements, Ola Electric aims to maintain its leadership position. The company’s expansion into electric bikes and possible four-wheeler EVs further strengthens its growth potential.
                </p>
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>Conclusion</h2>
                <p style={paragraphStyle}>
                    The Ola Electric IPO offers a significant opportunity for investors looking to be part of India’s electric mobility revolution. With a solid business model, innovative products, and a growing market, the IPO could be a pivotal moment in the EV industry.
                </p>
                <p style={paragraphStyle}>
                    Potential investors should carefully evaluate the company’s financials, competitive positioning, and future plans before making their decisions.
                </p>
            </div>
        </div>
    );
};

export default BlogOla;
