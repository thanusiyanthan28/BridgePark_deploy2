import React from 'react';
import { Card, Carousel } from 'antd';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Newmeeting.css'; // Make sure to import the custom CSS

const { Meta } = Card;

const Newmeeting = () => {
  const cardData = [
    { title: 'Card 1', description: 'This is card 1' },
    { title: 'Card 2', description: 'This is card 2' },
    { title: 'Card 3', description: 'This is card 3' },
    { title: 'Card 4', description: 'This is card 4' },
    { title: 'Card 5', description: 'This is card 5' },
    { title: 'Card 6', description: 'This is card 6' },
    { title: 'Card 7', description: 'This is card 7' },
  ];

  const renderCards = () =>
    cardData.map((card, index) => (
      <div key={index}>
        <Card className="carousel-card" title={card.title}>
          <Meta description={card.description} />
        </Card>
      </div>
    ));

  return (
    <div className="carousel-container">
      <Carousel
        centerMode
        infinite
        slidesToShow={3}
        slidesToScroll={1}
        centerPadding="0"
        arrows
        dots={false}
      >
        {renderCards()}
      </Carousel>
    </div>
  );
};

export default Newmeeting;
