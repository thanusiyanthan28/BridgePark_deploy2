import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn,faPinterest } from '@fortawesome/free-brands-svg-icons';

import "../../css/Footer.css"; // CSS file for styling
import logo from "../../assets/images/HotelLogo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="footer-contact">
        <p><b>Contact Us</b></p>
        <ul className="contact-links">
          <li><a href="https://www.google.com/maps?ll=51.541287,-0.261686&z=17&t=m&hl=en&gl=LK&mapclient=embed&cid=11362073612214208868" target='_blank'><span className='contact-icons'><FontAwesomeIcon icon={faMapMarkerAlt} /></span><span className='contact-lable'>Sportsman Suite Bridgepark Hotel, 16 Hillside,<br/> London NW10 8BN,United Kingdom </span></a></li>
          <li><a href="#about"><span className='contact-icons'><FontAwesomeIcon icon={faPhone} /></span><span className='contact-lable'>+44 208961 1260</span></a></li>
          <li><a href="https://bridgeparkhotel@gmail.com" target='_blank'><span span className='contact-icons'><FontAwesomeIcon icon={faEnvelope} /></span><span className='contact-lable'>bridgeparkhotel@gmail.com</span></a></li>
        </ul>
      </div>

      <div className="footer-quick-links">       
        <div className='footer-quick-menu'>
          <p><b>Quick Links</b></p>
          <ul className="quick-links">
          <li><a href="/rooms" target='_blank'> <span className="quick-link-label">Rooms</span></a></li>
          <li><a href="https://direct-book.com/properties/bridgeparkdirect?" target='_blank'> <span className="quick-link-label">Group booking</span></a></li>
          <li><a href="/HomeRules"> <span className="quick-link-label" target='_blank'>Booking Policy</span></a></li>
          <li><a href="/"> <span className="quick-link-label" target='_blank'>Terms & Condition</span></a></li>
          <li><a href="/"> <span className="quick-link-label" target='_blank'>Gust Info</span></a></li>
          </ul>
        </div>

        <div className='quick-social-media'>
        <p><b>Follow Us</b></p>
          <ul className="social-links">
          <li><a href="https://www.instagram.com/bridgeparkhotellondon/" target='_blank'><span><FontAwesomeIcon icon={faInstagram} /></span><span className="social-label">Instagram</span></a></li>
          <li><a href="https://www.facebook.com/bridgeparkhotellondon/" target='_blank'><span><FontAwesomeIcon icon={faFacebook} /></span><span className="social-label">Facebook</span></a></li>
          <li><a href="https://twitter.com/bridgeparkuk" target='_blank'><span><FontAwesomeIcon icon={faTwitter} /></span><span className="social-label">Twitter</span></a></li>
          <li><a href="https://www.linkedin.com/company/bridgeparkhotellondon" target='_blank'><span><FontAwesomeIcon icon={faLinkedinIn} /></span><span className="social-label">Linkedin</span></a></li>
          <li><a href="https://www.pinterest.com/bridgeparkhotellondon/" target='_blank'><span><FontAwesomeIcon icon={faPinterest} /></span><span className="social-label">Pinterest</span></a></li>
        </ul>
        </div>
        </div>
        
     <div className='footer-copyright'>  <p>Copyright &copy; {currentYear} Bridge Park Hotel. All Rights Reserved</p></div>
    </footer>
  
  );
};

export default Footer;
