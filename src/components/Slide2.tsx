"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide2 = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <LogoHeader showOnMobile={false} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          One Team 🤝 One Shield 🛡️ One Database 🗂️
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          <div className="bg-gray-800/40 p-6 rounded-lg backdrop-blur-md border border-gray-600/30 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">
              Our Vision ✨
            </h2>
            <p className="text-lg leading-relaxed text-gray-200">
              Build a centralized, automated, and scalable Gracie Barra Global
              Database that: 🎯
            </p>
          </div>

          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-gray-800/40 p-4 rounded-lg animate-fade-in backdrop-blur-md border border-gray-600/30 shadow-lg"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mt-1 flex-shrink-0 shadow-md">
                  <span className="text-xl">
                    {["🔄", "🌐", "🥋", "📊", "🌳"][index]}
                  </span>
                </div>
                <p className="text-lg text-gray-200">
                  {
                    [
                      "Standardizes data across all schools and entities",
                      "Connects students and instructors globally",
                      "Automates and simplifies belt promotions and certifications",
                      "Powers strategic decisions with real-time global insights",
                      "Honors our lineage by mapping the GB network from student to Master Carlos Gracie Jr.",
                    ][index]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 w-full text-center">
        <a
          href="https://airvues.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-white/40 hover:text-white/60 transition-colors"
        >
          Designed by Airvues
        </a>
      </div>
    </div>
  );
};

export default Slide2;
