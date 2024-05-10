"use client";

import { useState } from "react";
import Logo from "@/app/_components/Logo";
import Button from "@/app/_components/Button";
import Header from "../_components/Header";

export default function ModeloDeNegocio() {
  const [color, setColor] = useState(true);
  return (
    <main className={`main flexStart ${color ? "white" : "black"}`}>
      <Logo color={color} setColor={setColor} />
      <Header textLink="Análise SWAT" link="/ideal" color={color} />
      <ul className="listCards">
        <li className="card">1. Captamos as demandas</li>
        <li className="card">2. Estimamos as horas e o prazo de entrega</li>
        <li className="card">3. Colocamos o módulo em nosso backlog </li>
        <li className="card">
          4. Os membros da module podem pegar uma demanda por vez
        </li>
        <li className="card">
          5. Eles entregam no prazo ou perdem a demanda e a prioridade
        </li>
        <li className="card">6. Os membros certificados fazem o code review</li>
        <li className="card">
          7. Colocamos o módulo a venda em nossa plataforma
        </li>
        <li className="card">
          8. Após a venda, os valores são repassados aos membros envolvidos
        </li>
      </ul>
      <Button
        textLink="Contato"
        link="/contato"
        fixed={true}
        color={color}
      />
    </main>
  );
}
