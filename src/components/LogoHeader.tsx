"use client";

import React from "react";
import Image from "next/image";

interface LogoHeaderProps {
  showOnMobile?: boolean;
}

const LogoHeader = ({ showOnMobile = false }: LogoHeaderProps) => {
  return (
    <div
      className={`absolute top-4 sm:top-6 w-full max-w-6xl mx-auto left-0 right-0 flex justify-between items-center px-4 sm:px-8 animate-fade-in ${
        !showOnMobile ? "hidden sm:flex" : "flex"
      }`}
    >
      <div className="w-24 sm:w-48">
        <Image
          src="/images/Airvues Sideways.png"
          alt="Airvues Logo"
          width={200}
          height={80}
          className="opacity-80 hover:opacity-100 transition-opacity"
          priority
        />
      </div>
      <div className="w-12 sm:w-24">
        <Image
          src="/images/gb-logo.png"
          alt="Gracie Barra Logo"
          width={100}
          height={100}
          className="opacity-80 hover:opacity-100 transition-opacity"
          priority
        />
      </div>
    </div>
  );
};

export default LogoHeader;
