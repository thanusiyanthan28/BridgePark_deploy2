import React, { useState, useEffect } from "react";
import "./Location.css"
import Header from '../common/Header'
import Card from '../common/Card'
import SiteCard from "../Sitecard/siteCard";

const Location = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 767px)").matches);
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
    <div className='location'>
       {/* <Header /> */}
       <div className='location-main'>
       <div className='location-title'>Our Location</div>
       {isMobile ? <div className="location-sitecard"><SiteCard /></div> :  <div className='location-card'><Card /></div>}
      
       </div>
    <div className='location-sub'>
        <div className='location-sub-left'>
            <p className='location-sub-content'>As The Bridge Park Hotel is less than 2 miles from Wembley Stadium and Arena, this is the perfect place to stay if you’re coming to watch a concert or sporting event here. You will also find Brent Cross Shopping Centre nearby. To explore central London, you should make the most of public transport. The number 18 bus, which stops outside your hotel, will take you straight to Regents Park and Madame Tussauds. Travel via tube and you can get to places like Oxford Street and Piccadilly Circus with ease.</p>
            <h1 className='location-sub-title'>By Train:</h1>
            <p className='location-sub-content'>You will find that Harlesden Train Station is within easy walking distance of The Bridge Park Hotel.</p>
            <h1 className='location-sub-title'>By Car:</h1>
            <p className='location-sub-content'>Bridge Park Hotel is near the A238 road to Kingston upon Thames.</p>
            <h1 className='location-sub-title'>By Tube:</h1>
            <p className='location-sub-content'>To get to The Bridge Park Hotel on the tube you should travel on the Bakerloo Line and get off at Harlesden or Stonebridge Park Tube Station.</p>
            <h1 className='location-sub-title'>On Foot:</h1>
            <p className='location-sub-content'>The Bridge Park Hotel is less than 10 minutes walk from Harlesden Tube Station (Bakerloo and London Overground lines) and 16 minutes from Stonebridge Park Tube Station (Bakerloo and London Overground lines).

            Once you get to Harlesden Train / Tube Station you should exit onto Acton Lane and turn left. Take the first left into Winchelsea Road and carry straight on to Knatchbull Road. Once you reach the end turn left into Hillside where you will find Bridge Park Hotel at number 16.

            Upon arrival at Stonebridge Park Tube Station, you need to exit onto Argenta Way and turn left. Start walking and then turn right into Point Place. At the end of this road, take another right into Brentfield Road. Carry straight on onto Hillside where you will find Bridge Park Hotel.</p>
            
        </div>
        <div className='location-sub-right'>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2481.4600418069726!2d-0.2610174!3d51.5414628!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611967e94e951%3A0x9dae31c05fde0964!2sBridge%20Park%20Hotel!5e0!3m2!1sen!2slk!4v1713963613608!5m2!1sen!2slk"
        width="98%"
        height="95%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
        className='location-map'
      ></iframe>
        </div>
    </div>
    </div>
  )
}

export default Location