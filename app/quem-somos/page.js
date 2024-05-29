"use client";

import { useState } from "react";
import Logo from "@/app/_components/Logo";
import Button from "@/app/_components/Button";
import Header from "../_components/Header";

export default function QuemSomos() {
  const [color, setColor] = useState(true);
  return (
    <main className={`main flexStart ${color ? "white" : "black"}`}>
      <Logo color={color} setColor={setColor} />
      <Header textLink="Quem somos" link="/" color={color} />
      <section className={`center ${color ? "white" : "black"}`}>
        <div className="wrapCards">
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
              <h3 className="center">Design e Frontend</h3>
            </div>
            <div>
              <p>
                Sou apaixonado por encontrar soluções simples e inteligentes
                para os problemas das pessoas. Mas como na vida as vezes a gente
                tem que fazer o que precisa, também sou designer de
                experiências, desenvolvedor frontend e conheço um pouco de
                backend.
              </p>
              <p>
                Atuo na área de tecnologia desde 2008, dando consultoria de
                tecnologia para grandes clientes, como B3, Confidence Câmbio,
                Enforce, Santander, Volkswagen, IBM, Fapesp, CVC Viagens, entre
                outras.
              </p>
            </div>
          </div>
          <div className="card gap24">
            <div className="center">
              <img
                src="/harry-kevin-raddatz.png"
                alt="Harry Kevin Raddatz - Membro Co-Fundador"
                width={100}
                height={100}
                className="photoProfile"
              />
              <h2 className="center">Harry Kevin Raddatz</h2>
              <h3 className="center">Backend e IA</h3>
            </div>
            <div>
              <p>
                Sou um desenvolvedor desde de 2015 e já atuei com diversas
                tecnologias, como React, Next.js, Node.js, Python, JAVA, SQL,
                MongoDB, RedisDb, GraphQL, Socket.io, Google Cloud e Azure, AWS
                Elastic Beanstalk, EC2, S3, Lambda, Google App Engine,
                Kubernetes e Azure App Service.
              </p>
              <p>
                Estou sempre aberto a desafios e oportunidades que me permitam
                expandir meu conhecimento e contribuir para projetos inovadores.
              </p>
            </div>
          </div>
          <div className="card gap24">
            <div className="center">
              <img
                src="/kaique-mendes.jpg"
                alt="Gestor de Trafego Pago"
                width={100}
                height={100}
                className="photoProfile"
              />
              <h2 className="center">Kaique Mendes</h2>
              <h3 className="center">Marketing Digital</h3>
            </div>
            <div>
              <p>
                Sou especialista em Gestão de Marketing Digital, com experiência
                na criação de estratégias personalizadas e otimizadas para
                alcançar os objetivos dos clientes. Meu trabalho abrange a
                criação, configuração, análise de dados e otimização de
                campanhas digitais nas plataformas Google, Facebook, Instagram e
                LinkedIn.
              </p>
              <p>
                Com um histórico de gerenciamento de mais de R$ 800.000,00 em
                tráfego pago, garantindo resultados eficazes e mensuráveis.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`center`}>
        <Button textLink="Ideal" link="/ideal" fixed={false} color={color} />
      </section>
    </main>
  );
}
