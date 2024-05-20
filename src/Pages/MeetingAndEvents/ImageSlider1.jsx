import React, { useState } from 'react';
import './ImageSlider1.css';
import  Icon from 'antd';
import { RightOutlined ,LeftOutlined} from '@ant-design/icons';
import image1 from "../../assets/images/image_gellery/image1.jpg";
import image2 from "../../assets/images/image_gellery/image2.jpg";
import image3 from "../../assets/images/image_gellery/image3.jpg";
import image4 from "../../assets/images/image_gellery/image4.jpg";
import image5 from "../../assets/images/image_gellery/image5.jpeg";
import image6 from "../../assets/images/image_gellery/image6.jpg";

const ImageSlider1 = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];
  const [index, setIndex] = useState(images.length - 3);

  const handleNext = () => {
    if (index < images.length - 3) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="image-galley-slider-container">
      <h1 className='image-galley-title'>Image Gallery</h1>
      <div className="image-galley-arrow image-galley-left" onClick={handlePrev}><LeftOutlined style={{ fontSize: 25, color: '#08c' }}/></div>
      <div className="image-galley-slider">
        {images.slice(index, index + 3).map((image, i) => (
          <div key={i} className={`image-galley-slider-image-wrapper image-galley-size-${i + 1}`}>
            <img src={image} alt={`image-galley-Slide ${index + i}`} className="image-galley-slider-image" />
          </div>
        ))}
      </div>
      <div className="image-galley-arrow image-galley-right" onClick={handleNext}><RightOutlined style={{ fontSize: 25, color: '#08c' }}/></div>
    </div>
  );
};

export default ImageSlider1;
