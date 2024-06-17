import React from "react";
import Header from "../components/common/Header";
import About from "../components/home/About";
import Room from "../components/home/Room";
import Facilities from "./Facilities";
import RoomInformation from "../components/home/RoomInformation";
import MeetingAndEvents from "./MeetingAndEvents/MeetingAndEvents";
import NewMeeting from "./MeetingAndEvents/NewMeeting";
import FAQ from "../components/FAQ/Faq";


export default function HomePage() {
  return (
    <>
    
      <Header />
      <About />
      <Room />
      <Facilities />
      <NewMeeting />
      {/* <FAQ /> */}
       
    </>
  );
}
