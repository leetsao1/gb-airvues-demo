"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide5 = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-yellow-900 to-black text-white">
      <LogoHeader />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          Built by Experts, Guided by GB
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-yellow-300">
              Airvues Team
            </h2>
            <div className="space-y-4">
              {[
                "Lee Tsao – Lead Architect",
                "Enrique Torreblanca – Systems Developer",
                "David Aguilo – Project Manager",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-yellow-900/20 p-4 rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-sm">👨‍💻</span>
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-yellow-300">
              Gracie Barra Core Team
            </h2>
            <div className="space-y-4">
              {[
                "Flavio Almeida – Vision and Strategic Oversight",
                "Amanda Machado – Project Operations Lead",
                "Regional Support Teams – GBNA, GBBR, GBEU, GB Online, and more",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-yellow-900/20 p-4 rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-sm">👥</span>
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide5;
