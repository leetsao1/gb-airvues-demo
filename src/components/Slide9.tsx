"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide9 = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-orange-900 to-black text-white">
      <LogoHeader />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          Leadership Support Will Bring This Vision to Life
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-orange-300">
              What We Need
            </h2>
            <div className="space-y-4">
              {[
                "Endorsement of the roadmap",
                "Active participation in upcoming regional onboarding sessions",
                "Strategic alignment across entities",
                "Feedback and continuous collaboration",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-orange-900/20 p-4 rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-sm">🤝</span>
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-900/30 p-6 rounded-lg backdrop-blur-sm border border-orange-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-orange-300">
              Next Steps
            </h2>
            <ul className="space-y-3 text-lg">
              <li>• Schedule regional review sessions</li>
              <li>• Identify key stakeholders and champions</li>
              <li>• Begin data migration planning</li>
              <li>• Set up training and support systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide9;
