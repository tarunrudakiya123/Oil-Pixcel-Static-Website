// Slider.js
import React, { useState, useEffect } from "react";
import "./slider.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items?.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items?.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items?.map((item, index) => (
          <div className="slider-content" key={index}>
            <div className="slider-item">
              <img className="img-fluid" src={item?.img} alt="slider-img" />
            </div>

            <div className="slider-text">
              <p className="imageTitle">{item?.content}</p>
              <button className="masterButton contentButton">{item?.buttonText}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="button-control">
        <button className="slider-button prev" onClick={handlePrev}>
          <KeyboardBackspaceIcon />
        </button>
        <button className="slider-button next" onClick={handleNext}>
          <EastIcon />
        </button>
      </div>
    </div>
  );
};

export default Slider;
