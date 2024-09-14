// Slider.js
import React, { useState, useEffect } from "react";
import "./slider.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";

function extractTextFromHTML(htmlString) {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlString;
  return tempDiv.textContent || tempDiv.innerText;
}

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
  }, [items]);

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {items?.map((item, index) => (
          <div className="slider-content" key={index}>
            <div className="slider-item">
              <img
                className="img-fluid"
                src={item?.FeatureImages?.url || "fallback-image-url"} 
                alt={item?.title || "Slider image"}
              />
            </div>

            <div className="slider-text">
              <p className="imageTitle">{item?.title}</p>
              <button className="masterButton contentButton">
                {extractTextFromHTML(item?.description || "")}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="button-control">
        <button
          className="slider-button prev"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <KeyboardBackspaceIcon />
        </button>
        <button
          className="slider-button next"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <EastIcon />
        </button>
      </div>
    </div>
  );
};

export default Slider;
