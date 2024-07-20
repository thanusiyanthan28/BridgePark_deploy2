import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import "./ImageCarousel.css";
import img1 from "../../assets/images/360image/360final/1.jpg";
import img2 from "../../assets/images/360image/360final/2.jpg";
import img3 from "../../assets/images/360image/360final/3.jpg";
import img4 from "../../assets/images/360image/360final/4.jpg";
import img5 from "../../assets/images/360image/360final/5.jpg";
import img6 from "../../assets/images/360image/360final/6.jpg";

const images = [
  { url: img1, emlink: 'https://momento360.com/e/u/e1248b6ad780405b87442598355dbb37?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 1' },
  { url: img2, emlink: 'https://momento360.com/e/u/4d51a697887b47a4a835ba76349a8d62?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 2' },
  { url: img3, emlink: 'https://momento360.com/e/u/06160b7d75564111bc7172e5c5f24607?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 3' },
  { url: img4, emlink: 'https://momento360.com/e/u/8a623540221b42b98df4a552d6a52021?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 4' },
  { url: img5, emlink: 'https://momento360.com/e/u/75580af54c6a45719782297d693ad99b?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 5' },
  { url: img6, emlink: 'https://momento360.com/e/u/59d8b9046f07428999d35d17ad61f40d?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true', alt: 'Image 6' },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEmlink = (emlink) => {
    window.open(emlink, "_blank");
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <FaArrowLeft className="arrow left-arrow" onClick={goToPrevious} />
        <div className="image-container">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.alt}
              onClick={() => openEmlink(image.emlink)}
            />
          ))}
        </div>
        <FaArrowRight className="arrow right-arrow" onClick={goToNext} />
      </div>

      {isModalOpen && (
        <div className="modal">
          <FaTimes className="close-icon" onClick={closeModal} />
          <img src={modalImage} alt="Enlarged" className="modal-image" />
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
