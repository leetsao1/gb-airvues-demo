"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide9 = () => {
  const needs = [
    {
      text: "Transfer your Monday.com database to our account to enhance integration with the Global Database and improve efficiency.",
      icon: "🔄",
    },
    {
      text: "One representative from each entity will meet with us to capture specific needs",
      icon: "👥",
    },
    {
      text: "Align on the vision and reinforce the importance of the Global JJ initiative",
      icon: "🎯",
    },
    {
      text: "Target completion for all meetings: End of Q2",
      icon: "📅",
    },
  ];

  const nextSteps = [
    { text: "Schedule regional review sessions", icon: "📊" },
    { text: "Identify key stakeholders and champions", icon: "🌟" },
    { text: "Begin data migration planning", icon: "💾" },
    { text: "Set up training and support systems", icon: "📚" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-red-900 via-rose-800 to-slate-900 text-white">
      <LogoHeader showOnMobile={false} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          Leadership Support Will Bring This Vision to Life ✨
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-orange-300">
              What We Need 🤝
            </h2>
            <div className="space-y-4">
              {needs.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-orange-900/20 p-4 rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <p className="text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-900/30 p-6 rounded-lg backdrop-blur-sm border border-orange-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-orange-300">
              Next Steps 🚀
            </h2>
            <ul className="space-y-3 text-lg">
              {nextSteps.map((step, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-xl">{step.icon}</span>
                  {step.text}
                </li>
              ))}
            </ul>
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

export default Slide9;
