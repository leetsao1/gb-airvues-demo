"use client";

import React from "react";

const Slide10 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-900 to-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 animate-fade-in">
          Building the Future of GB, Together
        </h1>

        <div className="bg-blue-900/30 p-8 rounded-lg backdrop-blur-sm mb-12 animate-fade-in-delay">
          <p className="text-2xl italic text-center text-white/90">
            &ldquo;Together, we&apos;re not just building a database &mdash;
            we&apos;re creating the digital foundation for Gracie Barra&apos;s
            next century of excellence.&rdquo;
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
