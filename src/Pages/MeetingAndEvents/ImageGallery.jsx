import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import React, { useState, useEffect, useRef } from 'react';
import '../../css/CardSlider.css';
import image1 from "../../assets/images/Bar2.webp";
import image2 from "../../assets/images/BreakfastBuffet.webp";
import image3 from "../../assets/images/HotelBreakfast.webp";
import image4 from "../../assets/images/HotelFront.webp";
import image5 from "../../assets/images/Loungebar 1.webp";
import image6 from "../../assets/images/RearBeergarden.webp";
import image7 from "../../assets/images/Reception1.webp";
import image8 from "../../assets/images/Restaurant1.webp";
import image9 from "../../assets/images/Restaurant2.webp";

const ImageGallery = () => {
    const cards = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
    ];

    const [currentIndex, setCurrentIndex] = useState(cards.length);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);
    const transitionRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            nextCard();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const nextCard = () => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const prevCard = () => {
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            nextCard();
        }

        if (touchEndX.current - touchStartX.current > 50) {
            prevCard();
        }

        touchStartX.current = null;
        touchEndX.current = null;
    };



    const cardList = [...cards, ...cards, ...cards];

    return (
        <div className='meeting-my-class' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          
        
                <div className="meeting-cards-container">
                    {cardList.map((card, index) => (
                        <div key={index} className='meeting-card' >
                            <img src={card} alt={`Slide ${index}`} />
                        
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default ImageGallery;
