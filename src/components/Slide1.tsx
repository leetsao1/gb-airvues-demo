"use client";

import React from "react";

const Slide1 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-900 to-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-white mb-8 animate-fade-in">
          Welcome to the Gracie Barra Global Database
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-3xl animate-fade-in-delay">
          A unified platform connecting our global community, preserving our
          legacy, and empowering our future
        </p>
        <div className="bg-blue-900/30 p-8 rounded-lg backdrop-blur-sm animate-fade-in-delayed">
          <p className="text-xl leading-relaxed">
            "Today we introduce a transformational initiative that connects
            everything and everyone in the Gracie Barra network—students,
            instructors, schools, and leadership—into a single, living, global
            system. Our goal is to create excitement and alignment as we
            showcase the strategy, the technology, and the impact of the GB
            Global Database."
          </p>
          <p className="mt-4 text-right text-blue-300">- Flavio Almeida</p>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
