"use client";

import { useState } from "react";
import Logo from "@/app/_components/Logo";
import Header from "../_components/Header";

export default function Contato() {
  const [color, setColor] = useState(true);
  return (
    <main className={`main flexStart ${color ? "white" : "black"}`}>
      <Logo color={color} setColor={setColor} />
      <Header textLink="Contato" link="/modelo-de-negocio" color={color} />
      <section className="wrapCards">
        <div className="card gap24">
          <div className="center">
            <img
              src="/ricardo-comino-franca.png"
              alt="Ricardo Comino França - Membro Fundador"
              width={100}
              height={100}
              className="photoProfile"
            />
            <h2 className="center">Ricardo Comino França</h2>
            <h3 className="center">Membro Fundador</h3>
          </div>
          <p className="center">(11) 99771-0284</p>
        </div>
      </section>
    </main>
  );
}
