import React from "react";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import LocationSection from "./components/LocationSection";
import RSVPForm from "./components/RSVPForm";
import ScrollArrow from "./components/ScrollArrow";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <HeroSection />
      <VideoSection
        title="¡Mira el video de invitación!"
        videoUrl="https://www.youtube.com/embed/example1"
      />
      <LocationSection
        title="Ceremonia religiosa"
        mapUrl="https://www.google.com/maps/embed?pb=ubicacion1"
      />
      <RSVPForm />
      <ScrollArrow />
    </>
  );
};

export default App;
