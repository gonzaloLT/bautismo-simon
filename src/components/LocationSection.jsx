import React from "react";
import "./../styles/LocationSection.css";

const LocationSection = ({ title, mapUrl }) => {
  return (
    <section className="location">
      <h2>{title}</h2>
      <div className="map-container">
        <iframe
          src={mapUrl}
          title={title}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationSection;
