import React from "react";
import "../../css/HotelRoomCardBasicRoom.css";
import { Row, Col } from "antd";

const HotelRoomCardBasicRoom = ({
  imageSource,
  title,
  description,
  guests,
  status,
  price,
  buttonText,
  cardtitle,
  onViewMoreClick,
  link,
  icon1,
  icon2

}) => {
  return (
    // <div className="main-hotelRoomCardContainer">
    <div className="hotelRoomCardContainerBasicRoom">
       <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageSource} className="hotelRoomCardImageBasicRoom" alt="Room" />
        
      </a> 
      <h1 className="hotelRoomCardTopBarBasicRoom">{cardtitle}</h1>     
      <div className="hotelRoomCardDetailsBasicRoom">
        <Row className="hotelRoomCardTitleTextFirstBasicRoom">
          <Col span={14} >
            {" "}
            <h2 className="hotelRoomCardTitleBasicRoom">{title}</h2>
          </Col>
          <Col span={10} >
            {" "}
            <div className="hotelRoomViewMoreLinkBasicRoom" onClick={onViewMoreClick}>
              View More
            </div>
          </Col>
         <div className="hotelRoomCardiconBasicRoom">
            <img src={icon1} alt="icon1"/><img src={icon2}/>
         </div>
        </Row>
        <Row className="hotelRoomCard-MainRowBasicRoom">
          <Col span={8}>
            <Row>
              {" "}
              <p>GUEST</p>
            </Row>
            <Row className="hotelRoomCard-subRowBasicRoom">
              <p>01</p>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              {" "}
              <p>ROOMS</p>
            </Row>
            <Row className="hotelRoomCard-subRowBasicRoom">
              <p>02</p>
            </Row>
          </Col>
          <Col span={8}>
            <Row>
              {" "}
              <p>STATUS</p>
            </Row>
            <Row className="hotelRoomCard-subRowBasicRoom">
              <p>{status}</p>
            </Row>
          </Col>
        </Row>
        <Row className="hotelRoomCardInfoRowBasicRoom">
          <Col span={12}>
            <p className="hotelRoomCardPriceTextBasicRoom">{price} per night</p>
            
          </Col>
          <Col span={12}>
          <p className="cardPriceText2BasicRoom">including taxes</p>
          </Col>
          <a href={link} target="_blank" rel="noopener noreferrer" className="hotelRoomCardButton-linkBasicRoom">
              <button className="hotelRoomCardButtonBasicRoom">{buttonText}</button>
            </a>  
        </Row>
      </div>
    </div>
    // </div>
  );
};

export default HotelRoomCardBasicRoom;
