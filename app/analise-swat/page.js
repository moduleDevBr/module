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
            Prazo de entrega longo, pois trabalhamos em hora extra.
          </p>
        </div>
        <div className="card">
          <h2 className="uppercase">
            <strong>Oportunidades (Opportunities)</strong>
          </h2>
          <p className="uppercase">Vender módulos em diversas linguagens.</p>
          <p className="uppercase">
            Vender mão de obra especializada sob demanda.
          </p>
          <p className="uppercase">Vender códigos prontos do github.</p>
          <p className="uppercase">Proporcionar redução de custos.</p>
        </div>
        <div className="card">
          <h2 className="uppercase">
            <strong>Ameaças (Threats)</strong>
          </h2>
          <p className="uppercase">
            Dificuldade em encontrar mão de obra especializada em hora extra.
          </p>
        </div>
      </section>
      <Button textLink="Modelo de negócio" link="/modelo-de-negocio" fixed={true} color={color} />
    </main>
  );
}
