import React, { useState } from 'react';
import '../components/Facilities/facilities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ColumnList from '../components/Facilities/facilitiesList'
import { faWifi, faParking, faGlassMartiniAlt, faUtensils, faTv, faBed, faSmokingBan, faUsers } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, icon }) => (
  <div className="facilitiescard">
    <div className='facilitiesiconcontainer'>
      <FontAwesomeIcon icon={icon} size="4x" color="#618e95" style={{ imageRendering: 'pixelated' }} />
    </div>
    <div className="facilitiescardcontent">
      <h2>{title}</h2>
    </div>
  </div>
);

const CardContainer = ({ cards, icons }) => (
  <div className='facilitiescardscontainer'>
    {cards.map((card, index) => (
      <Card
        key={card.id}
        title={card.title}
        icon={icons[index]}
      />
    ))}
  </div>
);

const Facilities = () => {
  const [showList, setShowList] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const cardsData = [
    { id: 1, title: 'Free WiFi' },
    { id: 2, title: 'Free Parking' },
    { id: 3, title: 'Family Rooms' },
    { id: 4, title: 'Room Service' },
    { id: 5, title: 'Restaurant' },
    { id: 6, title: 'Non-Smoking Rooms' },
    { id: 7, title: 'Bar' },
  ];

  const icons = [faWifi, faParking, faUsers, faTv, faBed, faSmokingBan, faGlassMartiniAlt];

  const handleClick = () => {
    setShowList(true);
    setShowButton(false);
  }

  return (
    <body className='facilitiesbody'>
    <div className='facilitiesmain'>
      <div>
        <h1 className='facilitieshead'>FACILITIES</h1>
      </div>

      <div>
        <p className='facilitiespara'>
          Notice of a bid advertisement shall be published in at
          least one local newspaper and in one trade publication a
          t least 30 days in advance of sale. If applicable, the notice must identify t
          he reservation within which the tracts to be leased are found.
        </p>
      </div>

      <div className="facilitiescontainer">
        <CardContainer cards={cardsData} icons={icons} />
      </div>

      {showButton && <div>
        <button className='facilitiesbutton1' onClick={handleClick}> SEE ALL</button>
      </div>}

      {showList &&  <ColumnList />}
     
    </div>
    </body>
  );
};

export default Facilities;
