import React from "react";
import "./../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <img
        src="https://res.cloudinary.com/dgb9dxijv/image/upload/v1732226240/Simon_arbol_hqfvjn.jpg" 
        alt="Foto del bebé"
        className="hero-image"
      />
      <h1>¡Te invitamos al bautismo de Simon Ezequiel!</h1>
      <p>Únete a nosotros para celebrar este día especial lleno de amor y bendiciones.</p>
    </section>
  );
};

export default HeroSection;
