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
      <Header textLink="Modelo de negócio" link="/analise-swat" color={color} />
      <ul className="listCards">
        <li className="card">
          1. Captamos as demandas.
        </li>
        <li className="card">
          2. Estimamos as horas e o prazo de entrega.
          </li>
        <li className="card">
          3. Formamos a Squad de membros para desenvolver o módulo.
        </li>
        <li className="card">
          4. Cada membro faz o que gosta de forma simples e inteligente.
        </li>
        <li className="card">
          5. Eles entregam as demandas dentro do prazo estimado por eles.
        </li>
        <li className="card">
          6. Os membros certificados fazem o code review.
        </li>
        <li className="card">
          7. Publicamos o módulo em nosso gerenciador de pacote NPM ou
          compatível.
        </li>
        <li className="card">
          8. Após a entrega do módulo, os valores são repassados aos membros
          envolvidos.
        </li>
      </ul>
      <Button textLink="Contato" link="/contato" fixed={true} color={color} />
    </main>
  );
}
