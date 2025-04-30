"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide4 = () => {
  const features = [
    {
      text: "Integrated with Monday.com, Airtable, LearnWorlds, SmoothComp, GB Members, and Uscreen",
      icon: "🔄",
    },
    { text: "Develop an efficient GB Global ID process", icon: "🆔" },
    {
      text: "Fully automated rank verification and certification process",
      icon: "✨",
    },
    {
      text: "Build a Black Belts and ICP certified instructors lists",
      icon: "🥋",
    },
    {
      text: "Real-time dashboards for school owners, students, and the global executive team",
      icon: "📊",
    },
    {
      text: "Global KPIs for growth, school performance, and instructor development",
      icon: "📈",
    },
  ];

  const benefits = [
    { text: "Streamlined operations across all GB entities", icon: "⚡" },
    {
      text: "Enhanced student, instructor and school owner experience",
      icon: "🌟",
    },
    { text: "Data-driven decision making", icon: "🎯" },
    { text: "Improved communication and collaboration", icon: "🤝" },
    { text: "Scalable growth management", icon: "📱" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-emerald-800 via-teal-900 to-cyan-950 text-white">
      <LogoHeader showOnMobile={false} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          The GB Global Database 🌐
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-teal-100">
              Development Features ⚡
            </h2>
            <div className="space-y-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-teal-900/40 p-4 rounded-lg animate-fade-in backdrop-blur-md border border-teal-600/30 shadow-lg"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-teal-700 flex items-center justify-center mt-1 flex-shrink-0 shadow-md">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <p className="text-lg text-teal-100">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-teal-900/40 p-6 rounded-lg backdrop-blur-md border border-teal-600/30 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-teal-100">
              Key Benefits 🎯
            </h2>
            <ul className="space-y-3 text-lg text-teal-100">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-xl">{benefit.icon}</span>
                  {benefit.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
