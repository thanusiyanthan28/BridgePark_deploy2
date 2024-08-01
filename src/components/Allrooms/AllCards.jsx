import React from "react";
import "./AllCards.css";
import { Row, Col } from "antd";
import PersonIcon from "../../assets/icons/person.png";
import SingleBedIcon from "../../assets/icons/single_bed.png"; // Single Bed Icon
import DoubleBedIcon from "../../assets/icons/bed_double.png"; 

const bedIconMap = {
  "Single Bed": SingleBedIcon,
  "Double Bed": DoubleBedIcon
};

const HotelAllCards = ({
  imageSource,
  title,
  description,
  NoOfGuests,
  status,
  price,
  buttonText,
  cardtitle,
  onViewMoreClick,
  link,
  icon1,
  icon2

}) => {
  const numberOfGuests = parseInt(NoOfGuests, 10);
  console.log("NoOfGuests prop:", NoOfGuests);
  console.log("Converted numberOfGuests:", numberOfGuests); 
  
  const parseBedInfo = (title) => {
    const bedInfo = [];
    const bedDescriptions = title.split('+');

    bedDescriptions.forEach(desc => {
      // Remove extra spaces
      const cleanDesc = desc.trim();

      // Match pattern "number x Bed Type"
      const match = cleanDesc.match(/(\d+)x (Single Bed|Double Bed|Large Double Bed|Sofa Bed)/);
      if (match) {
        const count = parseInt(match[1], 10);
        const bedType = match[2];
        const icon = bedIconMap[bedType];

        if (icon) {
          bedInfo.push({ icon, count });
        }
      }
    });

    return bedInfo;
  };

  const bedInfos = parseBedInfo(cardtitle);
  return (
    
   
    <div className="hotelRoomCardContainer">
    <div className="hotelRoomCardContainer1">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imageSource} className="hotelRoomCardImage" alt="Room" />
      <h1 className="hotelRoomCardTopBar">{cardtitle}</h1>
         </a>
       </div>   
       <div className="hotelRoomCardDetails">
        <Row className="hotelRoomCardTitleTextFirst">
          <Col>
          <h2 className="hotelRoomCardTitle">{title}</h2>
          <div className="hotelRoomViewMoreLink" onClick={onViewMoreClick}>
            View More
          </div>
          </Col>
        </Row>
        <Row className="hotelRoomCard-MainRow">
        <Col span={12} className="hotelRoomCardIconCol">
            <img src={PersonIcon} alt="Person" className="hotelRoomCardIcon" />
            <span className="hotelRoomCardIconText">x {numberOfGuests}</span>
          </Col>
          <Col span={12} >
          <div className={`bed-info-container`}>
              {bedInfos.map((bed, index) => (
                <div key={index} className="bed-info-item">
                  <img src={bed.icon} alt="Bed"/>
                  <span className="bed-info-text">x {bed.count}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="hotelRoomCardInfoRow">
          <Col span={12}>
            <p className="hotelRoomCardPriceText">Starts with  {price}</p>

          </Col>
          <Col span={12}>
            <p className="cardPriceText2">Excluding taxes</p>
          </Col>

        </Row>
      </div>
    </div>
    // </div>
  );
};

export default HotelAllCards;
