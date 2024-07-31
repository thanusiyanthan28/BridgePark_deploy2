import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './NewMeeting.css';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import img7 from "../../assets/MEDIA & ASSESTS/bonfire 1.webp"
import img6 from "../../assets/MEDIA & ASSESTS/bonfire 3.webp";
import img1 from "../../assets/MEDIA & ASSESTS/banfire 5.webp";
import img2 from "../../assets/MEDIA & ASSESTS/christ8.webp";
import img3 from "../../assets/MEDIA & ASSESTS/christmas 3.webp";
import img4 from "../../assets/MEDIA & ASSESTS/valen 2.webp";
import img5 from "../../assets/MEDIA & ASSESTS/valen 3.webp";
import img8 from "../../assets/MEDIA & ASSESTS/valen 5.webp";
import img9 from "../../assets/MEDIA & ASSESTS/valen.webp";
import img10 from "../../assets/MEDIA & ASSESTS/new year.webp";
import img11 from "../../assets/MEDIA & ASSESTS/new year 4.webp";





const cardsData = [
  { id: 1, images: [img1, img6, img7], title: 'Bonfire eve Dinner ', description: 'Description 1', date: '2024-01-01', time: '07.00 pm' },
  { id: 2, images: [img2, img3 ,img2],       title: 'Christmas eve Dinner ', description: 'Description 2', date: '2024-02-01', time: '07.00 pm' },
  { id: 3, images: [ img4, img5, img8, img9], title: 'New Years eve Dinner ', description: 'Description 3', date: '2024-03-01', time: '07.00 pm' },
  { id: 5, images: [img10, img11,img10], title: 'New Years eve Dinner ', description: 'Description 5', date: '2024-05-01', time: '07.00 pm' },
  // { id: 6, images: [img5, img6, img1], title: 'New Years eve Dinner 6', description: 'Description 6', date: '2024-06-01', time: '07.00 pm' },
  // { id: 7, images: [img6, img1, img2], title: 'New Years eve Dinner 7', description: 'Description 7', date: '2024-07-01', time: '07.00 pm' },
];

const NewMeeting = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      handleNextImage();
    }, 1500);

    return () => clearInterval(imageInterval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % cardsData[currentIndex].images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const visibleCards = [
    cardsData[(currentIndex - 1 + cardsData.length) % cardsData.length],
    cardsData[currentIndex],
    cardsData[(currentIndex + 1) % cardsData.length],
  ];

  return (
    <>
      <div className='location-title new-meeting-mtitle'>MEETING & EVENTS</div>
      <div className="new-meeting-card-carousel" {...handlers}>
        <button className="new-meeting-nav-button" onClick={handlePrev}><LeftOutlined /></button>
        <div className="new-meeting-cards-container">
          {visibleCards.map((card, index) => (
            <div key={card.id} className={`new-meeting-card ${index === 1 ? 'new-meeting-active' : 'new-meeting-non-active'}`}>
              <img src={card.images[currentImageIndex]} alt={card.title} />
              <div className={`new-meeting-card-content ${index === 1 ? 'new-meeting-active-content' : 'new-meeting-overlay-content'}`}>
                <h4 className='new-meeting-title'>{card.title}</h4>
                {/* <p className='new-meeting-dis'>{card.description}</p>
                <p className='new-meeting-date'><span>{card.date}</span>&nbsp; | &nbsp;<span>{card.time}</span></p> */}
              </div>
            </div>
          ))}
        </div>
        <button className="new-meeting-nav-button" onClick={handleNext}><RightOutlined /></button>
      </div>
    </>
  );
};

export default NewMeeting;
