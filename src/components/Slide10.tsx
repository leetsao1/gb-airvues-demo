"use client";

import React from "react";

const Slide10 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-900 to-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 animate-fade-in">
          Building the Future of GB, Together
        </h1>

        <div className="bg-blue-900/30 p-8 rounded-lg backdrop-blur-sm border border-blue-500/20 animate-fade-in-delayed">
          <p className="text-xl leading-relaxed">
            "This isn't just about technology. It's about our mission, our
            people, and our legacy. The Gracie Barra Global Database will
            connect our past, present, and future—creating a stronger, more
            unified, and more efficient organization. Together, we will elevate
            the Gracie Barra experience for every student, professor, and school
            in the world."
          </p>
        </div>

        <div
          className="mt-12 flex justify-center gap-8 animate-fade-in-delayed"
          style={{ animationDelay: "1s" }}
        >
          <div className="text-center">
            <div className="text-4xl mb-2">🌍</div>
            <p className="text-lg">Global Impact</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🤝</div>
            <p className="text-lg">Unified Vision</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🚀</div>
            <p className="text-lg">Future Ready</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide10;
