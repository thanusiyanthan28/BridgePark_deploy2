import React from "react";
import Header from "../components/common/Header";
import About from "../components/home/About";
import Room from "../components/HomeRoom/RoomInfo";
import Facilities from "./Facilities";
import RoomInformation from "../components/home/RoomInformation";
import NewMeeting from "./MeetingAndEvents/NewMeeting"
//import FAQ from "../components/FAQ/Faq";
import FAQComponent from "../components/FAQ/FaqComponent";


export default function HomePage() {
  return (
    <>
    
      <Header />
      <About />
      <Room />
      <Facilities />
      <NewMeeting />
      {/* <FAQ /> */}
      <FAQComponent/>
       
    </>
  );
}
