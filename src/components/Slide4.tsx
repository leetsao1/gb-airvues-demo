"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide4 = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-green-900 to-black text-white">
      <LogoHeader />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          The GB Global Database
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-green-300">
              Platform Features
            </h2>
            <div className="space-y-4">
              {[
                "Integrated with Monday.com, Airtable, LearnWorlds, SmoothComp, GB Members, and Uscreen",
                "Global ID system for every student and instructor",
                "Fully automated promotion approvals and certifications",
                "Real-time dashboards for school owners, students, and executives",
                "Global KPIs for growth, school performance, and instructor development",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-green-900/20 p-4 rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-sm">✓</span>
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-900/30 p-6 rounded-lg backdrop-blur-sm border border-green-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-green-300">
              Key Benefits
            </h2>
            <ul className="space-y-3 text-lg">
              <li>• Streamlined operations across all GB entities</li>
              <li>• Enhanced student and instructor experience</li>
              <li>• Data-driven decision making</li>
              <li>• Improved communication and collaboration</li>
              <li>• Scalable growth management</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide4;
