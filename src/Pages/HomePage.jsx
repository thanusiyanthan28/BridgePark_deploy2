import React from "react";
import Header from "../components/common/Header";
import About from "../components/home/About";
import Room from "../components/home/Room";
import Facilities from "./Facilities";
import RoomInformation from "../components/home/RoomInformation";


export default function HomePage() {
  return (
    <>
      <Header />
      <About />
      <Room />
     <Facilities />
    <RoomInformation />
    </>
  );
}
