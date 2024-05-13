"use client";

import { useState } from "react";
import Logo from "@/app/_components/Logo";
import Button from "@/app/_components/Button";
import Header from "../_components/Header";

export default function AnaliseSwot() {
  const [color, setColor] = useState(true);
  return (
    <main className={`main flexStart ${color ? "white" : "black"}`}>
      <Logo color={color} setColor={setColor} />
      <Header textLink="Análise SWAT" link="/ideal" color={color} />
      <section className="wrapCards smallWrap">
        <div className="card">
          <h2 className="uppercase">
            <strong>Forças (Strengths)</strong>
          </h2>
          <p className="uppercase">Enxergar oportunidades.</p>
          <p className="uppercase">
            Resolver problemas com inteligência, pois só o esforço não basta.
          </p>
          <p className="uppercase">
            Testar as soluções e colocá-las em prática.
          </p>
        </div>

        <div className="card">
          <h2 className="uppercase">
            <strong>Fraquezas (Weaknesses)</strong>
          </h2>
          <p className="uppercase">
            Prazo de entrega longo para os primeiros módulos, pois trabalhamos
            em hora extra.
          </p>
        </div>

        <div className="card">
          <h2 className="uppercase">
            <strong>Oportunidades (Opportunities)</strong>
          </h2>
          <p className="uppercase"> Fazer uma única vez e vender várias.</p>
          <p className="uppercase">Módulos em diversas linguagens.</p>
          <p className="uppercase">Mão de obra especializada sob demanda.</p>
          <p className="uppercase">Vender customizações de módulos prontos.</p>
          <p className="uppercase">Vender módulos em diversas linguagens.</p>
        </div>

        <div className="card">
          <h2 className="uppercase">
            <strong>Ameaças (Threats)</strong>
          </h2>
          <p className="uppercase">Burocrácias trabalhistas. </p>
          <p className="uppercase">Desenvolvedores sobrecarregados.</p>
        </div>
      </section>
      <Button
        textLink="Modelo de negócio"
        link="/modelo-de-negocio"
        fixed={true}
        color={color}
      />
    </main>
  );
}
