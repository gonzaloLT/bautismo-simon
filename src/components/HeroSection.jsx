import React, { useState } from "react";
import PhotoGallery from "./PhotoGallery";
import "./../styles/HeroSection.css";

const photos = [
  "https://res.cloudinary.com/dgb9dxijv/image/upload/v1732226240/Simon_arbol_hqfvjn.jpg",
  "https://res.cloudinary.com/dgb9dxijv/image/upload/v1732226239/Simon_zuc0wj.jpg"
];

const HeroSection = () => {
  const [randomPhoto, setRandomPhoto] = useState(
    photos[Math.floor(Math.random() * photos.length)]
  );
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <section className="hero">
      <img
        src={randomPhoto}
        alt="Foto del bebé"
        className="hero-image"
        onClick={() => setIsGalleryOpen(true)}
      />
      <h1>¡Te invitamos al bautismo de Simon Ezequiel!</h1>
      <p>Únete a nosotros para celebrar este día especial lleno de amor y bendiciones.</p>
      {isGalleryOpen && (
        <PhotoGallery
          photos={photos}
          initialPhoto={randomPhoto}
          onClose={() => setIsGalleryOpen(false)}
        />
      )}
    </section>
  );
};

export default HeroSection;
