import React, { useState } from 'react';
import '../components/Facilities/facilities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FacilitiesIconsContainer from '../components/Facilities/facilitiesiconsContainer';
import ColumnList from '../components/Facilities/facilitiesList';
import { faWifi, faParking, faGlassMartiniAlt, faCircleChevronDown, faTv, faBed, faSmokingBan, faUsers, faUtensils } from '@fortawesome/free-solid-svg-icons';

const Facilities = () => {
  const [showList, setShowList] = useState(false);

  const cardsData = [
    { id: 1, title: 'Free WiFi' },
    { id: 2, title: 'Free Parking' },
    { id: 3, title: 'Family Rooms' },
    { id: 4, title: 'Room Service' },
    { id: 5, title: 'Restaurant' },
    { id: 6, title: 'Non-Smoking Rooms' },
    { id: 7, title: 'Bar' },
  ];

  const icons = [faWifi, faParking, faUsers, faBed, faUtensils, faSmokingBan, faGlassMartiniAlt];

  const handleToggleList = () => {
    setShowList(!showList);
  };

  const handleHideList = () => {
    setShowList(false);
  };

  return (
    <body className='facilitiesbody'>
      <div className='facilitiesmain'>
        <div>
          <h1 className='facilitieshead'>FACILITIES</h1>
        </div>

        <div>
          <p className='facilitiespara'>
          Originally a Grade ii listed building, Bridge Park Hotel is the ideal
           place to stay whether you are visiting Wembley or simply looking for 
          accommodation to explore the sites of London. 
          Just a short distance from Wembley Stadium.
          </p>
        </div>

        <div className="facilitiescontainer">
          <FacilitiesIconsContainer cards={cardsData} />
        </div>
        <div>
          {!showList && <button className='facilitiesbutton1' onClick={handleToggleList}>SEE ALL</button>}
          {showList && (
            <button className='facilitieshidebutton' onClick={handleHideList}>
              <FontAwesomeIcon icon={faCircleChevronDown} size='4x' />
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
