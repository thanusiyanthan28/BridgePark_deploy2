import React from 'react';
import { Carousel } from 'antd';
import PropTypes from 'prop-types'; // Import PropTypes for type checking

import '../../css/Carousel/Carousel.css';

const CarouselComponent = ({ images }) => {
    return (
        <div className="carousel-container">
            <Carousel autoplay dots>
                {images.map((imageUrl, index) => (
                    <div className="carousel-slide" key={index}>
                        <img src={imageUrl} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

CarouselComponent.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure images prop is an array of strings
};

export default CarouselComponent;
