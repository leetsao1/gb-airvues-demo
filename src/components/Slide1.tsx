"use client";

import React from "react";

const Slide1 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-900 to-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">
          Introducing the Gracie Barra Global Database
        </h1>
        <h2 className="text-3xl text-blue-300 mb-8 animate-slide-up">
          Unifying Our Legacy, Elevating Our Future
        </h2>
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
