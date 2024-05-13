"use client";

import { useState } from "react";

const Logo = ({ large, color, setColor }) => {
  const [colorState, setColorState] = useState(color);
  return (
    <div className="logo">
      <img
        src={
          colorState
            ? "/logomarca-module-white.svg"
            : "/logomarca-module-black.svg"
        }
        alt="Module Logomarca"
        width={large ? 500 : 250}
        height={large ? 385 : 204.25}
        onClick={() => {
          setColorState(!colorState);
          setColor(!colorState);
        }}
      />
    </div>
  );
};

export default Logo;
