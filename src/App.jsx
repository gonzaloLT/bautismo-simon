import React from "react";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import LocationSection from "./components/LocationSection";
import RSVPForm from "./components/RSVPForm";
import ScrollArrow from "./components/ScrollArrow";
import "./styles/App.css";
import ImageSection from "./components/ImageSection";

const App = () => {
  return (
    <>
      <HeroSection />
      <h3>Dia 15 de diciembre a las 12:30 horas</h3>
      <ImageSection title="Iglesia Santo Domingo de Guzmán" imageUrl="https://res.cloudinary.com/dgb9dxijv/image/upload/v1732230842/Iglesia_hlfyai.jpg" altText="Iglesia" />
      <LocationSection
        title="Ubicación de la iglesia"
        mapUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6688.1483175834355!2d-65.6182644!3d-33.0545144!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d393201c433a11%3A0x6482f986c22130f!2sIglesia%20Santo%20Domingo%20de%20Guzm%C3%A1n!5e0!3m2!1ses!2sar!4v1732231619557!5m2!1ses!2sar"
      />
      <VideoSection
        title="Asi puedes llegar a la quinta"
        videoUrl="https://www.youtube.com/embed/example1"
      />
      <LocationSection
        title="Ubicación de la quinta"
        mapUrl="https://www.google.com/maps/embed?pb=ubicacion1"
      />
      <RSVPForm />
      <ScrollArrow />
    </>
  );
};

export default App;
