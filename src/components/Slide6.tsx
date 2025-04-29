"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide6 = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-indigo-900 to-black text-white">
      <LogoHeader />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          Setting the Vision into Action
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-indigo-300">
              Highlights
            </h2>
            <div className="space-y-4">
              {[
                "Live GB World Map",
                "Seamless instructor promotion and certificate approval",
                "Global Black Belts Lists, Global ICP Certified Instructors List",
                "LearnWorlds Integration",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-indigo-900/20 p-4 rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-sm">🎯</span>
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-indigo-900/30 p-6 rounded-lg backdrop-blur-sm border border-indigo-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-300">
              Interactive Features
            </h2>
            <ul className="space-y-3 text-lg">
              <li>• Real-time data visualization</li>
              <li>• Interactive school location mapping</li>
              <li>• Dynamic user role management</li>
              <li>• Automated workflowss</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
