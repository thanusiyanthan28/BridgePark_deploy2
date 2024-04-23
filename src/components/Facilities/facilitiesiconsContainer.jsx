import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faParking, faGlassMartiniAlt, faUsers, faUtensils, faSmokingBan, faBed } from '@fortawesome/free-solid-svg-icons';

const FacilitiesIconsContainer = ({ cards }) => {
  const icons = [faWifi, faParking, faUsers, faBed, faUtensils, faSmokingBan, faGlassMartiniAlt];

  return (
    <div className='facilitiescardscontainer'>
      {cards.map((card, index) => (
        <div key={card.id} className="facilitiescard">
          <div className='facilitiesiconcontainer'>
            <FontAwesomeIcon icon={icons[index]} size="4x" color="#618e95" style={{ imageRendering: 'pixelated' }} />
          </div>
          <div className="facilitiescardcontent">
            <h2>{card.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacilitiesIconsContainer;
