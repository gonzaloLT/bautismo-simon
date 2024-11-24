import React, { useState } from "react";
import PhotoGallery from "./PhotoGallery";
import "./../styles/HeroSection.css";

const photos = [
  "https://res.cloudinary.com/dgb9dxijv/image/upload/v1732226240/Simon_arbol_hqfvjn.jpg",
  "https://res.cloudinary.com/dgb9dxijv/image/upload/v1732226239/Simon_zuc0wj.jpg",
  "https://res.cloudinary.com/dgb9dxijv/image/upload/v1732230842/Simon1_mmgeuq.jpg",
  "https://res.cloudinary.com/dgb9dxijv/image/upload/v1732287098/Simoon_a6wiio.jpg",
  "https://res.cloudinary.com/dgb9dxijv/image/upload/v1732287098/Simon3_u6b6ev.jpg",
  "https://res.cloudinary.com/dgb9dxijv/image/upload/v1732287098/Simone_gxkj8k.jpg",
  "https://res.cloudinary.com/dgb9dxijv/image/upload/v1732468197/SimonBook4_zzufnt.jpg",
  "https://res.cloudinary.com/dgb9dxijv/image/upload/v1732468197/SimonBook2_yas2fs.jpg",
  "https://res.cloudinary.com/dgb9dxijv/image/upload/v1732468197/SimonBook3_gmsbhy.jpg",
  "https://res.cloudinary.com/dgb9dxijv/image/upload/v1732468196/SimonBook1_i6yeab.jpg"
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
