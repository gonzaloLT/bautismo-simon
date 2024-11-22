import React from "react";
import "./../styles/ImageSection.css";

const ImageSection = ({ title, imageUrl, altText }) => {
  return (
    <section className="image">
      <h2>{title}</h2>
      <div className="image-container">
        <img src={imageUrl} alt={altText} />
      </div>
    </section>
  );
};

export default ImageSection;
