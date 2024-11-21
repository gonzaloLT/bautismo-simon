import React, { useState } from "react";
import "./../styles/PhotoGallery.css";

const PhotoGallery = ({ photos, initialPhoto, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(
    photos.indexOf(initialPhoto)
  );

  const goToPrevious = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );

  const goToNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );

  return (
    <div className="gallery-overlay">
      <div className="gallery-content">
        <button className="gallery-button close" onClick={onClose}>
          ✖
        </button>
        <img
          src={photos[currentIndex]}
          alt="Foto ampliada"
          className="gallery-photo"
        />
        <button className="gallery-button previous" onClick={goToPrevious}>
          ◀
        </button>
        <button className="gallery-button next" onClick={goToNext}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;
