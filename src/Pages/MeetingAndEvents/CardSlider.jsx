// CardSlider.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import React, { useState,useEffect } from 'react';
import '../../css/CardSlider.css';

const CardSlider = ({ cards }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, []); // Run only once when component mounts or cards change

  const [currentIndex, setCurrentIndex] = useState(cards.length - 1);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <div className='meeting-my-class'>
      <h2>Meetings & Events </h2>
    <div className="meeting-card-slider">
 
      <div className=" meeting-cards-container" style={{ transform: `translateX(-${currentIndex * 380}px)` }}>
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
    <button className="meeting-prev-btn" onClick={prevCard}>
    <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="meeting-next-btn" onClick={nextCard}>
      <FontAwesomeIcon icon={faArrowRight} />
      </button>
   
    </div>
  );
};

export default CardSlider;
