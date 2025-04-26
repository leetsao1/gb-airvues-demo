"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide8 = () => {
  const phases = [
    {
      title: "Phase 1 – Q1 2025",
      items: [
        "SyncMap",
        "Instructor Database",
        "Monday Integration (Complete)",
      ],
      status: "In Progress",
    },
    {
      title: "Phase 2 – Q2 2025",
      items: [
        "LearnWorlds Integration",
        "Global ID Generation",
        "Certified Instructor & Black Belt Lists",
      ],
      status: "Planned",
    },
    {
      title: "Phase 3 – Q3 2025",
      items: [
        "Full Master Data System",
        "Regional CRM Integrations",
        "Single Sign-On",
        "Advanced Reporting & Automation",
      ],
      status: "Planned",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-teal-900 to-black text-white">
      <LogoHeader />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          How We&apos;ll Get There
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up">
          {phases.map((phase, index) => (
            <div
              key={phase.title}
              className="bg-teal-900/30 p-6 rounded-lg backdrop-blur-sm border border-teal-500/20 animate-fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-teal-300">
                  {phase.title}
                </h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-teal-400">
                    Status:
                  </span>
                  <span className="text-sm text-white/80">{phase.status}</span>
                </div>
              </div>
              <div className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-sm">→</span>
                    </div>
                    <p className="text-lg">{item}</p>
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
