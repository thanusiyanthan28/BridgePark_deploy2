import React from "react";
import { Row, Col } from "antd";
import "../../css/HotelRoomTypeCard.css";

const hotelRoomTypeTypeCard = ({
  imageSource,
  title,
  description,
  guests,
  status,
  price,
  buttonText,
  cardtitle,
  onViewMoreClick,
}) => {
  return (
    <div>
      <div className="hotelRoomTypeCardContainer">
        <img src={imageSource} className="hotelRoomTypeCardImage" alt="Room" />
        <h1 className="hotelRoomTypeCardTopBar">{cardtitle}</h1>
        <div className="hotelRoomTypeCardDetails">
          <Row className="hotelRoomTypeCardInfoRow">
            <Col span={12}>
             <p>{description}</p>
            </Col>
            <Col span={12} className="HotelRoomTypeTextShown">
              <div className="HotelRoomTypeTextPara">
                <p>Our Price Starts From </p>

                <p>{price} Per Nights</p>
              </div>
              <button className="hotelRoomTypeCardButton">{buttonText}</button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default hotelRoomTypeTypeCard;
