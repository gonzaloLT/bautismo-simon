import React, { useEffect, useState } from "react";
import "./../styles/ScrollArrow.css";

const ScrollArrow = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div
      className="scroll-arrow"
      style={{
        top: `${scrollProgress}%`,
      }}
    >
      <span>▼</span>
    </div>
  );
};

export default ScrollArrow;
