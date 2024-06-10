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
import Profile from "./components/common/Profile";
import SignIn from "./components/User/Login";
import SignUp from "./components/User/Register";
// import ImageArray from "./Pages/MeetingAndEvents/ImageArray";
import MainMeeting from "./Pages/MeetingAndEvents/MainMeeting";
import Location from "./components/Location/Location";
import GuestInfo from "./components/common/GuestInformation";
import ResetPassword from "./components/User/ResetPassword";
import ImageGallery from "./Pages/MeetingAndEvents/ImageGallery";

import SiteCard from "./components/Sitecard/siteCard";
import ScrollToTop from "./components/common/ScrollToTop";
import WebsiteSupport from "./components/WebsiteSupport/WebsiteSupport";

export default function App() {
  return (
    <div>
      
      <Router>
      <HeaderUpdate />
      <ScrollToTop />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
         
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/Facilities" element={<Facilities />} />
          <Route path="/website-support" element={<WebsiteSupport />} />
          <Route path="/HomeRules" element={<HomeRules />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/BasicRoom" element={<BasicRoom />} />
          <Route path="/EnsuiteRoom" element={<EnsuiteRoom />} />
          {/* <Route path="/image-gallery" element={<ImageArray/>} /> */}
          <Route path="/meeting-events" element={<MeetingAndEvents />} />
          <Route path="/main-meeting" element={<MainMeeting />} />
          <Route path="/location" element={<Location />} />
          <Route path="/guest-info" element={<GuestInfo />} />
          <Route path="/reset-password" element={ <ResetPassword />} />
          <Route path="/room-card" element={ <SiteCard />} />
         
          <Route path="/image-gallery" element={ <ImageGallery />} />
          
        </Routes>
        <Footer />
        
       
      </Router>
    </div>
  );
}
