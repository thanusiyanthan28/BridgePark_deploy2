import React from 'react'
import Header from '../components/common/Header'
import About from '../components/home/About'
import HotelRoomCard from '../components/common/HotelRoomCard'
import img1 from '../assets/images/Loungebar 1.jpg'

export default function HomePage(){
  return (
   <>
   <Header/>
   <About />
   <HotelRoomCard
        imageSource={img1}
        title="Luxury Room"
        description="Spacious room with a breathtaking view"
        guests={2}
        status="Available"
        price="$200 per night"
        buttonText="Book Now"
      /> 
   </>
  )
}

