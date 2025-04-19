import React from 'react';

const BlogTariffWar = () => {
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
        height: '200px', // Reduced image height
        objectFit: 'cover', // Ensures image scales properly
        borderRadius: '8px',
        marginBottom: '15px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>
                U.S.-China Tariff War 2025: Impacts and Updates
                <div style={underlineStyle}></div>
            </h1>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>Introduction</h2>
                <p style={paragraphStyle}>
                    The U.S.-China tariff war has escalated in 2025, with soaring tariffs and trade barriers disrupting global markets. This guide explores the latest developments, economic impacts, and future outlook of this critical trade conflict.
                </p>
                <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1745045911/Flux_Dev_Epic_digital_illustration_of_a_trade_war_between_USA__1_ovpyx0.jpg" alt="U.S.-China Tariff War" style={imageStyle} />
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>Tariff Escalation</h2>
                <p style={paragraphStyle}>
                    In April 2025, U.S. tariffs on Chinese imports hit 145%, including a 20% fentanyl-related levy. China retaliated with 125% tariffs on U.S. goods and imposed export controls on rare earth minerals, targeting tech and semiconductor industries.
                </p>
                
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>Economic Impacts</h2>
                <p style={paragraphStyle}>- U.S. households face $1,300 higher costs in 2025, with low-income families hit hardest.</p>
                <p style={paragraphStyle}>- China’s GDP growth may drop by 0.7%, mitigated by trade diversification.</p>
                <p style={paragraphStyle}>- Global markets falter, with the Dow Jones dropping 1,000 points and inflation rising.</p>
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>Strategic Moves</h2>
                <p style={paragraphStyle}>
                    The U.S. exempted electronics to ease consumer impact, while China targets U.S. agriculture in key states. Both nations leverage strengths—U.S. tariff authority and China’s rare earth dominance—to gain leverage.
                </p>
                <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1745045207/Flux_Dev_A_splitscene_digital_painting_showing_Wall_Street_bul_2_mu3jd0.jpg" alt="Wall Street Impact" style={imageStyle} />
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>What’s Next?</h2>
                <p style={paragraphStyle}>
                    With $700 billion in trade at risk, negotiations are stalled. A prolonged stalemate or partial decoupling could reshape global supply chains. Stay informed as this trade war unfolds.
                </p>
            </div>
        </div>
    );
};

export default BlogTariffWar;