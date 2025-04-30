"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide7 = () => {
  const benefits = {
    students: {
      icon: "🎓",
      items: [
        { text: "A single digital identity across all GB systems", icon: "🆔" },
        { text: "Faster belt promotions and certificate access", icon: "🥋" },
        {
          text: "Public visibility of rank, lineage, and accomplishments",
          icon: "🏆",
        },
        {
          text: "Integrated access to training, competition, and education",
          icon: "📚",
        },
      ],
    },
    owners: {
      icon: "👔",
      items: [
        {
          text: "One portal to manage school profile, students, and promotions",
          icon: "🏢",
        },
        {
          text: "Accurate student records and automated approvals",
          icon: "✅",
        },
        {
          text: "Better alignment with HQ processes and faster support",
          icon: "🤝",
        },
      ],
    },
    professors: {
      icon: "👨‍🏫",
      items: [
        { text: "Visibility into lineage and student development", icon: "👥" },
        {
          text: "Fewer administrative burdens—more time on the mats",
          icon: "⏰",
        },
        {
          text: "Tools to validate and strengthen their role in the GB legacy",
          icon: "🛠️",
        },
      ],
    },
    executives: {
      icon: "👨‍💼",
      items: [
        { text: "Real-time global KPIs and dashboards", icon: "📊" },
        { text: "Standardized school and instructor data", icon: "📋" },
        { text: "Faster decisions with high-quality data", icon: "⚡" },
        { text: "Strategic insights across divisions", icon: "🎯" },
      ],
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-16 sm:pt-24 p-4 sm:p-8 pb-20 bg-gradient-to-br from-emerald-800 via-teal-900 to-cyan-950 text-white">
      <LogoHeader showOnMobile={false} />

      <div className="w-full max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-10 text-center animate-fade-in">
          What This Means for You 💫
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 animate-slide-up pb-24">
          {Object.entries(benefits).map(([audience, section], index) => (
            <div key={audience} className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl font-semibold text-teal-200 capitalize flex items-center gap-3">
                <span className="text-3xl sm:text-4xl">{section.icon}</span>
                For {audience}
              </h2>
              <div className="space-y-3 sm:space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start gap-4 bg-teal-900/40 p-5 sm:p-6 rounded-lg animate-fade-in backdrop-blur-sm border border-teal-600/20"
                    style={{
                      animationDelay: `${(index * 4 + itemIndex) * 0.1}s`,
                    }}
                  >
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-teal-600 flex items-center justify-center mt-1 flex-shrink-0 shadow-md">
                      <span className="text-2xl sm:text-3xl">{item.icon}</span>
                    </div>
                    <p className="text-xl sm:text-2xl text-teal-100 leading-relaxed">
                      {item.text}
                    </p>
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

export default Slide7;
