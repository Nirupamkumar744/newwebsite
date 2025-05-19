import React from 'react';

const BlogYesBankPenalty = () => {
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
                RBI Slaps ₹29.6 Lakh Fine on Yes Bank: What It Means
                <div style={underlineStyle}></div>
            </h1>

            <div style={sectionStyle}>
                <p style={paragraphStyle}>
                    The Reserve Bank of India (RBI) dropped a ₹29.6 lakh penalty on Yes Bank on May 17, 2025, for slipping up on regulatory guidelines. This move puts the spotlight on the bank’s internal controls as it fights to regain its footing after the 2020 crisis.
                </p>
                <img
                    src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1747644865/images_1_ikv34v.png"
                    alt="Yes Bank Penalty Overview"
                    style={imageStyle}
                />
            </div>

            <div style={sectionStyle}>
                <h2 style={headingStyle}>📜 Why the Penalty?</h2>
                <p style={paragraphStyle}>
                    The fine, issued under the Banking Regulation Act, 1949, comes from a Statutory Inspection for Supervisory Evaluation (ISE) of Yes Bank’s financials as of March 31, 2022. The RBI flagged issues in customer onboarding, due diligence, and loan disbursements, but clarified no fraud was involved.
                </p>
                <p style={paragraphStyle}>Key issues found:</p>
                <ul style={listStyle}>
                    <li>Loans sanctioned and disbursed without proper checks.</li>
                    <li>Customer complaints not handled within required timelines.</li>
                    <li>Violation of lending limits and exposure norms.</li>
                </ul>
            </div>

            <div style={sectionStyle}>
                <h2 style={headingStyle}>⚖️ RBI’s Take</h2>
                <p style={paragraphStyle}>
                    The RBI made it clear the penalty is about regulatory lapses, not questioning Yes Bank’s deals with customers. The bank can keep running as usual, but this is a nudge to tighten up its compliance game.
                </p>
                <ul style={listStyle}>
                    <li>No restrictions on daily operations.</li>
                    <li>A call to strengthen internal governance.</li>
                </ul>
            </div>

            <div style={sectionStyle}>
                <h2 style={headingStyle}>🏦 Yes Bank’s Comeback Struggle</h2>
                <p style={paragraphStyle}>
                    Post-2020 crisis, Yes Bank’s been rebuilding with new leadership, a cleaner loan book, and efforts to win back trust. But slip-ups like this could hit the brakes on its progress.
                </p>
                <img
                    src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1747644865/rbi-agencies_uwo1h6.webp"
                    alt="Yes Bank Recovery"
                    style={imageStyle}
                />
                <p style={paragraphStyle}>Recent steps include:</p>
                <ul style={listStyle}>
                    <li>New leadership to steer the ship.</li>
                    <li>Fixing the loan portfolio to cut risks.</li>
                    <li>Working to rebuild market and investor confidence.</li>
                </ul>
            </div>

            <div style={sectionStyle}>
                <h2 style={headingStyle}>📈 Investor and Market Impact</h2>
                <p style={paragraphStyle}>
                    The penalty caused some stock wobbles, with investors staying cautious. The fine’s small, but it’s a reminder of governance gaps. Investors should keep an eye on Yes Bank’s next moves.
                </p>
                <ul style={listStyle}>
                    <li>Track CASA ratios, credit quality, and ROA/ROE metrics.</li>
                    <li>Listen for management’s take on compliance in earnings calls.</li>
                    <li>Watch how the bank boosts its compliance culture.</li>
                </ul>
            </div>

            <div style={sectionStyle}>
                <h2 style={headingStyle}>📝 Wrapping Up</h2>
                <p style={paragraphStyle}>
                    The ₹29.6 lakh fine from the RBI is no big hit financially, but it’s a wake-up call for Yes Bank to get its compliance in check. As it pushes to rebuild trust, fixing these gaps is key to staying on track in the banking game.
                </p>
            </div>
        </div>
    );
};

export default BlogYesBankPenalty;