"use client";

import React from "react";
import LogoHeader from "./LogoHeader";

const Slide3 = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-red-900 to-black text-white">
      <LogoHeader />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          Disconnected Systems Are Holding Us Back
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-red-300">
              Challenges Today
            </h2>
            <div className="space-y-4">
              {[
                "Multiple disconnected systems (Knack, LearnWorlds, Monday, local CRMs)",
                "Manual, delayed promotion approvals",
                "Duplicated work across schools and regions",
                "No unified student or instructor profiles",
                "No centralized visibility into school growth",
                "Lack of real-time data for executive decision-making",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-red-900/20 p-4 rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mt-1 flex-shrink-0">
                    <span className="text-sm">!</span>
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-900/30 p-6 rounded-lg backdrop-blur-sm border border-red-500/20">
            <h2 className="text-2xl font-semibold mb-4 text-red-300">Impact</h2>
            <p className="text-lg leading-relaxed">
              These challenges create inefficiencies, slow down growth, and make
              it difficult to maintain the high standards of the Gracie Barra
              network. The GB Global Database will address these issues head-on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide3;
