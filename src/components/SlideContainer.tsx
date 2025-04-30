"use client";

import React, { useState, useEffect } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import Slide6 from "./Slide6";
import Slide7 from "./Slide7";
import Slide8 from "./Slide8";
import Slide9 from "./Slide9";
import Slide10 from "./Slide10";

const SlideContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10; // Total number of slides

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 1));
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        nextSlide();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Current Slide */}
      <div className="min-h-screen">
        {currentSlide === 1 && <Slide1 />}
        {currentSlide === 2 && <Slide2 />}
        {currentSlide === 3 && <Slide3 />}
        {currentSlide === 4 && <Slide4 />}
        {currentSlide === 5 && <Slide5 />}
        {currentSlide === 6 && <Slide6 />}
        {currentSlide === 7 && <Slide7 />}
        {currentSlide === 8 && <Slide8 />}
        {currentSlide === 9 && <Slide9 />}
        {currentSlide === 10 && <Slide10 />}
      </div>

      {/* Navigation Controls - Moved to bottom center for better mobile access */}
      <div className="fixed bottom-0 left-0 right-0 p-3 sm:p-6 flex justify-between items-center bg-gradient-to-t from-black/50 to-transparent z-50">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 1}
          className="p-3 sm:px-4 sm:py-2 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full sm:rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2 text-sm sm:text-base border border-white/20"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-4 sm:w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Slide Counter - Centered between navigation buttons */}
        <div className="text-white/90 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm sm:text-base font-medium">
          {currentSlide} / {totalSlides}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides}
          className="p-3 sm:px-4 sm:py-2 bg-black/50 backdrop-blur-sm hover:bg-black/70 text-white rounded-full sm:rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2 text-sm sm:text-base border border-white/20"
          aria-label="Next slide"
        >
          <span className="hidden sm:inline">Next</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-4 sm:w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SlideContainer;
