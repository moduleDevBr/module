"use client";

import { useState } from "react";
import Logo from "@/app/_components/Logo";
import Button from "@/app/_components/Button";
import Image from "next/image";
import Header from "../_components/Header";

export default function QuemSomos() {
  const [color, setColor] = useState(true);
  return (
    <main className={`main flexStart ${color ? "white" : "black"}`}>
      <Logo color={color} setColor={setColor} />
      <Header textLink="Quem somos" link="/" color={color} />
      <section className="wrapCards">
        <div className="card">
          <div className="center">
            <Image
              src="/ricardo-comino-franca.png"
              alt="Ricardo Comino França - Membro Fundador"
              width={100}
              height={100}
              className="photoProfile"
            />
            <h2 className="center">Ricardo Comino França</h2>
            <h3 className="center">Membro Fundador</h3>
          </div>
          <p>
            Sou apaixonado por encontrar soluções simples e inteligentes para os
            problemas das pessoas. Mas como na vida as vezes a gente tem que
            fazer o que precisa, também sou designer, desenvolvedor frontend e
            conheço um pouco de backend.
          </p>
          <p>
            Atuo na área de tecnologia desde 2008, dando consultoria de
            tecnologia para grandes clientes, como B3, Confidence Câmbio,
            Enforce, Santander, Volkswagen, IBM, Fapesp, CVC Viagens, entre
            outras.
          </p>
        </div>
        <div className="card">
          <div className="center">
            <Image
              src="/harry-kevin-raddatz.png"
              alt="Harry Kevin Raddatz - Membro Co-Fundador"
              width={100}
              height={100}
              className="photoProfile"
            />
            <h2 className="center">Harry Kevin Raddatz</h2>
            <h3 className="center">Membro Co-Fundador</h3>
          </div>
          <p>
            Sou um desenvolvedor desde de 2015 e já atuei com diversas
            tecnologias, como React, Next.js, Node.js, Python, JAVA, SQL,
            MongoDB, RedisDb, GraphQL, Socket.io, Google Cloud e Azure, AWS
            Elastic Beanstalk, EC2, S3, Lambda, Google App Engine, Kubernetes e
            Azure App Service.
          </p>
          <p>
            Estou sempre aberto a desafios e oportunidades que me permitam
            expandir meu conhecimento e contribuir para projetos inovadores.
          </p>
        </div>
        <div className="card">
          <div className="center">
            <Image
              src="/module-members.png"
              alt="Especialistas - Membros Module"
              width={100}
              height={100}
              className="photoProfile"
            />
            <h2 className="center">Especialistas</h2>
            <h3 className="center">Membros Module</h3>
          </div>
          <p>
            Somos uma rede de especialistas que fazem o que gostam e se unem com
            outros membros para resolver problemas com simplicidade e
            inteligencia.
          </p>
          <p>
            Posso ser um programador frontend ou backend, designer, product
            owner, squad líder, lider técnico, QA, consultor de negócio,
            consultor comercial e o que mais precisar para entregar um projeto
            completo ou só uma parte dele.
          </p>
        </div>
      </section>
      <Button textLink="Ideal" link="/ideal" fixed={true} color={color} />
    </main>
  );
}
