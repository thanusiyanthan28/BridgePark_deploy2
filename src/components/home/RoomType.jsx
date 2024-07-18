import React, { useState, useEffect } from "react";
import HotelRoomTypeCard from "../common/HotelRoomTypeCard";
import img1 from "../../assets/RoomTypes/TwinRoom/TwinRoom1.webp";
import img2 from "../../assets/RoomTypes/TripleEnsuite/TripleRoomEnsuite4.webp";
import SiteCard from "../Sitecard/siteCard";
import Card from "../common/Card";
import "../../css/RoomTypes.css";

const RoomType = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="RoomType-containor">
      <div className="RoomType-CardContainor">
        {isMobile ? (
          <div className="RoomType-sitecard">
            <SiteCard />
          </div>
        ) : null}
        {!isMobile ? (
          <div className="RoomType-card">
            <Card title="Card Title 2" description="Description for Card 2" />
          </div>
        ) : null}
      </div>
      <div className="RoomType-ContaineraboutContainer">
        <div className="RoomType-TextWrapper">
          {/* <h1 className="RoomType-header">OUR ROOMS</h1> */}
          <div className='location-title'>OUR ROOMS</div>
        </div>
        <div className="RoomType-sub-content">
          <p className="RoomType-p">
            Originally a Grade ii listed building, Bridge Park Hotel is the
            ideal place to stay whether you are visiting Wembley or simply
            looking for accommodation to explore the sites of London. Just a
            short distance from Wembley Stadium.
          </p>
        </div>
      </div>
      <div className="RoomType-subHead">
        {/* <h1 className="RoomType-subHading">ROOM TYPES</h1> */}
        <div className='location-title'>ROOM TYPES</div>
      </div>
      <div className="RoomType-typecontainor">
        <HotelRoomTypeCard
          imageSource={img1}
          title="Single Room"
          description="All the rooms “Basic” are with shared bathroom facilities"
          guests={2}
          status="Available"
          price="£71.76"
          buttonText="Book Now"
          cardtitle="Basic Rooms"
          linkTo="/BasicRoom"
        />
        <HotelRoomTypeCard
          imageSource={img2}
          title="Single Room"
          description="“En-suite” rooms are with Private bathroom facilities"
          guests={2}
          status="Available"
          price="£80.95"
          buttonText="Book Now"
          cardtitle="Ensuite Rooms"
          linkTo="/EnsuiteRoom"
        />
      </div>
    </div>
  );
};

export default RoomType;
