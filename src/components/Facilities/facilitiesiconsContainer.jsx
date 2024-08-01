import React from 'react';
import './facilitiesiconsContainer.css';

import nonSmokingGif from '../../assets/Facilities of BPH/non_smoking_rooms.png';
import roomServiceGif from '../../assets/Facilities of BPH/room_service.png';
import wifiGif from '../../assets/Facilities of BPH/wifi.png';
import parkingGif from '../../assets/Facilities of BPH/parking.png';
import familyRoomsGif from '../../assets/Facilities of BPH/family.png';
import frontDeskGif from '../../assets/Facilities of BPH/hour.png';
import barGif from '../../assets/Facilities of BPH/bar.png';
import heatingGif from '../../assets/Facilities of BPH/heating.png';
import housekeepingGif from '../../assets/Facilities of BPH/Housekeeping.png';
import breakfastGif from '../../assets/Facilities of BPH/breakfast.png';

const FacilitiesIconsContainer = () => {
  const cardsData = [
    { id: 1, title: 'Non-smoking rooms', icon: nonSmokingGif },
    // { id: 2, title: 'Room service', icon: roomServiceGif },
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
    <div className="facilities-container">
      {cardsData.map((card) => (
        <div key={card.id} className="facility-card">
          <img src={card.icon} alt={card.title} className="facility-icon" />
          <span className="facility-title">{card.title}</span>
        </div>
      ))}
    </div>
  );
};

export default FacilitiesIconsContainer;
