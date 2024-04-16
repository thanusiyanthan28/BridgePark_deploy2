import React from 'react';
import './facilities.css';
import { FaBath, FaBed, FaTree, FaUtensils,FaMicrowave, FaFootballBall, FaCouch, FaTv, FaWineGlassAlt, FaWifi, FaParking, FaHandHoldingHeart,FaHome, FaUserShield, FaInfoCircle, FaLanguage,FaGlobe } from 'react-icons/fa';

const ColumnList = () => {
  return (
    <div >
    <div className="fscolumnlist">
      

      <div className="fscolumn">
        
        <h2 className='fscolumnh2'><FaBath /> Bathroom</h2>
        <ul>
          <li>Toilet Paper </li>
          <li>Towels</li>
          <li>Towels/sheets</li>
          <li>Hair Dryer</li>
        </ul>

        <h2 className='fscolumnh2'><FaBed /> Bedroom</h2>
        <ul>
          <li>Linen</li>
          <li>List item 2</li>
        </ul>
        <h2 className='fscolumnh2'><FaTree /> Outdoors</h2>
        <ul>
          <li>Outdoor Furniture</li>
          <li>Terrace</li>
        </ul>
        <h2 className='fscolumnh2'><FaUtensils /> Kitchen</h2>
        <ul>
          <li>Electric Kettle</li>
          <li>Refridgerator</li>
        </ul>
        <h2 className='fscolumnh2'><FaFootballBall /> Activities</h2>
        <ul>
          <li>Live Sports Events</li>
        </ul>
        <h2 className='fscolumnh2'><FaCouch />Livining Area</h2>
        <ul>
          <li>Desk</li>
        </ul>
        <h2 className='fscolumnh2'><FaTv />Media & Technology</h2>
        <ul>
          <li>Flat Screen TV</li>
          <li>Telephone</li>
          <li>TV</li>
        </ul>
      </div>
      <div className="fscolumn">
        <h2 className='fscolumnh2'><FaWineGlassAlt /> Food & Drink</h2>
        <ul>
          <li>Coffee house in site</li>
          <li>Wines</li>
          <li>Kid-friendly buffet</li>
          <li>Kid Meals</li>
          <li>Snack bar</li>
          <li>Bar</li>
          <li>Restaurant</li>
        </ul>
        <h2 className='fscolumnh2'><FaWifi /> Internet</h2>
        <ul>
          <li>Free Wifi it available in all areas</li>
        </ul>
        <h2 className='fscolumnh2'><FaParking /> Parking</h2>
        <ul>
          <li>Free Public parking</li>
        </ul>
        <h2 className='fscolumnh2'><FaGlobe/> Services</h2>
        <ul>
          <li>Daily Housekeeping</li>
          <li>Concierge Service</li>
          <li>Lagguage Storage</li>
          <li>Wake-up service</li>
          <li>Fax/Photocopying</li>
          <li>Express check-in/check-out</li>
          <li>24 houres fruit desk</li>
          <li>Room Services</li>
        </ul>
        <h2 className='fscolumnh2'><FaHandHoldingHeart /> Reception Services</h2>
        <ul>
          <li>List item 1</li>
        </ul>
      </div>
      <div className="fscolumn">
        <h2 className='fscolumnh2'><FaUserShield /> Safety & Security</h2>
        <ul>
          <li>Fire Exiting</li>
          <li>CCTV outside property</li>
          <li>CCTV in common areas</li>
          <li>smoke alarms</li>
          <li>Key access</li>
          <li>Safety default box</li>
        </ul>
        <h2 className='fscolumnh2'><FaHome /> General</h2>
        <ul>
          <li>Designated working area</li>
          <li>Non-</li>
          <li>List item 3</li>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
        <h2 className='fscolumnh2'><FaGlobe /> Languages spoken</h2>
        <ul>
          <li>English</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default ColumnList;
