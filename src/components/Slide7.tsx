"use client";

import React from "react";

const Slide7 = () => {
  const benefits = {
    students: [
      "A single digital identity across all GB systems",
      "Faster belt promotions and certificate access",
      "Public visibility of rank, lineage, and accomplishments",
      "Integrated access to training, competition, and education",
    ],
    owners: [
      "One portal to manage school profile, students, and promotions",
      "Accurate student records and automated approvals",
      "Better alignment with HQ processes and faster support",
    ],
    professors: [
      "Visibility into lineage and student development",
      "Fewer administrative burdens—more time on the mats",
      "Tools to validate and strengthen their role in the GB legacy",
    ],
    executives: [
      "Real-time global KPIs and dashboards",
      "Standardized school and instructor data",
      "Faster decisions with high-quality data",
      "Strategic insights across divisions",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-pink-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center animate-fade-in">
          What This Means for You
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-slide-up">
          {Object.entries(benefits).map(([audience, items], index) => (
            <div key={audience} className="space-y-4">
              <h2 className="text-2xl font-semibold text-pink-300 capitalize">
                For {audience}
              </h2>
              <div className="space-y-3">
                {items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start gap-3 bg-pink-900/20 p-4 rounded-lg animate-fade-in"
                    style={{
                      animationDelay: `${(index * 4 + itemIndex) * 0.1}s`,
                    }}
                  >
                    <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center mt-1 flex-shrink-0">
                      <span className="text-sm">✨</span>
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

export default Slide7;
