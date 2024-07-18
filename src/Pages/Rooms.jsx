import React from "react";
import RoomType from "../components/home/RoomType";
import "../css/RoomType/Room.css";
import GuestInfo from "../components/common/GuestInformation";
import bgimage from "../assets/bph-welcome.webp"

const Rooms = () => {
  return (
    <>
      {/* <Header2 /> */}
      <div className="RoomsTypeFirstAlignment">
      <img className='room-bgimage' src={bgimage}/>
        <RoomType  />
        
       
      </div>
    </>
  );
};

export default Rooms;
