import React from 'react'
import MeetingAndEvents from './MeetingAndEvents'
import ImageGallery from './ImageGallery'
import ImageSlider1 from './ImageSlider1'
import PanoImage from './PanoImage'
import Newmeeting from './NewMeeting'






const MainMeeting = () => {
  return (
    <div>
        
        <ImageSlider1 />
        {/* <MeetingAndEvents /> */}
        <Newmeeting />
        <PanoImage />
        
      
        
    </div>
  )
}

export default MainMeeting