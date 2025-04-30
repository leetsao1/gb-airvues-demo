"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide8 = () => {
  const phases = [
    {
      title: "Phase 1 – Q1 2025",
      icon: "🚀",
      items: [
        { text: "SyncMap", icon: "🗺️" },
        { text: "Localization Database", icon: "🌎" },
        { text: "Monday Integration", icon: "🗂️" },
      ],
      status: "Completed",
      statusIcon: "✅",
    },
    {
      title: "Phase 2 – Q2 2025",
      icon: "🔄",
      items: [
        { text: "LearnWorlds Integration", icon: "🔗" },
        { text: "Global ID Generation", icon: "🆔" },
        { text: "Certified Instructor & Black Belt Lists", icon: "🥋" },
      ],
      status: "In Progress",
      statusIcon: "⏳",
    },
    {
      title: "Phase 3 – Q3 2025",
      icon: "🎯",
      items: [
        { text: "Full GB Database", icon: "💾" },
        { text: "Regional Integrations", icon: "🌐" },
        { text: "Single Sign-On", icon: "🔑" },
        { text: "Advanced Reporting & Automation", icon: "📊" },
      ],
      status: "Planned",
      statusIcon: "📋",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-950 text-white">
      <LogoHeader showOnMobile={false} />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          How We&apos;ll Get There 🎯
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          {phases.map((phase, index) => (
            <div
              key={phase.title}
              className="bg-teal-950/30 p-6 rounded-lg backdrop-blur-sm border border-teal-600/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex flex-col gap-2 mb-4">
                <h2 className="text-2xl font-semibold text-teal-200 flex items-center gap-2">
                  <span>{phase.icon}</span>
                  {phase.title}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-teal-300 uppercase tracking-wider">
                    Status:
                  </span>
                  <span
                    className={`text-sm px-3 py-1 rounded-full flex items-center gap-1.5 ${
                      phase.status === "In Progress"
                        ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                        : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    }`}
                  >
                    <span>{phase.statusIcon}</span>
                    {phase.status}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <p className="text-lg">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide8;
