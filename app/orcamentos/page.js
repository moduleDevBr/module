"use client";

import { useState } from "react";
import Logo from "@/app/_components/Logo";
import Button from "@/app/_components/Button";
import Header from "../_components/Header";

export default function Orcamentos() {
  const [color, setColor] = useState(true);
  return (
    <main className={`main flexStart ${color ? "white" : "black"}`}>
      <Logo color={color} setColor={setColor} />
      <Header textLink="Orçamentos" link="/ideal" color={color} />
      <section className="center">
        <p className="uppercase">
          O que você deseja orçar?
        </p>
      </section>
      <Button textLink="Contato" link="/contato" fixed={true} color={color} />
    </main>
  );
}
