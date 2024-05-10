"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [color, setColor] = useState(true);

  return (
    <main className={`main ${color ? "white" : "black"}`}>
      <div className="logo">
        <Image
          src={`${
            color
              ? "/logomarca-module-white.svg"
              : "/logomarca-module-black.svg"
          }`}
          alt="Module Logomarca"
          width={389}
          height={300}
          priority
          onClick={() => setColor(!color)}
        />
      </div>
    </main>
  );
}
