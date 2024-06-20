import React from 'react';
import { useState } from 'react'; // Import useState
import '../css/facilities.css';
import ColumnList from '../components/Facilities/facilitiesList';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import nonSmokingGif from '../assets/Facilities of BPH/Non-smoking rooms.gif';
import roomServiceGif from '../assets/Facilities of BPH/Room service.gif';
import wifiGif from '../assets/Facilities of BPH/Free WiFi.gif';
import parkingGif from '../assets/Facilities of BPH/Free on-site parking.gif';
import familyRoomsGif from '../assets/Facilities of BPH/Rooms.gif';
import frontDeskGif from '../assets/Facilities of BPH/Front Desk Services.gif';
import barGif from '../assets/Facilities of BPH/champagne.gif';
import heatingGif from '../assets/Facilities of BPH/heating.gif';
import housekeepingGif from '../assets/Facilities of BPH/Cleaning Services.gif';
import breakfastGif from '../assets/Facilities of BPH/Breakfast.gif';
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
      <img className='about-bgimage' src={bgimage}/>
      <div>
        <div>
          {/* <h1 className='facilitieshead'>FACILITIES</h1> */}
          <div className='location-title'>FACILITIES</div>
        </div>

        <div>
          <p className='facilities-sub-content'>
            Originally a Grade ii listed building, Bridge Park Hotel is the ideal
            place to stay whether you are visiting Wembley or simply looking for
            accommodation to explore the sites of London.
            Just a short distance from Wembley Stadium.
          </p>
        </div>

      

        <div className="facilitiescontainer">
          {cardsData.map((card) => (
            <div key={card.id} className="facilitiescard">
              <div className='facilitiesiconcontainer'>
                <img src={card.icon} alt={card.title} style={{ width: '54px', height: '54px', objectFit: 'cover' }}/>
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
              <span>Hide All Ammenities</span>
            </button>
          )}
        </div>
        
        {showList && <ColumnList />}
      </div>
    </body>
  );
};

export default Facilities;
