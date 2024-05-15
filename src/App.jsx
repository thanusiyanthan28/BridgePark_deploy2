import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Rooms from "./Pages/Rooms";
import Footer from "./components/common/Footer"
import MeetingAndEvents from "./Pages/MeetingAndEvents/MeetingAndEvents";
import HeaderUpdate from "./components/common/HeaderUpdate" 

import Facilities from "./Pages/Facilities";
import BasicRoom from "./components/Room/BasicRoom";
import EnsuiteRoom from "./components/Room/EnsuiteRooms";

import SignIn from "./components/User/Login";
import HomeRules from "./components/common/HomeRules"
import SignUp from "./components/User/Register";
import ImageArray from "./Pages/MeetingAndEvents/ImageArray";
import MainMeeting from "./Pages/MeetingAndEvents/MainMeeting";
import Location from "./components/Location/Location";
import GuestInfo from "./components/common/GuestInformation";
export default function App() {
  return (
    <div>
      <Router>
      <HeaderUpdate />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/SignUp" element={<SignUp />} />
          
          

          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/HomeRules" element={<HomeRules />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/BasicRoom" element={<BasicRoom/>}/>
          <Route path="/EnsuiteRoom" element={<EnsuiteRoom />} />
          <Route path="/image-gallery" element={<ImageArray/>} />
          <Route path="/meeting-events" element={<MeetingAndEvents />} />
          <Route path="/main-meeting" element={<MainMeeting />} />
          <Route path="/location" element={<Location />} />
          <Route path="/guest-info" element={<GuestInfo />} />
          


        </Routes>
        <Footer />
        
       
      </Router>
      
    </div>
  );
}
