import React from "react";
import "./../styles/VideoSection.css";

const VideoSection = ({ title, videoUrl }) => {
  return (
    <section className="video">
      <h2>{title}</h2>
      <div className="video-container">
        <iframe
          src={videoUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
