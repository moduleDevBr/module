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
        <div className="card">
          <h2 className="center">Comercial</h2>
          <h3 className="center">Ricardo Comino França</h3>
          <p className="center">(11) 99771-0284</p>
        </div>
        <div className="card">
          <h2 className="center">Tecnologia</h2>
          <h3 className="center">Harry Zevin Raddatz</h3>
          <p className="center">(11) 96442-1025</p>
        </div>
      </section>
    </main>
  );
}
