// src/TopBar.js
import React from "react";
import "../../css/TopBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="overlay-topbar">
        <div className="topbar-sub">
          <div className="topbar-phone-email">
            <div className="topbar-mobile">
              <span>
                <FontAwesomeIcon icon={faMobileScreen} />
              </span>
              <a href="tel:+4402089611260"><span>(+44) 020 8961 1260</span></a> 
            </div>
            <div className="topbar-email">
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <a href="bridgeparkhotel@gmail.com"><span >bridgeparkhotel@gmail.com</span></a>
            </div>
          </div>
          <div className="topbar-location">
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
              
              <span>
              <a href="https://www.google.com/maps?ll=51.541287,-0.261686&z=17&t=m&hl=en&gl=LK&mapclient=embed&cid=11362073612214208868" target='_blank' >
              Bridge Park Hotel, 16 Hillside,
              <br />
              London, NW10 8BN, United Kingdom
              </a>
            </span>
           
            </div>
          </div>
          <div className="topbar-icons">
            <span>
              <a href="https://www.instagram.com/bridgeparkhotellondon/">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </span>
            <span>
              <a href="https://www.facebook.com/bridgeparkhotellondon/">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </span>
            <span>
              <a href="https://twitter.com/bridgeparkuk">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/company/bridgeparkhotellondon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </span>
            <span>
              <a href="https://www.pinterest.com/bridgeparkhotellondon/">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
