import React, { useEffect, useState } from "react";
import "./../styles/ScrollArrow.css";

const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    const heroHeight = document.querySelector(".hero").offsetHeight;
    setIsVisible(window.scrollY < heroHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="scroll-arrow">
      <span>▼</span>
      <p>Desplázate hacia abajo</p>
    </div>
  );
};

export default ScrollArrow;
