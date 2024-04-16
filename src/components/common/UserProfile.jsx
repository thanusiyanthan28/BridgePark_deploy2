import React, { useState } from "react";
import "../../css/UserProfile.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaBell,
  FaCalendarAlt,
  FaQuestionCircle,
  FaSignOutAlt,
} from "react-icons/fa";

const UserProfile = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleClick = (number) => {
    if (number === 1) {
      console.log("pressed my booking");
    }
    if (number === 2) {
      console.log("pressed my Notifications");
    }
    if (number === 3) {
      console.log("pressed my Help");
    }
    if (number === 4) {
      console.log("pressed my Logout");
    }
  };

  return (
    <div className="user-profile">
      <div className="profile-picture" onClick={toggleDetails}>
        <img src={user.avatar} alt="User Avatar" />
      </div>
      {showDetails && (
        <div className="user-details">
          <ul>
            {/* Add more user information as needed */}
            <li onClick={() => handleClick(1)}>
              <FaCalendarAlt /> {/* Custom icon */}
              <span>My Bookings</span>
            </li>
            <li onClick={() => handleClick(2)}>
              <FaBell /> {/* Custom icon */}
              <span>Notifications</span>
            </li>
            <li onClick={() => handleClick(3)}>
              <FaQuestionCircle /> {/* Custom icon */}
              <span>Help</span>
            </li>
            <li onClick={() => handleClick(4)}>
              <FaSignOutAlt /> {/* Custom icon */}
              <span>Logout</span>
            </li>
          </ul>
          {/* Additional clickable elements */}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
