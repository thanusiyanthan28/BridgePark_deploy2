// CardSlider.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import React, { useState,useEffect,useRef  } from 'react';
import '../../css/CardSlider.css';

const CardSlider = ({ cards }) => {

  // Run only once when component mounts or cards change

  const [currentIndex, setCurrentIndex] = useState(cards.length - 1);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Assuming mobile width threshold is 768px
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update isMobile state on window resize
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, []); 

  

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
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

  document.documentElement.style.setProperty('--currentIndex', currentIndex);
  return (
    <div className='meeting-my-class' onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
      <h2 className='.meeting-my-class-title '>Meeting & Events </h2>
    <div className="meeting-card-slider">
 
    <div className="meeting-cards-container" style={{ '--current-index': currentIndex }}>
    {/* <div className="meeting-cards-container" style={{ transform: `translateX(-${currentIndex * 350}px)`, marginLeft: '33.9%' }}> */}
        {cards.map((card, index) => (
          <div key={index} className={`meeting-card ${index === currentIndex ? 'meeting-active' : 'meeting-non-active'}`}>
            <img src={card.image} alt={card.title} />
            <div className='meeting-text'>
            <div className={`${index === currentIndex ? 'meeting-title' : ''}`}>
            <h3>{card.title}</h3>
            <p className='meeting-des'>{card.des}</p>
             </div>
             <div className={`${index === currentIndex ? 'meeting-main-date' : ''}`}>
            <p className='meeting-month'> {card.month}</p>
            <h2 className='meeting-date'> <b>{card.date}</b></h2>
            <p className='meeting-time'> {card.time}</p>
            </div>
          </div>
          </div>
        ))}
      </div>
  
    </div>
    {isMobile && (
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
