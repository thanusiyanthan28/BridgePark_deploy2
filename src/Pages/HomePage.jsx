import React from "react";
import Header from "../components/common/Header";
import About from "../components/home/About";
import Room from "../components/HomeRoom/RoomInfo";
import Facilities from "./Facilities";
import RoomInformation from "../components/home/RoomInformation";

//import FAQ from "../components/FAQ/Faq";
import FAQComponent from "../components/FAQ/FaqComponent";
import NewMeeting from "./MeetingAndEvents/Newmeeting";


export default function HomePage() {
  return (
    <div className="home-top-margin">
       
      <Header />
      <About />
      <Room />
      <Facilities />
      <NewMeeting />
      {/* <FAQ /> */}
      <FAQComponent/>
       
    </div>
  );
}
