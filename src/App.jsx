import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Rooms from "./Pages/Rooms";
import Footer from "./components/common/Footer";
import MeetingAndEvents from "./Pages/MeetingAndEvents/MeetingAndEvents";
import HeaderUpdate from "./components/common/HeaderUpdate";

import Facilities from "./Pages/Facilities";
import BasicRoom from "./components/Room/BasicRoom";
import EnsuiteRoom from "./components/Room/EnsuiteRooms";

import HomeRules from "./components/common/HomeRules"
import Profile from './components/common/Profile';
import Location from './components/Location/Location';
import GuestInfo from './components/common/GuestInformation';
import ResetPassword from './components/User/ResetPassword';
import ImageGallery from './components/common/ImageGallery';
import BeforeProfile from "./components/common/BeforeProfile";


export default function App() {
  return (
    <div>
      
      <Router>
        <HeaderUpdate />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/beforeProfile" element={<BeforeProfile />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/Facilities" element={<Facilities />} />
          
          <Route path="/HomeRules" element={<HomeRules />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/BasicRoom" element={<BasicRoom />} />
          <Route path="/EnsuiteRoom" element={<EnsuiteRoom />} />
          {/* <Route path="/image-gallery" element={<ImageArray/>} /> */}
          <Route path="/meeting-events" element={<MeetingAndEvents />} />
          {/* <Route path="/main-meeting" element={<MainMeeting />} /> */}
          <Route path="/location" element={<Location />} />
          <Route path="/guest-info" element={<GuestInfo />} />
          <Route path="/reset-password" element={ <ResetPassword />} />
       
          <Route path="/image-gallery" element={ <ImageGallery />} />
        </Routes>
        <Footer />
        
       
      </Router>
    </div>
  );
}
