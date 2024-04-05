import React from 'react';
import CarouselComponent from './CarouselComponent'; // Import the CarouselComponent
import img1 from '../../assets/images/Bar2.jpg';
import img2 from '../../assets/images/DormRoom.jpg';
import img3 from '../../assets/images/ExecutiveKingRoom.jpg';

const ImageGallery = () => {
    const images = [img1, img2, img3]

    return (
        <div className="image-gallery">
            <CarouselComponent images={images} /> 
        </div>
    );
};

export default ImageGallery;
