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
export default function App() {
  return (
    <div>
      <Router>
      <HeaderUpdate />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/Facilities" element={<Facilities />} />
          {/* <Route path="/SignUp" element={<SignUp />} /> */}
          

          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/HomeRules" element={<HomeRules />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/BasicRoom" element={<BasicRoom/>}/>
          <Route path="/EnsuiteRoom" element={<EnsuiteRoom />} />
          <Route path="/meeting-events" element={<MeetingAndEvents />} />
        </Routes>
        <Footer />
        
       
      </Router>
      
    </div>
  );
}
