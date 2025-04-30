"use client";

import React, { useState, useEffect } from "react";
import LogoHeader from "./LogoHeader";

interface HighlightItem {
  text: string;
  icon: string;
}

interface FeatureItem {
  text: string;
  icon: string;
}

const Slide6 = () => {
  const [showMap, setShowMap] = useState(false);

  const highlights: HighlightItem[] = [
    { text: "Live GB World Map", icon: "🌎" },
    { text: "Global GB Database", icon: "🗄️" },
    {
      text: "Seamless instructor promotion and certificate approval",
      icon: "📜",
    },
    {
      text: "Global Black Belts Lists, Global ICP Certified Instructors List",
      icon: "🥋",
    },
    { text: "LearnWorlds Integration", icon: "🔄" },
  ];

  const features: FeatureItem[] = [
    { text: "Real-time data visualization", icon: "📊" },
    { text: "Interactive school location mapping", icon: "📍" },
    { text: "Dynamic user role management", icon: "👥" },
    { text: "Automated workflows", icon: "⚡" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight * 0.4) {
        setShowMap(true);
      } else {
        setShowMap(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-[200vh] bg-gradient-to-br from-cyan-500 via-teal-600 to-teal-700 text-white overflow-x-hidden">
      {/* First Section - Text Content */}
      <div className="min-h-screen flex flex-col items-center justify-start sm:sticky sm:top-0">
        <div className="w-full pt-8">
          <LogoHeader showOnMobile={true} />
        </div>

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mt-16 sm:mt-20">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12 text-center animate-fade-in">
              Setting the Vision into Action 🚀
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 animate-slide-up">
              {/* Left Column - Highlights */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                  Highlights ✨
                </h2>
                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 sm:gap-4 bg-teal-600/40 p-4 sm:p-5 rounded-lg opacity-0 animate-fade-in backdrop-blur-md border border-cyan-200/30 shadow-lg"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-400 flex items-center justify-center mt-1 flex-shrink-0 shadow-md">
                        <span className="text-xl sm:text-2xl">{item.icon}</span>
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-white">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Interactive Features */}
              <div
                className="bg-teal-600/40 p-5 sm:p-6 md:p-8 rounded-lg backdrop-blur-md border border-cyan-200/30 shadow-lg opacity-0 animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-white">
                  Interactive Features 💫
                </h2>
                <ul className="space-y-3 sm:space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl">
                        {feature.icon}
                      </span>
                      <span className="text-base sm:text-lg md:text-xl text-white">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 text-center text-base sm:text-lg text-cyan-50 animate-bounce">
              <p>Scroll down to explore our global network 🌐</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - World Map */}
      <div
        className={`min-h-screen sm:sticky sm:top-0 flex flex-col items-center justify-center transition-all duration-1000 ${
          showMap ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <div
          className="w-full h-[85vh] sm:h-screen flex flex-col justify-center opacity-0 animate-fade-in px-4 sm:px-8"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 text-center">
            Live GB World Map 🗺️
          </h2>
          <div className="bg-black/30 rounded-none sm:rounded-lg overflow-hidden flex-grow backdrop-blur-md border-y sm:border border-cyan-200/20 shadow-lg">
            <iframe
              src="https://gracie-barra-map.vercel.app/"
              className="w-full h-full"
              style={{ border: "none" }}
              title="Gracie Barra World Map"
              scrolling="yes"
              allow="fullscreen"
            />
          </div>
          <div className="mt-4 sm:mt-6 text-center text-base sm:text-lg text-cyan-50">
            <p>
              Explore our global network of schools and access comprehensive
              data about our community 🌍
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide6;
