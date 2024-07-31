import React from "react";
import "./RoomCard.css";
import { Row, Col } from "antd";
import PersonIcon from "../../assets/icons/person.png";
import SingleBedIcon from "../../assets/icons/single_bed.png"; // Single Bed Icon
import DoubleBedIcon from "../../assets/icons/bed_double.png"; // Double Bed Icon
import KingBedIcon from "../../assets/icons/king_bed.png"; // King Bed Icon
import Sofabed from "../../assets/icons/Sofa.png"
const bedIconMap = {
  "Single Bed": SingleBedIcon,
  "Double Bed": DoubleBedIcon,
  "Large Double Bed": KingBedIcon,
  "Sofa Bed" : Sofabed
};

const RoomCard = ({
  imageSource,
  title,
  price,
  cardtitle,
  onViewMoreClick,
  link,
  NoOfGuests,
  bedIcons,
  cardId,

}) => {
  
  return (
    
    <div className="hotelRoomCardContainer-R1">
      <div className="hotelRoomCardContainer1-R1">
      {/* <a href={} target="_blank" rel="noopener noreferrer"> */}
        <img src={imageSource} className="hotelRoomCardImage-R1" alt="" />
        <h1 className="hotelRoomCardTopBar-R1">{cardtitle}</h1>
     {/* </a> */}
     
      </div>
      <div className="hotelRoomCardDetails-R1">
      <Row className="hotelRoomCard-MainRow-R1">
      <Col span={12}>
            <p className="hotelRoomCardPriceText-R1">Starts with  {price}</p>

          </Col>
          <Col span={12} >
          <div className="hotelRoomViewMoreLink-R1" onClick={onViewMoreClick}>
            View More
          </div>
          </Col>
        </Row>
       
      </div>
    </div>
    // </div>
  );
};

export default RoomCard;
