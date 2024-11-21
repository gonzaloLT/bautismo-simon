import React from "react";
import "./../styles/LocationSection.css";

const LocationSection = ({ title, mapUrl }) => {
  return (
    <section className="location">
      <h2>{title}</h2>
      <div className="map-container">
        <iframe
          src={mapUrl}
          allowFullScreen=""
          loading="lazy"
          title={title}
        ></iframe>
      </div>
    </section>
  );
};

export default LocationSection;
