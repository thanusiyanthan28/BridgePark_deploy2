import React from "react";
import img1 from "../../assets/images/Tripleroomwithsharedbathroom.jpg";
import { Row, Col } from "antd";
import "../../css/RoomInformation/RoomInformation.css";
import Button from "../common/Button";

const RoomInformation = () => {
  const handleSectionClick = (sectionName) => {
    console.log(`Clicked on ${sectionName}`);
    // You can add your logic here for handling the click event
  };

  const handleClick = () => {
    console.log("buttons clicked");
  };
  return (
    <div>
      <Row className="RoomInformation-section-All">
        <div
          className="RoomInformation-section"
          onClick={() => handleSectionClick("Room Information")}
        >
          <h2>Room Information</h2>
        </div>

        <div
          className="RoomInformation-section"
          onClick={() => handleSectionClick("Room Information")}
        >
          <h2>Facilities</h2>
        </div>

        <div
          className="RoomInformation-section"
          onClick={() => handleSectionClick("Room Information")}
        >
          <h2>Policies</h2>
        </div>
        <div
          className="RoomInformation-section-PriceList"
          onClick={() => handleSectionClick("Room Information")}
        >
          <h2 className="RoomInformation-section-PriceList-1">1200 pernight</h2>
          <h2 className="RoomInformation-section-PriceList-2">
            including Taxes & Fees
          </h2>
        </div>
        <div className="RoomInformation-section-Book-Container">
          {" "}
          <button className="RoomInformation-section-Book">BookNow</button>
        </div>
      </Row>

      <Row>
        <Col span={24}>
          <img src={img1} className="RoomInformationCardImage" alt="Room" />
        </Col>
      </Row>
      <Row>
        <Col span={16}>
          <div>
            <h2>Room Information</h2>
          </div>
          <div>
            <h2>Single Room Basic</h2>
          </div>
          <div>
            This Lovely single basic room has just become available, equipped
            and fitted with everything neccessary for a comfortable stay.
            Situated less than a 10 minute travel to wembley stadium making it a
            perfect location for any tourist. A variety of transport links are
            in the area, making it easy to travel to any part of London.
          </div>
        </Col>
        <Col span={8}>gh</Col>
      </Row>
    </div>
  );
};

export default RoomInformation;
