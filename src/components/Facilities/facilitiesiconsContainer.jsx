import React from 'react';
import './facilitiesiconsContainer.css';

import nonSmokingGif from '../../assets/Facilities of BPH/Non-smoking rooms.gif';
import roomServiceGif from '../../assets/Facilities of BPH/Room service.gif';
import wifiGif from '../../assets/Facilities of BPH/Free WiFi.gif';
import parkingGif from '../../assets/Facilities of BPH/Free on-site parking.gif';
import familyRoomsGif from '../../assets/Facilities of BPH/Rooms.gif';
import frontDeskGif from '../../assets/Facilities of BPH/Front Desk Services.gif';
import barGif from '../../assets/Facilities of BPH/champagne.gif';
import heatingGif from '../../assets/Facilities of BPH/heating.gif';
import housekeepingGif from '../../assets/Facilities of BPH/Cleaning Services.gif';
import breakfastGif from '../../assets/Facilities of BPH/Breakfast.gif';

const FacilitiesIconsContainer = () => {
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

  return (
    <div className="facilitiescontainer1">
      <div className="facilitiesrow1">
        {cardsData.slice(0, 5).map((card) => (
          <div key={card.id} className="facilitiescard1">
            <div className='facilitiesiconcontainer1'>
              <img src={card.icon} alt={card.title} style={{ width: '54px', height: '54px', objectFit: 'cover' }}/>
            </div>
            <div className="facilitiescardcontent1">
              <h2>{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="facilitiesrow1">
        {cardsData.slice(5, 10).map((card) => (
          <div key={card.id} className="facilitiescard1">
            <div className='facilitiesiconcontainer1'>
              <img src={card.icon} alt={card.title} style={{ width: '54px', height: '54px', objectFit: 'cover' }}/>
            </div>
            <div className="facilitiescardcontent1">
              <h2>{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilitiesIconsContainer;
