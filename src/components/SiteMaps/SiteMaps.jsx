import React, { useState, useEffect } from "react";
import "./SiteMaps.css";
import Card from "../common/Card";
import SiteCard from "../Sitecard/siteCard";

const SiteMaps = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

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
  const handlePhoneNoClick = (e, phoneNumber) => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        const { clientX, clientY } = e;
        setTooltipPosition({ x: clientX, y: clientY });
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      <div className="SiteMaps">
        <div className="SiteMaps-main">
          {isMobile ? (
            <div className="SiteMaps-sitecard">
              <SiteCard />
            </div>
          ) : (
            <div className="SiteMaps-card">
              <Card />
            </div>
          )}
        </div>
        <div className="SiteMaps-title">Site Maps</div>
        <div className="SiteMaps-sub">
          <div className="SiteMaps-mainContainor">
            <div className="SiteMaps-Containor">
              <div className="SiteMaps-sub">
                <h1 className="SiteMaps-sub-title">Pages</h1>
              </div>
              <ul className="sitemap">
                <li>
                  <a href="/" target="_blank">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/rooms" target="_blank">
                    Rooms
                  </a>
                </li>
                <li>
                  <a href="/facilities" target="_blank">
                    Facilities
                  </a>
                </li>
                <li>
                  <a href="/main-meeting" target="_blank">
                    Meeting and Events
                  </a>
                </li>
                <li>
                  <a href="/location" target="_blank">
                    Location
                  </a>
                </li>
                <li>
                  <a href="/review" target="_blank">
                    Review
                  </a>
                </li>
                <li>
                  <a
                    href="https://direct-book.com/properties/bridgeparkdirect?"
                    target="_blank"
                  >
                    Book Now
                  </a>
                </li>
                <li>
                  <a href="/faq" target="_blank">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/HomeRules" target="_blank">
                    Booking Policies
                  </a>
                </li>
                <li>
                  <a href="https://direct-book.com/properties/bridgeparkdirect/policies?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=GBP&checkInDate=2024-07-29&checkOutDate=2024-07-30&trackPage=yes" target="_blank">
                  Policies
                  </a>
                </li>
                <li>
                  <a
                    href="https://direct-book.com/properties/bridgepark/book?step=step1"
                    target="_blank"
                  >
                    Guest Info
                  </a>
                </li>
                <li>
                  <a href="/website-support" target="_blank">
                    Website Support
                  </a>
                </li>
                <li>
                  <a
                    href="https://direct-book.com/properties/bridgeparkdirect?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=GBP&checkInDate=2024-06-14&checkOutDate=2024-06-15&trackPage=no"
                    target="_blank"
                  >
                    SiteMinder Page
                  </a>
                </li>
                <li>
                  <a href="/privacy" target="_blank">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://direct-book.com/properties/bridgeparkdirect/contact?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=GBP&checkInDate=2024-07-29&checkOutDate=2024-07-30&trackPage=yes"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/bridgeparkhotellondon/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/bridgeparkhotellondon/"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/bridgeparkuk" target="_blank">
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/bridgeparkhotellondon"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.pinterest.com/bridgeparkhotellondon/"
                    target="_blank"
                  >
                    Pinterest
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps?ll=51.541287,-0.261686&z=17&t=m&hl=en&gl=LK&mapclient=embed&cid=11362073612214208868"
                    target="_blank"
                  >
                    Maps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      handlePhoneNoClick(e, "+44 208961 1260");
                    }}
                  >
                    Calls
                  </a>
                </li>

                <li>
                  <a href="mailto:bridgeparkhotel@gmail.com" target="_blank">
                    Official Mail
                  </a>
                </li>
                <li>
                  <a href="mailto:bridgeparkhotel@gmail.com" target="_blank">
                    Other Mail
                  </a>
                </li>
                <li>
                  <a href="https://direct-book.com/properties/bridgeparkdirect/about?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=GBP&checkInDate=2024-07-29&checkOutDate=2024-07-30&trackPage=yes" target="_blank">
                  About Us
                  </a>
                </li>
                {showTooltip && (
                  <div
                    className="tooltip"
                    style={{
                      top: tooltipPosition.y + window.scrollY - 30, 
                      left: tooltipPosition.x + window.scrollX + 10, 
                    }}
                  >
                    Phone number copied to clipboard!
                  </div>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteMaps;
