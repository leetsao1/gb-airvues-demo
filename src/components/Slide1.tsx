"use client";

import React from "react";
import Image from "next/image";
import { Particles } from "@tsparticles/react";

const Slide1 = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4 pb-20 sm:p-8 bg-gradient-to-br from-blue-950 via-blue-800 to-indigo-900 text-white">
      <Particles className="absolute inset-0 z-0" />
      <div className="max-w-4xl mx-auto text-center relative z-10 w-full px-4">
        <div className="mb-8 sm:mb-12 animate-scale animate-breathing">
          <Image
            src="/images/gb-logo.png"
            alt="Gracie Barra Logo"
            width={400}
            height={400}
            className="mx-auto w-[180px] sm:w-[280px] md:w-[380px] object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 sm:mb-8 animate-scale text-shadow animate-fade-in">
          Welcome to the Gracie Barra Global Database 🌎
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto animate-fade-in-delay text-shadow">
          A unified platform connecting our global community 🤝, preserving our
          legacy 🏆, and building our future 🚀
        </p>
        <div className="bg-blue-900/40 p-6 sm:p-8 rounded-lg backdrop-blur-md border border-blue-600/30 shadow-lg animate-fade-in-delayed">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-blue-100 text-shadow">
            &ldquo;Today we introduce a transformational initiative that
            connects everything and everyone in the Gracie Barra
            network&mdash;students 🎓, instructors 🥋, schools 🏢, and
            leadership&mdash;into a single, living, global system.&rdquo;
          </p>
          <p className="mt-4 text-right text-lg text-blue-200 text-shadow">
            - Prof. Flavio Almeida
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
