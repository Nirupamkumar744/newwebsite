// src/components/StudentReview.js
import React, { useEffect, useRef, useState } from 'react';
import './StudentReview.css';

const reviews = [
    {
        name: "Awnish",
        review: "After completing the stock market trading course, understanding real-time market analysis became much easier. Things that used to be confusing now make sense. Whether you're a beginner or have some experience, this institute is truly one of the best!",
        rating: 5,
        image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725950247/fotor-202409101271_l8tdbd.png"
    },
    {
        name: "Manjeet Kumar",
        review: "Learning technical analysis, risk management, and market psychology here really boosted my confidence in trading. It’s the perfect place to learn professional trading the right way",
        rating: 4,
        image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725949632/IMG_1435_1_-fotor-20240910114920_zyw0qu.png"
    },
    {
        name: "Rakesh",
        review: "Expert-led sessions ke through trading strategies banana seekha. Stock market mein successful banna hai toh yeh best platform hai, no doubt!",
        rating: 5,
        image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725949623/IMG_1438_1_-fotor-20240910115056_gxllgu.png"
    },
    {
        name: "Deepak",
        review: "Top-rated stock market institute jahan practical insights aur market simulations ke through real trading ka proper experience mila. Theory ke saath real market ka experience bhi aaya",
        rating: 4,
        image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725949622/fotor-2024091011483_bkic9l.png"
    },
    {
        name: "Gaurav Kumar",
        review: "“The best place to learn risk management and chart analysis! Advanced learning opportunities available for both beginners and experienced traders.",
        rating: 5,
        image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725949620/IMG_1437_1_-fotor-20240910115027_gsn1sa.png"
    },
    {
        name: "Dhiraj",
        review: "Looking for a deep understanding of the stock market? This institute offers comprehensive learning where you can master both technical analysis and trading psychology. It’s the perfect place to build strong foundations and develop the mindset needed for successful trading.",
        rating: 4,
        image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725949620/IMG_1436_1_-fotor-20240910114957_i2uawi.png"
    },
    {
        name: "Prabhat Kumar",
        review: "Live market simulations aur personalized mentorship se mera confidence kaafi strong hua. Jo log seriously trading karna chahte hain, unke liye yeh best stock market course hai!",
        rating: 5,
        image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152417/student6_xplvbd.png"
    },
    {
        name: "Md Shanawaj",
        review: "Market behavior samajhna aur profitable trades karna yahan se seekha. Stock market me career banana hai toh main yeh institute highly recommend karta hoon!",
        rating: 4,
        image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152416/student3_etfv4z.png"
    },
    {
        name: "Tripti Singh",
        review: "Practical trading knowledge aur effective strategies ke saath trading ka naya nazariya mila. Career growth ke liye yeh best stock market training institute hai!",
        rating: 4,
        image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152417/student5_ll2sal.png"
    }
];

const StudentReview = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        const cardWidth = scrollContainer.querySelector('.review-card').offsetWidth; // Card width including margin
        const totalCards = reviews.length;
        let scrollPosition = 0;

        const scroll = () => {
            const visibleCards = window.innerWidth <= 768 ? 1 : 4;
            scrollPosition += cardWidth * visibleCards;
            if (scrollPosition >= cardWidth * totalCards) {
                scrollPosition = 0; // Reset to start
            }
            scrollContainer.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
        };

        const interval = setInterval(() => {
            if (!isDragging) scroll();
        }, 20000); // 20 seconds

        return () => clearInterval(interval);
    }, [isDragging]);

    const handleDragStart = (e) => {
        setIsDragging(true);
        const x = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX;
        setStartX(x);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleDragMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
        const walk = (x - startX) * 1.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            className="student-reviews"
            ref={scrollRef}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
        >
            {reviews.map((review, index) => (
                <div className="review-card" key={index}>
                    <img src={review.image} alt={review.name} className="student-image" />
                    <h3>{review.name}</h3>
                    <p className="para">{review.review}</p>
                    <div className="rating">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={i < review.rating ? 'star filled' : 'star'}>★</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StudentReview;