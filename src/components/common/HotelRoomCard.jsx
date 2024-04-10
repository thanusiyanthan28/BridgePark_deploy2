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
}) => {
  return (
    <div className="cardContainer">
      <img src={imageSource} className="cardImage" alt="Room" />
      <h1 className="cardTopBar">{cardtitle}</h1>
      <div className="cardDetails">
        <h2 className="cardTitle">{title}</h2>
        <Row className="hotelRoomCard-MainRow">
          <Col span={8}>
            <Row>
              {" "}
              <p>GUEST</p>
            </Row>
            <Row>
              <p>01</p>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              {" "}
              <p>ROOMS</p>
            </Row>
            <Row>
              <p>02</p>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              {" "}
              <p>AVAIABLE</p>
            </Row>
            <Row>
              <p>01</p>
            </Row>
          </Col>
        </Row>
        <Row className="cardInfoRow">
          <Col span={12}>
            <p className="cardPriceText">{price} per night</p>
            <p className="cardPriceText2">including taxes</p>
          </Col>
          <Col span={12}>
            <button className="cardButton">{buttonText}</button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HotelRoomCard;
