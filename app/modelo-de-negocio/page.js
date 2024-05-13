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
        <li className="card">1. Captamos as demandas.</li>
        <li className="card">2. Estimamos as horas e o prazo de entrega.</li>
        <li className="card">
          3. Formamos a SQUAD com os membros especialistas.
        </li>
        <li className="card">
          4. Cada membro faz o que gosta dentro da sua especialidade.
        </li>
        <li className="card">
          5. As demandas são entregues dentro do prazo estimado por cada
          especialista.
        </li>
        <li className="card">
          6. Os membros certificados fazem o code review e a validação do
          módulo.
        </li>
        <li className="card">
          7. Publicamos o módulo em nosso gerenciador de pacote NPM privado.
        </li>
        <li className="card">
          8. Geramos o token ao comprador, emitimos a nota fiscal e repassamos
          os valores aos membros envolvidos.
        </li>
      </ul>
      <Button textLink="Contato" link="/contato" fixed={true} color={color} />
    </main>
  );
}
