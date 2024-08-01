import React, { useState } from "react";
import "../../css/RoomInformation/RoomInformation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faRestroom, faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import FacilitiesIconsContainer from "../Facilities/facilitiesiconsContainer";
import ColumnList from "../Facilities/facilitiesList";
import HouseRules from "../common/HomeRules";
import SiteCard from "../Sitecard/siteCard";
import CustomCarousel from "./new";

const RoomInformation = ({ room, bookingUrl, selectedRoomId, bathroomType, roomPrice }) => {
  const [showList, setShowList] = useState(false);
  const [showTab, setShowTab] = useState("info");

  const handleToggleList = () => setShowList(!showList);
  const handleTabChange = (tab) => setShowTab(tab);

  return (
    <div>
     
      <div className="tabs">
        <button 
          className={`tab-button ${showTab === 'info' ? 'active' : ''}`}
          onClick={() => handleTabChange('info')}
        >
          Room Information
        </button>
        <button 
          className={`tab-button ${showTab === 'policies' ? 'active' : ''}`}
          onClick={() => handleTabChange('policies')}
        >
          Policies
        </button>
      </div>

      {showTab === 'info' && (
        <div>
         
          <div className="site-card-room">
           <SiteCard selectedRoomId={selectedRoomId} roomPrice={parseFloat(roomPrice.replace('£', ''))} />
          </div>
          
          <div>
            <CustomCarousel roomImages={room.images} />
          </div>
          
          <div>
            <h2 className="RoomInformation-heading">Room Information</h2>
            <h2 className="RoomInformation-subHeadings">{room.title}</h2>
            <p className="RoomInformation-textP">
              This Lovely single basic room has just become available, equipped
              and fitted with everything necessary for a comfortable stay.
              Situated less than a 10 minute travel to Wembley stadium making it
              a perfect location for any tourist. A variety of transport links
              are in the area, making it easy to travel to any part of London.
            </p>
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
                <span className="RoomInformation-iconText">{bathroomType} Bathroom</span>
              </div>
            </div>
            <div>
              <h2 className="RoomInformation-headings">{showList ? "Facilities" : "Amenities"}</h2>
              <FacilitiesIconsContainer />
              {!showList && (
                <button className='facilitiesshowbutton1' onClick={handleToggleList}>
                  <FontAwesomeIcon icon={faCircleChevronDown} size='3x' />
                </button>
              )}
              {showList && (
                <button className='facilitieshidebutton1' onClick={handleToggleList}>
                  <FontAwesomeIcon icon={faCircleChevronUp} size='3x' />
                </button>
              )}
              {showList && (
                <div className="columnlist"><ColumnList /></div>
              )}
            </div>
          </div>
        </div>
      )}

      {showTab === 'policies' && (
        <div>
          <HouseRules />
        </div>
      )}
    </div>
  );
};

export default RoomInformation;
