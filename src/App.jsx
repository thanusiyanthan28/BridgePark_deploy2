import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Rooms from "./Pages/Rooms";
import Footer from "./components/common/Footer";

import HeaderUpdate from "./components/common/HeaderUpdate";

import Facilities from "./Pages/Facilities";
import BasicRoom from "./components/Room/BasicRoom";
import EnsuiteRoom from "./components/Room/EnsuiteRooms";

import HomeRules from "./components/common/HomeRules";
import Profile from "./components/common/Profile";
import SignIn from "./components/User/Login";
import SignUp from "./components/User/Register";
// import ImageArray from "./Pages/MeetingAndEvents/ImageArray";
import MainMeeting from "./Pages/MeetingAndEvents/MainMeeting";
import Location from "./components/Location/Location";
import GuestInfo from "./components/common/GuestInformation";
import ResetPassword from "./components/User/ResetPassword";

import SiteCard from "./components/Sitecard/siteCard";
import ScrollToTop from "./components/common/ScrollToTop";

import Privacy from "./components/Privacy/Privacy";
import FAQ from "./components/FAQ/Faq";
import WebsiteSupport from "./components/WebsiteSupport/WebsiteSupport";
import FaqDetails from "./components/FAQ/FaqDetails";
import ReviewPage from "./components/NewReview/Reviews";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Copyright from "./components/common/Copyright";
import SiteMaps from  "./components/SiteMaps/SiteMaps"
import NewHeader from "./components/common/NewHeader";
import TopBar from "./components/common/TopBar";
import { AuthProvider } from "./AuthContext";
import "./App.css"
import RoomAll from "./components/Allrooms/AllRooms";

const clientId =
  "1009464659569-k6eof9rvm8ugs5mcnb86h4j5iud5elnr.apps.googleusercontent.com";

export default function App() {
  return (
    <div>
      <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <Router>
          {/* <NewHeader /> */}
          <TopBar />
          <div className="app-margin-top">
            <HeaderUpdate />
            </div>
          <ScrollToTop />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/faq/:id" element={<FaqDetails />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/Facilities" element={<Facilities />} />
            <Route path="/website-support" element={<WebsiteSupport />} />
            <Route path="/HomeRules" element={<HomeRules />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/BasicRoom" element={<BasicRoom />} />
            <Route path="/EnsuiteRoom" element={<EnsuiteRoom />} />
            {/* <Route path="/image-gallery" element={<ImageArray/>} /> */}
           
            <Route path="/main-meeting" element={<MainMeeting />} />
            <Route path="/location" element={<Location />} />
            <Route path="/guest-info" element={<GuestInfo />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/room-card" element={<SiteCard />} />
            <Route path="/review" element={<ReviewPage />} />
           
            <Route path="/copyright" element={<Copyright />} />
            <Route path="/sitemaps" element={<SiteMaps />} />
          </Routes>
          <Footer />
        </Router>
        </AuthProvider>
      </GoogleOAuthProvider>
    </div>
  );
}
