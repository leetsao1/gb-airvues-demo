"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide2 = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-900 to-black text-white">
      <LogoHeader />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          One Team, One System, One Source of Truth
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          <div className="bg-purple-900/30 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-purple-300">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed">
              Build a centralized, automated, and scalable Gracie Barra Global
              Database that:
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Standardizes data across all schools and entities",
              "Connects students and instructors globally",
              "Automates and simplifies belt promotions and certifications",
              "Powers strategic decisions with real-time global insights",
              "Honors our lineage by mapping the GB network from student to Master Carlos Gracie Jr.",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-purple-900/20 p-4 rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-sm">✓</span>
                </div>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
