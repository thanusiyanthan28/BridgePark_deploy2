import React from 'react';
import { useState } from 'react'; // Import useState
import '../css/facilities.css';
import ColumnList from '../components/Facilities/facilitiesList';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import nonSmokingGif from '../assets/Facilities of BPH/non_smoking_rooms.png';
import roomServiceGif from '../assets/Facilities of BPH/room_service.png';
import wifiGif from '../assets/Facilities of BPH/wifi.png';
import parkingGif from '../assets/Facilities of BPH/parking.png';
import familyRoomsGif from '../assets/Facilities of BPH/family.png';
import frontDeskGif from '../assets/Facilities of BPH/hour.png';
import barGif from '../assets/Facilities of BPH/bar.png';
import heatingGif from '../assets/Facilities of BPH/heating.png';
import housekeepingGif from '../assets/Facilities of BPH/Housekeeping.png';
import breakfastGif from '../assets/Facilities of BPH/breakfast.png';
import bgimage from '../assets/bph-welcome.png'

const Facilities = () => {
  const [showList, setShowList] = useState(false);

  const cardsData = [
    { id: 1, title: 'Non-smoking rooms', icon: nonSmokingGif },
    { id: 2, title: 'Room service', icon: roomServiceGif },
    { id: 3, title: 'Free WiFi', icon: wifiGif },
    { id: 4, title: 'Free parking', icon: parkingGif },
    { id: 5, title: 'Family rooms', icon: familyRoomsGif },
    { id: 6, title: '24-hour front desk', icon: frontDeskGif },
    { id: 7, title: 'Bar', icon: barGif },
    { id: 8, title: 'Heating', icon: heatingGif },
    { id: 9, title: 'Daily housekeeping', icon: housekeepingGif },
    { id: 10, title: 'Breakfast', icon: breakfastGif },
  ];

  const handleToggleList = () => {
    setShowList(!showList);
  };

  const handleHideList = () => {
    setShowList(false);
  };

  return (
    <body className='facilities-background'>
      {/* <img className='about-bgimage' src={bgimage}/> */}
      <div>
        <div>
          {/* <h1 className='facilitieshead'>FACILITIES</h1> */}
          <div className='location-title'>FACILITIES</div>
        </div>

        <div>
          <p className='facilities-sub-content'>
            Originally a Grade II-listed building, Bridge Park Hotel is the ideal
            place to stay whether you are visiting Wembley or simply looking for
            accommodation to explore the sites of London.
            Just a short distance from Wembley Stadium.
          </p>
        </div>

      

        <div className="facilitiescontainer">
          {cardsData.map((card) => (
            <div key={card.id} className="facilitiescard">
              <div className='facilitiesiconcontainer'>
                <img src={card.icon} alt={card.title} style={{ width: '44px', height: '44px', objectFit: 'cover' }}/>
              </div>
              <div className="facilitiescardcontent">
                <>{card.title}</>
              </div>
            </div>
          ))}
        </div>

        <div className='fs-button'>
          {!showList && <button className='facilitiesbutton1' onClick={handleToggleList}>SEE ALL</button>}
          {showList && (
            <button className='facilitieshidebutton' onClick={handleHideList}>
              <FontAwesomeIcon icon={faCircleChevronUp} size='3x' />
              <span>Hide All Amenities</span>
            </button>
          )}
        </div>
        
        {showList && <ColumnList />}
      </div>
    </body>
  );
};

export default Facilities;
