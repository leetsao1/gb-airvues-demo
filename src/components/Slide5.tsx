"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide5 = () => {
  const airvuesTeam = [
    { text: "Lee Tsao – Lead Architect", icon: "👨‍💻" },
    { text: "Enrique Torreblanca – Systems Developer", icon: "🛠️" },
    { text: "David Aguilo – Project Manager", icon: "📊" },
  ];

  const gbTeam = [
    { text: "Flavio Almeida – Vision and Strategic Oversight", icon: "🥋" },
    { text: "Amanda Machado – Project Operations Lead", icon: "👩‍💼" },
    { text: "Support Teams – GBNA, GBBR, GBEU, GBO, and others", icon: "🌎" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-amber-700 via-amber-800 to-stone-800 text-white">
      <LogoHeader showOnMobile={false} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          Built by Experts 🛠️, Guided by GB 🌟
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-amber-200">
              Airvues Team 💻
            </h2>
            <div className="space-y-4">
              {airvuesTeam.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-amber-900/30 p-4 rounded-lg animate-fade-in backdrop-blur-sm border border-amber-600/20 shadow-lg"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center mt-1 flex-shrink-0 shadow-md">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <p className="text-lg text-amber-100">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-amber-200">
              Gracie Barra Project Team ⭐
            </h2>
            <div className="space-y-4">
              {gbTeam.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-amber-900/30 p-4 rounded-lg animate-fade-in backdrop-blur-sm border border-amber-600/20 shadow-lg"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center mt-1 flex-shrink-0 shadow-md">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <p className="text-lg text-amber-100">{item.text}</p>
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
