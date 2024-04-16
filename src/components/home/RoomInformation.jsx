import React from "react";
import img1 from "../../assets/images/Tripleroomwithsharedbathroom.jpg";
import "../../css/RoomInformation/RoomInformation.css";

const RoomInformation = () => {
  return (
    <div>
      <img src={img1} className="RoomInformationCardImage" alt="Room" />
    </div>
  );
};

export default RoomInformation;
