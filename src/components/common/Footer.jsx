import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import "../../css/Footer.css"; // CSS file for styling
import logo from "../../assets/images/HotelLogo.png";

const Footer = () => {
  return (
    
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="footer-contact">
        <p><b>Contact Us</b></p>
        <ul className="contact-links">
          <li><a href="#address"><span className='contact-icons'><FontAwesomeIcon icon={faMapMarkerAlt} /></span><span className='contact-lable'>Sportsman Suite Bridgepark Hotel, 16 Hillside,<br/> London NW10 8BN,United Kingdom </span></a></li>
          <li><a href="#about"><span className='contact-icons'><FontAwesomeIcon icon={faPhone} /></span><span className='contact-lable'>+44 208961 1260</span></a></li>
          <li><a href="#contact"><span span className='contact-icons'><FontAwesomeIcon icon={faEnvelope} /></span><span className='contact-lable'>bridgeparkhotel@gmail.com</span></a></li>
        </ul>
      </div>

      <div className="footer-quick-links">       
        <div className='footer-quick-menu'>
          <p><b>Quick Links</b></p>
          <ul className="quick-links">
          <li><a href="#rooms"> <span className="quick-link-label">Rooms</span></a></li>
          <li><a href="#group booking"> <span className="quick-link-label">Group booking</span></a></li>
          <li><a href="#booking policy"> <span className="quick-link-label">Booking Policy</span></a></li>
          <li><a href="#terms and condition"> <span className="quick-link-label">Terms & Condition</span></a></li>
          </ul>
        </div>

        <div className='quick-social-media'>
        <p><b>Follow Us</b></p>
          <ul className="social-links">
          <li><a href="https://instagram.com"><span><FontAwesomeIcon icon={faInstagram} /></span><span className="social-label">Instagram</span></a></li>
          <li><a href="https://facebook.com"><span><FontAwesomeIcon icon={faFacebook} /></span><span className="social-label">Facebook</span></a></li>
          <li><a href="https://twitter.com"><span><FontAwesomeIcon icon={faTwitter} /></span><span className="social-label">Twitter</span></a></li>
          <li><a href="https://instagram.com"><span><FontAwesomeIcon icon={faYoutube} /></span><span className="social-label">Youtube</span></a></li>
        </ul>
        </div>
        </div>
        
     <div className='footer-copyright'> <p>Copyright &copy; 2023 Bridge Park Hotel. All Right Reserved</p></div>
    </footer>
  
  );
};

export default Footer;
