import React, { useState, useRef } from "react";
import img1 from "../../assets/images/Tripleroomwithsharedbathroom.jpg";
import { Row, Col } from "antd";
import "../../css/RoomInformation/RoomInformation.css";
import Button from "../common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faRestroom, faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import FacilitiesIconsContainer from "../Facilities/facilitiesiconsContainer";
import ColumnList from "../Facilities/facilitiesList";

const RoomInformation = () => {
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
      <div className="The-header">
        <Row className="RoomInformation-section-All">
          <div
            className={`RoomInformation-section ${activeTab === "Room Information" ? "active" : ""}`}
            onClick={() => handleTabClick("Room Information")}
          >
            <h2 className="RoomInformation-heading">Room Information</h2>
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
            <h2 className="RoomInformation-section-PriceList-1">1200 per night</h2>
            <h2 className="RoomInformation-section-PriceList-2">
              including Taxes & Fees
            </h2>
          </div>
          <div className="RoomInformation-section-Book-Container">
            <button className="RoomInformation-section-Book" onClick={() => handleTabClick("Room Information")}>Book Now</button>
          </div>
        </Row>
      </div>

      <div className="sec-01" ref={sec01Ref}>
        <Row>
          <Col span={24}>
            <img src={img1} className="RoomInformationCardImage" alt="Room" />
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <div>
              <h2 className="RoomInformation-headings">Room Information</h2>
            </div>
            <div>
              <h2 className="RoomInformation-subHeadings">Single Room Basic</h2>
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
                <span className="RoomInformation-iconText">1 * Single Bed</span>
              </div>
              <div className="RoomInformation-icon-container">
                <FontAwesomeIcon
                  icon={faRestroom}
                  size="m"
                  style={{ color: "#050505" }}
                />
                <span className="RoomInformation-iconText">
                  Shared Rest rooms
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>

  <div className="sec-02" ref={sec02Ref}>
  <div>
    <h2 className="RoomInformation-headings">{showList ? "Facilities" : "Ammenities"}</h2>
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
  



<div className="sec-03" ref={sec03Ref}>
        
          <h2 className="RoomInformation-headings">Read our Policies</h2>
        </div>
        <div>
          <h2 className="RoomInformation-subHeadings">Check In</h2>
        </div>
        <div className="time-zone">from 14:00 hours</div>
        <div>
          <h2 className="RoomInformation-subHeadings">Check Out</h2>
        </div>
        <div className="time-zone">Untill 11:00 hours</div>
        <div>
          <h2 className="RoomInformation-subHeadings">
            Cancellation/prepayment
          </h2>
        </div>
        <div>
          <p className="RoomInformation-text">
            Cancellation and prepayment policies vary according to
            accommodation type. Please check the condition on your booking
            confirmation.
          </p>
        </div>
        <div>
          <h2 className="RoomInformation-subHeadings">
            Refundable damage deposit
          </h2>
        </div>
        <div>
          <p className="RoomInformation-text">
            A damage deposit of CSP 100 may be required on arrival. This will be
            collected by credit card. You should be reimbursed on check-out.<br></br>
            Your deposit will be refunded in full via credit card, subject to an
            inspection of the property.
          </p>
        </div>
        <div>
          <h2 className="RoomInformation-subHeadings">Child policies</h2>
        </div>
        <div>
          <p className="RoomInformation-text">
            Children of any age are welcome accompanied by an adult. Children
            aged 13 years and above are considered adults at this property.
          </p>
        </div>
        <div>
          <h2 className="RoomInformation-subHeadings">
            Cot and extra bed policies
          </h2>
        </div>
        <div>
          <p className="RoomInformation-text">
            Cots are available on request. Extra beds are not available at this
            property.
          </p>
        </div>
        <div>
          <h2 className="RoomInformation-subHeadings">Age restriction</h2>
        </div>
        <div>
          <p className="RoomInformation-text">
            The minimum age for check-in is 18.
          </p>
        </div>
        <div>
          <h2 className="RoomInformation-subHeadings">Pets</h2>
        </div>
        <div>
          <p className="RoomInformation-text">Pets are not allowed.</p>
        </div>
        <div>
          <h2 className="RoomInformation-subHeadings">Groups</h2>
        </div>
        <div>
          <p className="RoomInformation-text">
            When booking more than 5 rooms, different policies and additional
            supplements may apply.
          </p>
        </div>
    </div>
  );
};

export default RoomInformation;
