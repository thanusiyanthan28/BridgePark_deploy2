import React from 'react'
import MeetingAndEvents from './MeetingAndEvents'
import ImageGallery from './ImageGallery'
import ImageSlider1 from './ImageSlider1'
import PanoImage from './PanoImage'



const MainMeeting = () => {
  return (
    <div>
        {/* <ImageGallery /> */}
        <ImageSlider1 />
        <MeetingAndEvents />
        <PanoImage />
      
        
    </div>
  )
}

export default MainMeeting