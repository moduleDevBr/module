"use client";

import { useState } from "react";
import Logo from "@/app/_components/Logo";
import Button from "@/app/_components/Button";
import Header from "../_components/Header";

export default function Ideal() {
  const [color, setColor] = useState(true);
  return (
    <main className={`main flexStart ${color ? "white" : "black"}`}>
      <Logo color={color} setColor={setColor} />
      <Header textLink="Ideal" link="/quem-somos" color={color} />
      <section className="center">
        <p className="uppercase">
          Que cada um possa fazer o que gosta, com simplicidade e inteligência.
        </p>
      </section>
      <Button textLink="Análise swat" link="/analise-swat" fixed={true} color={color} />
    </main>
  );
}
