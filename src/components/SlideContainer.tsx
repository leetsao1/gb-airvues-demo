"use client";

import React, { useState } from "react";
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

      {/* Navigation Controls */}
      <div className="fixed bottom-8 right-8 flex gap-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 1}
          className="px-4 py-2 bg-blue-900/50 hover:bg-blue-900/70 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides}
          className="px-4 py-2 bg-blue-900/50 hover:bg-blue-900/70 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Next
        </button>
      </div>

      {/* Slide Counter */}
      <div className="fixed bottom-8 left-8 text-white/70">
        Slide {currentSlide} of {totalSlides}
      </div>
    </div>
  );
};

export default SlideContainer;
