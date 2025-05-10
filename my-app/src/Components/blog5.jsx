import React from 'react';

const BlogIndiaPakistanWar = () => {
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
                India vs. Pakistan 2025: A Conflict Reshaping South Asia
                <div style={underlineStyle}></div>
            </h1>
            <div style={sectionStyle}>
                <p style={paragraphStyle}>
                    The 2025 India-Pakistan conflict, sparked by a deadly terrorist attack in Pahalgam, Kashmir, has escalated tensions to unprecedented levels. With both nations engaging in military strikes and diplomatic standoffs, the world watches as these nuclear-armed neighbors navigate a precarious path. This blog explores the origins, developments, and global implications of this crisis.
                </p>
                <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1746867309/Flux_Dev_Create_a_highresolution_digital_illustration_depictin_0_l2a6g1.jpg" alt="India-Pakistan Conflict" style={imageStyle} />
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>🔥 Origins of the Conflict</h2>
                <p style={paragraphStyle}>
                    The conflict began on April 22, 2025, when a terrorist attack in Pahalgam, Indian-administered Kashmir, killed 26 civilians. India attributed the attack to Pakistan-based militants, prompting a swift and aggressive response. On May 7, India launched Operation Sindoor, targeting terrorist hideouts in Pakistan and Pakistan-administered Kashmir.
                </p>
                <p style={paragraphStyle}>Key triggers include:</p>
                <ul style={listStyle}>
                    <li>Long-standing disputes over Kashmir, a flashpoint since 1947.</li>
                    <li>India’s suspension of the Indus Waters Treaty post-attack.</li>
                    <li>Pakistan’s vow to retaliate, labeling India’s strikes an “act of war.”</li>
                </ul>
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>⚔️ Military Escalations</h2>
                <p style={paragraphStyle}>
                    The military exchanges have been intense, with both sides showcasing advanced capabilities. India’s Operation Sindoor involved precision strikes on nine terrorist camps, reportedly killing over 80 militants. Pakistan responded with drone and missile attacks, targeting Indian military sites.
                </p>
                <p style={paragraphStyle}>Notable developments:</p>
                <ul style={listStyle}>
                    <li>India deployed Rafale jets and INS Vikrant, with S-400 systems intercepting Pakistani drones.</li>
                    <li>Pakistan conducted drone strikes across 26 Indian locations, from Jammu & Kashmir to Gujarat.</li>
                    <li>Both nations closed their airspace, disrupting civilian flights.</li>
                </ul>
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>🌍 International Response</h2>
                <p style={paragraphStyle}>
                    The global community has urged de-escalation, fearing a broader conflict between nuclear powers. The U.S., China, and G7 nations have called for dialogue, while Turkey and Azerbaijan expressed support for Pakistan.
                </p>
                <p style={paragraphStyle}>Key diplomatic efforts:</p>
                <ul style={listStyle}>
                    <li>U.S. Secretary of State Marco Rubio emphasized “immediate de-escalation.”</li>
                    <li>The IMF and Nepal expressed hopes for a peaceful resolution.</li>
                    <li>India and Pakistan’s National Security Councils have held limited talks.</li>
                </ul>
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>📊 Military Comparison</h2>
                <h3 style={subHeadingStyle}>India’s Military Strength</h3>
                <p style={paragraphStyle}><strong>Global Firepower Index 2025: Rank 4</strong></p>
                <ul style={listStyle}>
                    <li>Personnel: 1.46 million</li>
                    <li>Defense Budget: US$79 billion</li>
                    <li>Assets: Rafale jets, aircraft carriers, S-400 systems</li>
                </ul>
                <h3 style={subHeadingStyle}>Pakistan’s Military Strength</h3>
                <p style={paragraphStyle}><strong>Global Firepower Index 2025: Rank 12</strong></p>
                <ul style={listStyle}>
                    <li>Personnel: 654,000</li>
                    <li>Defense Budget: US$10 billion</li>
                    <li>Assets: F-16 jets, Fateh-2 missiles</li>
                </ul>
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>⚠️ Humanitarian and Economic Impact</h2>
                <p style={paragraphStyle}>
                    The conflict has disrupted lives and economies. Villages along the Line of Control are deserted, and civilian casualties are rising. The Indian Premier League was suspended, and air travel bans have stranded passengers.
                </p>
                <p style={paragraphStyle}>Key impacts:</p>
                <ul style={listStyle}>
                    <li>Over 10 civilian deaths reported in Indian Kashmir due to Pakistani shelling.</li>
                    <li>Pakistan reported 26 deaths, including civilians, from Indian strikes.</li>
                    <li>Economic strain, with Pakistan securing a US$1 billion IMF loan amid the crisis.</li>
                </ul>
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>🔮 Future Scenarios</h2>
                <p style={paragraphStyle}>
                    Analysts warn of the risk of escalation, especially given both nations’ nuclear capabilities. A 2019 study predicted a potential nuclear conflict in 2025, a chilling reminder of the stakes. However, both sides have signaled a desire to avoid broader war.
                </p>
                <ul style={listStyle}>
                    <li>Best case: Diplomatic talks lead to de-escalation.</li>
                    <li>Worst case: Miscalculations trigger a wider conflict.</li>
                    <li>Likely scenario: Limited skirmishes continue with international mediation.</li>
                </ul>
            </div>
            <div style={sectionStyle}>
                <h2 style={headingStyle}>🕊️ Path to Peace</h2>
                <p style={paragraphStyle}>
                    Resolving this conflict requires bold diplomacy and mutual restraint. Both nations must prioritize civilian safety and regional stability over military posturing. The world’s eyes are on South Asia, hoping for a resolution that prevents catastrophe.
                </p>
                <p style={paragraphStyle}>
                    This isn’t just a regional issue—it’s a global concern.
                </p>
                <img src="https://res.cloudinary.com/dyrn2eg1j/image/upload/v1746867309/Flux_Dev_Design_a_vibrant_hopeful_digital_artwork_of_a_2025_di_0_djgfnd.jpg" alt="India-Pakistan Peace Efforts" style={imageStyle} />
            </div>
        </div>
    );
};

export default BlogIndiaPakistanWar;