import React from 'react';

const BlogMarketVolatilityTradeDeal = () => {
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

    const subHeadingStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#007BFF',
        marginBottom: '10px',
        textAlign: 'left',
        borderBottom: '2px solid #007BFF',
        display: 'inline-block',
        paddingBottom: '4px'
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
        height: '300px',
        objectFit: 'cover',
        borderRadius: '8px',
        marginBottom: '15px',
    };

    const listStyle = {
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#555',
        marginBottom: '10px',
        textAlign: 'left',
        paddingLeft: '20px',
        listStyleType: 'disc',
    };

    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>
                Market Volatility After Trade Deal Hopes: A Rollercoaster Ride for Indian Investors
                <div style={underlineStyle}></div>
            </h1>

            <div style={sectionStyle}>
                <p style={paragraphStyle}>
                    Recent weeks have seen the Indian stock market experience significant ups and downs, driven by optimism surrounding a potential zero-tariff trade deal with the United States. This development has injected fresh enthusiasm among investors, sparking buying sprees and pushing indices higher.
                </p>
                <img
                    src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1747382473/Leonardo_Kino_XL_Two_business_professionalsone_Indian_and_one_1_y5cxkq.jpg"
                    alt="Stock Market Volatility"
                    style={imageStyle}
                />
            </div>

            <div style={sectionStyle}>
                <h2 style={headingStyle}>📈 The Surge: Optimism Drives Gains</h2>
                <p style={paragraphStyle}>
                    The announcement of talks on a zero-tariff trade deal has fueled optimism across sectors, particularly in export-heavy industries like IT, pharmaceuticals, and manufacturing. Key benchmark indices, including the Nifty 50 and Sensex, recorded sharp gains as foreign investors showed renewed interest.
                </p>
                <p style={paragraphStyle}>Highlights of this surge include:</p>
                <ul style={listStyle}>
                    <li>Nifty 50 climbed 4% in the first week following trade deal rumors.</li>
                    <li>IT and pharma stocks led gains due to anticipated easier access to U.S. markets.</li>
                    <li>Foreign Institutional Investors (FIIs) increased their net buying positions.</li>
                </ul>
            </div>

            <div style={sectionStyle}>
                <h2 style={headingStyle}>⚠️ Volatility and Profit Booking</h2>
                <p style={paragraphStyle}>
                    However, this optimism has been met with sharp volatility. Quick profit booking by traders and uncertainty over the deal’s timeline has caused sudden market pullbacks. Many investors are cautious, preferring to lock in gains amid fears that negotiations may stall or face political hurdles.
                </p>
                <p style={paragraphStyle}>Key volatility factors:</p>
                <ul style={listStyle}>
                    <li>Profit booking after rapid index rises, especially in mid-cap stocks.</li>
                    <li>Concerns over U.S. political approval delaying the trade deal.</li>
                    <li>Global market jitters affecting investor sentiment.</li>
                </ul>
            </div>

            <div style={sectionStyle}>
                <h2 style={headingStyle}>🌐 Impact on Indian Economy and Trade</h2>
                <p style={paragraphStyle}>
                    A zero-tariff deal could dramatically boost Indian exports to the U.S., strengthening trade ties and supporting economic growth. It would reduce costs for Indian exporters and provide a competitive edge in the global marketplace. However, tariff-free access also raises concerns about domestic industries facing stiffer competition from U.S. imports.
                </p>
                <img
                    src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1747382676/USA-TRUMP-TARIFFS-INDIA-0_1747295397691_1747295428411_dxbtug.jpg"
                    alt="Stock Market Volatility"
                    style={imageStyle}
                />
                <p style={paragraphStyle}>Potential economic implications:</p>
                <ul style={listStyle}>
                    <li>Increased export volumes in IT services, textiles, and pharma sectors.</li>
                    <li>Possible pressure on local manufacturers due to tariff removals on U.S. goods.</li>
                    <li>Enhanced foreign direct investment prospects driven by trade confidence.</li>
                </ul>
            </div>

            <div style={sectionStyle}>
                <h2 style={headingStyle}>🔮 What Investors Should Watch</h2>
                <p style={paragraphStyle}>
                    While the promise of a trade deal is encouraging, investors are advised to remain vigilant. Monitoring negotiation developments, global economic cues, and domestic corporate earnings will be crucial in navigating the ongoing volatility.
                </p>
                <ul style={listStyle}>
                    <li>Track official statements from trade representatives and government officials.</li>
                    <li>Watch for shifts in foreign investor flows and domestic liquidity.</li>
                    <li>Diversify portfolios to manage risks amid uncertain outcomes.</li>
                </ul>
            </div>

            <div style={sectionStyle}>
                <h2 style={headingStyle}>📊 Conclusion</h2>
                <p style={paragraphStyle}>
                    The Indian stock market stands at a crossroads, balancing hope for a transformative trade agreement with the realities of geopolitical and economic uncertainties. For investors, understanding this dynamic and staying informed will be key to capitalizing on opportunities while managing risks in this rollercoaster market environment.
                </p>
            </div>
        </div>
    );
};

export default BlogMarketVolatilityTradeDeal;
