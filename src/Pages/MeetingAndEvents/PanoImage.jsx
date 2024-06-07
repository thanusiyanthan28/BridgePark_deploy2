import React, { useState } from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import './PanoImage.css';

import img1 from "../../assets/images/360image/1.jpg";
import img2 from "../../assets/images/360image/2.jpg";
import img3 from "../../assets/images/360image/3.jpg";
import img4 from "../../assets/images/360image/4.jpeg";
import img5 from "../../assets/images/360image/5.jpg";
import img6 from "../../assets/images/360image/6.jpg";
import img7 from "../../assets/images/360image/7.jpg";
const PanoImage = () => {
  
  const images = [
    { url: img1,emlink:'https://momento360.com/e/u/05be7cedbaa740d5befd4dc041c9ba68?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 1' },
    { url: img2,emlink:'https://momento360.com/e/u/a885e633ee1e405db1ee8e9ddcf25804?utm_campaign=embed&utm_source=other&heading=-11.25&pitch=2.83&field-of-view=75&size=medium&display-plan=true', alt: 'Image 2' },
    { url: img3,emlink:'https://momento360.com/e/u/e344b60e5f554f4a85635d1480c624cf?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 3' },
    { url: img4,emlink:'https://momento360.com/e/u/7ac62332641c4eee9769a3d80fa18902?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 4' },
    { url: img5,emlink:'https://momento360.com/e/u/a1646f0e1a0a494ebe68f3e917c177a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 5' },
    { url: img6,emlink:'https://momento360.com/e/u/a1646f0e1a0a494ebe68f3e917c177a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 6' },
    { url: img7,emlink:'https://momento360.com/e/u/a1646f0e1a0a494ebe68f3e917c177a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 6' }
  
  ];
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handlePrevClick = () => {
    setStartIndex(Math.max(startIndex - 3, 0));
  };

  const handleNextClick = () => {
    setStartIndex(Math.min(startIndex + 3, images.length - 3));
  };

  const handleImageClick = (index) => {
    setSelectedImage(images[startIndex + index]);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='pano-image-main'>
        
        
        <h1 className='pano-image-title'>Experience Bridge Park Hotel Like Never Before</h1>
       
        <div  className='pano-image-discription'>
        <hr class="pano-image-title-line" />
         <p>Our 360° virtual tour provides an immersive look into our elegant rooms, stunning facilities, and scenic surroundings.</p>
        </div>
        <div className='pano-image-main2'>
        <button onClick={handlePrevClick} className={`pano-image-nav-btn-pre ${startIndex > 0? 'pano-image-active-btn' : 'pano-image-inactive-btn'}`}>
        <LeftOutlined style={{ fontSize: 25, color: '#08c' }}/>
          </button>
      <div className="pano-image-image-gallery">

      {images.slice(startIndex, startIndex + 3).map((image, index) => (
  <div key={index} className={`pano-image-image-container ${index === 1 ? 'pano-second-image-style' : ''}`} onClick={() => handleImageClick(index)}>
    <img src={image.url} alt={image.alt} />
  </div>
))}
     
      </div>
      <button onClick={handleNextClick} className={`pano-image-nav-btn-nxt ${startIndex + 3 < images.length? 'pano-image-active-btn' : 'pano-image-inactive-btn'}`} >
      <RightOutlined style={{ fontSize: 25, color: '#08c' }}/>
          </button>
      </div>

       
      {selectedImage && (
        //selected image
        <div className="pano-image-modal">
          <button onClick={handleCloseModal} className="pano-image-close-btn">
            &times;
          </button>
          {/* <img src={selectedImage.url} alt={selectedImage.alt} /> */}
          <iframe
        title="360 degree panorama"
        width="100%"
        height="100%"
        src={selectedImage.emlink}
        allowFullScreen=""
        frameBorder="0"
      ></iframe>
        </div>
      )}
    </div>
  );
};

export default PanoImage;