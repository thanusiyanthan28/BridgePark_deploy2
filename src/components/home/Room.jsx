import React from "react";
import HotelRoomCard from "../../components/common/HotelRoomCard";
import img1 from "../../assets/images/Loungebar 1.jpg";
import { Row, Col } from "antd";
import "../../css/Room.css";

const Room = () => {
  const handleViewMoreClick = () => {
    console.log("View More clicked");
  };
  return (
    <div>
      <div className="aboutContainer">
        <div className="aboutTextWrapper">
          <h1 className="aboutH1">OUR ROOMS</h1>
          <div className="paragraphContainer">
            <p>
              Originally a Grade ii listed building, Bridge Park Hotel is the
              ideal place to stay whether you are visiting Wembley or simply
              looking for accommodation to explore the sites of London. Just a
              short distance from Wembley Stadium
            </p>
          </div>
        </div>
      </div>
      <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="Single Room"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="1x single bed"
            onViewMoreClick={handleViewMoreClick}
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="Luxury Room"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200 per night"
            buttonText="Book Now"
            cardtitle="1x single bed"
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="Luxury Room"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200 per night"
            buttonText="Book Now"
            cardtitle="1x single bed"
          />{" "}
        </Col>
      </Row>
      <Row className="hotelRoomMainRow">
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="Single Room"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200"
            buttonText="Book Now"
            cardtitle="1x single bed"
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="Luxury Room"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200 per night"
            buttonText="Book Now"
            cardtitle="1x single bed"
          />{" "}
        </Col>
        <Col span={8}>
          {" "}
          <HotelRoomCard
            imageSource={img1}
            title="Luxury Room"
            description="Spacious room with a breathtaking view"
            guests={2}
            status="Available"
            price="$200 per night"
            buttonText="Book Now"
            cardtitle="1x single bed"
          />{" "}
        </Col>
      </Row>
    </div>
  );
};

export default Room;
