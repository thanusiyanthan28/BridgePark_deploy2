import React, { useState, useRef } from "react";
import { Row, Col } from "antd";
import "../../css/RoomInformation/RoomInformation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faRestroom, faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import FacilitiesIconsContainer from "../Facilities/facilitiesiconsContainer";
import ColumnList from "../Facilities/facilitiesList";
import HouseRules from "../common/HomeRules";
import SiteCard from "../Sitecard/siteCard";
//import RoominfoCard from '../home/RoominfoCard'
import CustomCarousel from "./new";


const RoomInformation = ({room, bookingUrl,selectedRoomId,bathroomType,roomPrice }) => {
  const sec01Ref = useRef(null);
  const sec02Ref = useRef(null);
  const sec03Ref = useRef(null);

  const [activeTab, setActiveTab] = useState("Room Information");
  const [showList, setShowList] = useState(false);

  const handleTabClick = (sectionName) => {
    setActiveTab(sectionName);
    switch (sectionName) {
      case "Room Information":
        sec01Ref.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Facilities":
        sec02Ref.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Policies":
        sec03Ref.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  const cardsData = [
    { id: 1, title: 'Free WiFi' },
    { id: 2, title: 'Free Parking' },
    { id: 3, title: 'Family Rooms' },
    { id: 4, title: 'Room Service' },
    { id: 5, title: 'Restaurant' },
    { id: 6, title: 'Non-Smoking Rooms' },
    { id: 7, title: 'Bar' },
  ];

  const handleToggleList = () => {
    setShowList(!showList);
  };

  const handleHideList = () => {
    setShowList(false);
  };

  return (
    <div>
        <div className="site-card-room">
        <SiteCard selectedRoomId={selectedRoomId} />
        </div>
      <div className="The-header">
        <Row className="RoomInformation-section-All">
          <div
            className={`RoomInformation-section ${activeTab === "Room Information" ? "active" : ""}`}
            onClick={() => handleTabClick("Room Information")}
          >
            <div className="fixed-head">
            <h2 className="RoomInformation-heading">Room Information</h2>
            </div>
          </div>

          <div
            className={`RoomInformation-section ${activeTab === "Facilities" ? "active" : ""}`}
            onClick={() => handleTabClick("Facilities")}
          >
            <h2>Facilities</h2>
          </div>

          <div
            className={`RoomInformation-section ${activeTab === "Policies" ? "active" : ""}`}
            onClick={() => handleTabClick("Policies")}
          >
            <h2>Policies</h2>
          </div>
          <div
            className="RoomInformation-section-PriceList"
            onClick={() => handleTabClick("Room Information")}
          >
            <h2 className="RoomInformation-section-PriceList-1">{roomPrice} per night</h2>
            <h2 className="RoomInformation-section-PriceList-2">
              including Taxes & Fees
            </h2>
          </div>
          <div className="RoomInformation-section-Book-Container">
            <button className="RoomInformation-section-Book" onClick={() => window.location.href = bookingUrl}>Book Now</button>
          </div>
        </Row>
      </div>

      
        <Row>
          <Col span={24}>
           <CustomCarousel roomImages={room.images} />
          </Col>
        </Row>
        <div className="sec-01" ref={sec01Ref}>
        <Row>
          <Col span={16}>
            <div className="Add-card-position">
              <h2 className="RoomInformation-headings">Room Information</h2>
            </div>
            <div>
              <h2 className="RoomInformation-subHeadings">{room.title}</h2>
            </div>
            <div>
              <p className="RoomInformation-textP">
                This Lovely single basic room has just become available, equipped
                and fitted with everything necessary for a comfortable stay.
                Situated less than a 10 minute travel to Wembley stadium making it
                a perfect location for any tourist. A variety of transport links
                are in the area, making it easy to travel to any part of London.
              </p>
            </div>
            <div className="RoomInformation-main-container">
              <div className="RoomInformation-icon-container">
                <FontAwesomeIcon
                  icon={faBed}
                  size="m"
                  style={{ color: "#050505" }}
                />
                <span className="RoomInformation-iconText">{room.cardTitle}</span>
              </div>
              <div className="RoomInformation-icon-container">
                <FontAwesomeIcon
                  icon={faRestroom}
                  size="m"
                  style={{ color: "#050505" }}
                />
                <span className="RoomInformation-iconText">
                {bathroomType} Bathroom
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="sec-02" ref={sec02Ref}>
        <div>
          <h2 className="RoomInformation-headings">{showList ? "Facilities" : "Amenities"}</h2>
        </div>
        <div>
          <FacilitiesIconsContainer cards={cardsData} />
        </div>
        <div>
          {!showList && <button className='facilitiesshowbutton1' onClick={handleToggleList}><FontAwesomeIcon icon={faCircleChevronDown} size='3x' /></button>}
          {showList && (
            <button className='facilitieshidebutton1' onClick={handleHideList}>
              {!showList && <button className='facilitieshidebutton1' onClick={handleToggleList}><FontAwesomeIcon icon={faCircleChevronDown} size='3x' /></button>}
              {showList && (
                <button className='facilitieshidebutton1' onClick={handleHideList}>
                  <FontAwesomeIcon icon={faCircleChevronUp} size='3x' />
                </button>
              )}
            </button>
          )}
        </div>
      </div>
      {showList &&
        <div className="columnlist"><ColumnList /></div>}


        <div className="sec-03" ref={sec03Ref}><HouseRules/></div>
     
    </div>
  );
};

export default RoomInformation;
