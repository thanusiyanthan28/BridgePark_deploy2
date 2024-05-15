import React from 'react'
import Carousel from './ImageGallery';
import image1 from "../../assets/images/image_gellery/image1.jpg"
import image2 from "../../assets/images/image_gellery/image2.jpg"
import image3 from "../../assets/images/image_gellery/image3.jpg"
import image4 from "../../assets/images/image_gellery/image4.jpg"
import image5 from "../../assets/images/image_gellery/image5.jpeg"
import image6 from "../../assets/images/image_gellery/image6.jpg"
const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];

const ImageArray = () => {
  return (
    <div>
        <Carousel  images={images}/>


    </div>
  )
}

export default ImageArray
