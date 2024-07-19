import React, { useState } from 'react';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
import './PanoImage.css';

import img1 from "../../assets/images/360image/360final/1.jpg";
import img2 from "../../assets/images/360image/360final/2.jpg";
import img3 from "../../assets/images/360image/360final/3.jpg";
import img4 from "../../assets/images/360image/360final/4.jpg";
import img5 from "../../assets/images/360image/360final/5.jpg";
import img6 from "../../assets/images/360image/360final/6.jpg";

const PanoImage = () => {
  
  const images = [
    { url: img1,emlink:'https://momento360.com/e/u/e1248b6ad780405b87442598355dbb37?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 1' },
    { url: img2,emlink:'https://momento360.com/e/u/4d51a697887b47a4a835ba76349a8d62?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 2' },
    { url: img3,emlink:'https://momento360.com/e/u/06160b7d75564111bc7172e5c5f24607?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 3' },
    { url: img4,emlink:'https://momento360.com/e/u/8a623540221b42b98df4a552d6a52021?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 4' },
    { url: img5,emlink:'https://momento360.com/e/u/75580af54c6a45719782297d693ad99b?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 5' },
    { url: img6,emlink:'https://momento360.com/e/u/59d8b9046f07428999d35d17ad61f40d?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 6' },
   
  
  ];
  const [startIndex, setStartIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handlePrevClick = () => {
    setStartIndex(Math.max(startIndex - 1, 0));
  };

  const handleNextClick = () => {
    setStartIndex(Math.min(startIndex + 1, images.length - 3));
  };

  const handleImageClick = (index) => {
    setSelectedImage(images[startIndex + index]);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='pano-image-main'>
        
        
        {/* <h1 className='pano-image-title'>Experience Bridge Park Hotel Like Never Before</h1> */}
        <div className='location-title'>Experience Bridge Park Hotel Like Never Before</div>
       
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