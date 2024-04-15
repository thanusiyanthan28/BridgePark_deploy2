import React from "react";
import "../../css/HotelRoomCard.css";
import { Row, Col } from "antd";

const HotelRoomCard = ({
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
    <div className="hotelRoomCardContainer">
      <img src={imageSource} className="hotelRoomCardImage" alt="Room" />
      <h1 className="hotelRoomCardTopBar">{cardtitle}</h1>
      <div className="hotelRoomCardDetails">
        <Row className="hotelRoomCardTitleTextFirst">
          <Col span={12}>
            {" "}
            <h2 className="hotelRoomCardTitle">{title}</h2>
          </Col>
          <Col span={12}>
            {" "}
            <div className="hotelRoomViewMoreLink" onClick={onViewMoreClick}>
              View More
            </div>
          </Col>
        </Row>
        <Row className="hotelRoomCard-MainRow">
          <Col span={8}>
            <Row>
              {" "}
              <p>GUEST</p>
            </Row>
            <Row className="hotelRoomCard-subRow">
              <p>01</p>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              {" "}
              <p>ROOMS</p>
            </Row>
            <Row className="hotelRoomCard-subRow">
              <p>02</p>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              {" "}
              <p>AVAIABLE</p>
            </Row>
            <Row className="hotelRoomCard-subRow">
              <p>01</p>
            </Row>
          </Col>
        </Row>
        <Row className="hotelRoomCardInfoRow">
          <Col span={12}>
            <p className="hotelRoomCardPriceText">{price} per night</p>
            <p className="cardPriceText2">including taxes</p>
          </Col>
          <Col span={12}>
            <button className="hotelRoomCardButton">{buttonText}</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HotelRoomCard;
