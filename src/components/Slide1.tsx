"use client";

import React from "react";
import Image from "next/image";

const Slide1 = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-900 to-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12 animate-fade-in">
          <Image
            src="/images/gb-logo.png"
            alt="Gracie Barra Logo"
            width={400}
            height={400}
            className="mx-auto"
            priority
          />
        </div>
        <h1 className="text-6xl font-bold text-white mb-8 animate-fade-in">
          Welcome to the Gracie Barra Global Database
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-delay">
          A unified platform connecting our global community, preserving our
          legacy, and empowering our future
        </p>
        <div className="bg-blue-900/30 p-8 rounded-lg backdrop-blur-sm animate-fade-in-delayed">
          <p className="text-xl leading-relaxed">
            &ldquo;Today we introduce a transformational initiative that
            connects everything and everyone in the Gracie Barra
            network&mdash;students, instructors, schools, and
            leadership&mdash;into a single, living, global system. Our goal is
            to create excitement and alignment as we showcase the strategy, the
            technology, and the impact of the GB Global Database.&rdquo;
          </p>
          <p className="mt-4 text-right text-blue-300">- Flavio Almeida</p>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
