import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import React, { useState, useEffect, useRef } from 'react';
import '../../css/CardSlider.css';

const CardSlider = ({ cards }) => {
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

  useEffect(() => {
    if (currentIndex === cards.length * 2) {
      setTimeout(() => {
        transitionRef.current.style.transition = 'none';
        setCurrentIndex(cards.length);
      }, 300);
    }
    if (currentIndex === -1) {
      setTimeout(() => {
        transitionRef.current.style.transition = 'none';
        setCurrentIndex(cards.length - 1);
      }, 300);
    } else {
      transitionRef.current.style.transition = 'transform 0.3s ease-in-out';
    }
  }, [currentIndex, cards.length]);

  const cardList = [...cards, ...cards, ...cards];

  return (
    <div className='meeting-my-class' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      {/* <h2 className='meeting-my-class-title'>Meeting & Events</h2> */}
      <div className='location-title'>MEETING & EVENTS</div>
      <div className="meeting-card-slider">
        <div className="meeting-cards-container" ref={transitionRef} style={{ transform: `translateX(calc(50% - ${currentIndex * (300)}px))` }}>
          {cardList.map((card, index) => (
            <div key={index} className={`meeting-card ${index === currentIndex ? 'meeting-active' : 'meeting-non-active'}`}>
              <img src={card.image} alt={card.title} />
              <div className='meeting-text'>
                <div className={`${index === currentIndex ? 'meeting-title' : ''}`}>
                  <h3>{card.title}</h3>
                  <p className='meeting-des'>{card.des}</p>
                
                
                  <diV className='meeting-date'><p >{card.month}&nbsp;<span>&nbsp;{card.date}</span>&nbsp;<span>{card.time}</span></p></diV>
     
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!isMobile && (
        <>
          <button className="meeting-button meeting-prev-btn" onClick={prevCard}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="meeting-button meeting-next-btn" onClick={nextCard}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </>
      )}
    </div>
  );
};

export default CardSlider;
