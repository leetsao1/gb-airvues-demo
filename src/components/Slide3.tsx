"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide3 = () => {
  const challenges = [
    {
      text: "Multiple disconnected systems (Knack, LearnWorlds, SmoothComp and U-Screen ects)",
      icon: "🔗",
    },
    { text: "Manual, delayed rank approvals", icon: "⏳" },
    { text: "Duplicated work across GBJJ regional offices", icon: "📋" },
    {
      text: "No unified student, instructor or school owner profiles",
      icon: "👥",
    },
    { text: "No centralized visibility into school growth", icon: "📈" },
    {
      text: "Lack of real-time data for executive decision-making",
      icon: "⚡",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-rose-800 via-red-900 to-slate-900 text-white">
      <LogoHeader showOnMobile={false} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          What is Holding Us Back ⚠️
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-rose-100">
              Challenges Today 🎯
            </h2>
            <div className="space-y-4">
              {challenges.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-rose-900/40 p-4 rounded-lg animate-fade-in backdrop-blur-md border border-rose-600/30 shadow-lg"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-rose-700 flex items-center justify-center mt-1 flex-shrink-0 shadow-md">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <p className="text-lg text-rose-100">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-rose-900/40 p-6 rounded-lg backdrop-blur-md border border-rose-600/30 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-rose-100">
              Impact 💥
            </h2>
            <p className="text-lg leading-relaxed text-rose-100">
              These challenges create inefficiencies, slow down growth, make it
              difficult to maintain the high standards of the Gracie Barra
              network and also undermines the Gracie Barra scalability. The GB
              Global Database will address these issues head-on.
            </p>
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

export default Slide3;
