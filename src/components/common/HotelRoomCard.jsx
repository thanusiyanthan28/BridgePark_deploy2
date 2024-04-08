import React from 'react';
import '../../css/HotelRoomCard.css'

const HotelRoomCard = ({ imageSource, title, description, guests, status, price, buttonText }) => {
  return (
    <div className="cardContainer">
      <img src={imageSource} className="cardImage" alt="Room" />
      <div className="cardDetails">
        <h2 className="cardTitle">{title}</h2>
        <p className="cardDescription">{description}</p>
        <div className="cardInfoRow">
          <p className="cardInfoText">Guests: {guests}</p>
          <p className="cardInfoText">Status: {status}</p>
        </div>
        <div className="cardInfoRow">
          <p className="cardPriceText">{price}</p>
          <button className="cardButton">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default HotelRoomCard;
