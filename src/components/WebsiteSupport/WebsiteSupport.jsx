import React, { useState, useEffect } from "react";
import "./WebsiteSupport.css";
import Card from "../common/Card";
import SiteCard from "../Sitecard/siteCard";
import { useNavigate } from "react-router-dom";

const WebsiteSupport = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="WebsiteSupport">
        <div className="WebsiteSupport-main">
          {isMobile ? (
            <div className="WebsiteSupport-sitecard">
              <SiteCard />
            </div>
          ) : (
            <div className="WebsiteSupport-card">
              <Card />
            </div>
          )}
        </div>
      </div>
      <div>
        <div className="WebsiteSupport-title">Website Support</div>
        <div className="WebsiteSupport-containor">
          <div className="WebsiteSupport-content">
            <h1 className="WebsiteSupport-sub-title">
              Accommodation information, pricing, availability and bookings:
            </h1>
            <div className="WebsiteSupport-sub-content">
              
                <a href="https://direct-book.com/properties/bridgeparkdirect"> We offer a quick and easy online booking service directly from
                our website for finding the lowest rates available, checking
                availability, and reserving your room. It only takes 3 clicks to
                book your room via our fast and secure booking service. You will
                receive instant confirmation.
                </a>
              
              <p>
                If you have already made a reservation through our website, you
                can view and manage your booking directly from your email
                confirmation, simply click on the 'manage my booking' link.
              </p>
            </div>
            <div className="WebsiteSupport-sub-content">
              <p>Quick Tips:</p>
              
                <a href="/">For prices, availability and discounts, click here</a>
              
              <p>
                For accommodation information please visit the &nbsp;
               <a href="/rooms">rooms</a>
                  
               &nbsp;and&nbsp;
                <a href="/Facilities">facility pages</a>
                  
                .
              </p>
              <p>If you have already booked:</p>
            </div>
            <h1 className="WebsiteSupport-sub-title">To Cancel:</h1>
            <div className="WebsiteSupport-sub-content">
              <p>
                Click &nbsp;'
                <a href="/SignIn">Sign in</a>
                  
                
                 ' above or 'manage my booking' from your email confirmation and
                'cancel'.
              </p>
            </div>
            <h1 className="WebsiteSupport-sub-title">To Modify:</h1>
            <div className="WebsiteSupport-sub-content">
              <p>
                Adding nights or rooms: Please make an &nbsp;
                <a href="/room-card">
                additional reservation (please mention 'extension to TSNxx' in
                  the 'special request')
                </a>
                  
                .
              </p>
              <p>
                Reducing nights or rooms: If you have booked via our website,
                please check the cancellation policy in your booking
                confirmation email and then reply to the email with a
                modification request.
              </p>
            </div>
            <h1 className="WebsiteSupport-sub-title">
              If you have booked through a different website please call
              reception on Tel: +44 (0)20 8961 1260
            </h1>
            <h1 className="WebsiteSupport-sub-title">For Directions:</h1>
            
            <div className="WebsiteSupport-sub-content">
              <p>
                Click&nbsp;'
                <a href="/location">Directions
                  </a>
                ' above for directions from the tube and a map. <br />
                For further enquiries, feel free to check the information on our
                website or use the form below. Usage of our website and forms
                are covered by our &nbsp;
                
                <a href="/privacy">privacy policy
                  </a>
                .
              </p>
            </div>
            <h1 className="WebsiteSupport-sub-title">Customer advice</h1>
            <h1 className="WebsiteSupport-sub-title">
              Reception can be reached on Tel: +44 (0)20 8961 1260
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteSupport;
