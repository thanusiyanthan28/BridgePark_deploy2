import React from "react";
import "./AllCards.css";
import { Row, Col } from "antd";
import PersonIcon from "../../assets/icons/person.png";
import SingleBedIcon from "../../assets/Facilities of BPH/single-bed.png"; // Single Bed Icon
import DoubleBedIcon from "../../assets/Facilities of BPH/bed.png"; 
import BunkBedIcon from "../../assets/Facilities of BPH/bunk-bed.png"
import KingBedIcon from "../../assets/Facilities of BPH/kingbed.png"
import LargeDouble from "../../assets/Facilities of BPH/largedouble.png"
import SofaBed from "../../assets/Facilities of BPH/sofa.png"

const bedIconMap = {
  "SINGLE BED": SingleBedIcon,
  "DOUBLE BED": DoubleBedIcon,
  "BUNK BED": BunkBedIcon ,
  "SUPERIOR KING BED":KingBedIcon,
  "LARGE DOUBLE BED": LargeDouble,
  "SOFA BED":SofaBed,
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
      const match = cleanDesc.match(/(\d+) x (SINGLE BED|DOUBLE BED|BUNK BED|LARGE DOUBLE BED|SOFA BED|SUPERIOR KING BED)/);
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
    
   
    <div className="hotelRoomCardContainer-ALL">
    <div className="hotelRoomCardContainer1-ALL">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={imageSource} className="hotelRoomCardImage-ALL" alt="Room" />
      <h1 className="hotelRoomCardTopBar-ALL">{cardtitle}</h1>
         </a>
       </div>   
       <div className="hotelRoomCardDetails-ALL">
        <Row className="hotelRoomCardTitleTextFirst-ALL">
          <Col>
          <h2 className="hotelRoomCardTitle-ALL">{title}</h2>
          <div className="hotelRoomViewMoreLink-ALL" onClick={onViewMoreClick}>
            View More
          </div>
          </Col>
        </Row>
        <Row className="hotelRoomCard-MainRow-ALL">
        <Col span={12} className="hotelRoomCardIconCol-ALL">
            <img src={PersonIcon} alt="Person" className="hotelRoomCardIcon-ALL" />
            <span className="hotelRoomCardIconText-ALL">x {numberOfGuests}</span>
          </Col>
          <Col span={12} >
          <div className={`bed-info-container-ALL`}>
              {bedInfos.map((bed, index) => (
                <div key={index} className="bed-info-item-ALL">
                  <img src={bed.icon} alt="Bed"/>
                  <span className="bed-info-text-ALL">x {bed.count}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="hotelRoomCardInfoRow-ALL">
          <Col span={12}>
            <p className="hotelRoomCardPriceText-ALL">Starts with  {price}</p>

          </Col>
          <Col span={12}>
            <p className="cardPriceText2-ALL">Excluding taxes</p>
          </Col>

        </Row>
      </div>
    </div>
    // </div>
  );
};

export default HotelAllCards;
