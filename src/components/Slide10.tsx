"use client";

import React from "react";
import Image from "next/image";

const Slide10 = () => {
  const values = [
    { text: "Global Impact", icon: "🌍" },
    { text: "Unified Vision", icon: "🎯" },
    { text: "Future Ready", icon: "🚀" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start p-4 sm:p-8 pb-20 bg-gradient-to-br from-sky-800 via-blue-900 to-indigo-950 text-white">
      {/* Partnership Logos */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 mt-8 sm:mt-16 mb-8 sm:mb-16 animate-fade-in">
        <div className="w-48 sm:w-64 relative">
          <Image
            src="/images/gb-logo.png"
            alt="Gracie Barra Logo"
            width={220}
            height={220}
            className="opacity-90 hover:opacity-100 transition-opacity"
            priority
          />
        </div>
        <div className="text-5xl sm:text-6xl animate-pulse">🤝</div>
        <div className="w-56 sm:w-80 relative">
          <Image
            src="/images/Airvues Sideways.png"
            alt="Airvues Logo"
            width={350}
            height={140}
            className="opacity-90 hover:opacity-100 transition-opacity"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-10 animate-fade-in">
          Together, We Build the Future of Gracie Barra 🚀
        </h1>

        <div className="bg-blue-900/30 p-6 sm:p-8 rounded-lg backdrop-blur-sm border border-blue-500/20 mb-8 sm:mb-10 animate-fade-in-delay">
          <p className="text-xl sm:text-2xl leading-relaxed text-blue-100">
            This partnership between Gracie Barra and Airvues marks a new
            chapter in our journey. Together, we&apos;re not just building a
            database—we&apos;re creating a digital foundation for our global
            community&apos;s future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 animate-fade-in-delayed">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-blue-900/20 p-6 sm:p-8 rounded-lg backdrop-blur-sm border border-blue-500/10 flex flex-col items-center gap-4"
            >
              <span className="text-4xl sm:text-5xl">{value.icon}</span>
              <span className="text-xl sm:text-2xl font-medium text-blue-100">
                {value.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-16 sm:bottom-4 w-full text-center">
        <a
          href="https://airvues.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-white/40 hover:text-white/60 transition-colors"
        >
          Designed by Airvues
        </a>
      </div>
    </div>
  );
};

export default Slide10;
