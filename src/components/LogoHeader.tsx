"use client";

import React from "react";
import Image from "next/image";

const LogoHeader = () => {
  return (
    <div className="absolute top-6 w-full flex justify-between items-center px-8 animate-fade-in">
      <div className="w-48">
        <Image
          src="/images/Airvues Sideways.png"
          alt="Airvues Logo"
          width={200}
          height={80}
          className="opacity-80 hover:opacity-100 transition-opacity"
          priority
        />
      </div>
      <div className="w-24">
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
