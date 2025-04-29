"use client";

import React from "react";
import Image from "next/image";
import { Particles } from "@tsparticles/react";

const Slide1 = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-8 background text-white">
      <Particles className="absolute inset-0 z-0" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 animate-scale animate-breathing">
          <Image
            src="/images/gb-logo.png"
            alt="Gracie Barra Logo"
            width={400}
            height={400}
            className="mx-auto"
            priority
          />
        </div>
        <h1 className="text-6xl font-bold text-white mb-8 animate-scale text-shadow animate-fade-in">
          Welcome to the Gracie Barra Global Database
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-delay text-shadow">
          A unified platform connecting our global community, preserving our
          legacy, and building our future
        </p>
        <div className="bg-blue-900/30 p-8 rounded-lg backdrop-blur-sm animate-fade-in-delayed">
          <p className="text-xl leading-relaxed text-shadow">
            &ldquo;Today we introduce a transformational initiative that
            connects everything and everyone in the Gracie Barra
            network&mdash;students, instructors, schools, and
            leadership&mdash;into a single, living, global system.&rdquo;
          </p>
          <p className="mt-4 text-right text-blue-300 text-shadow">
            - Flavio Almeida
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
