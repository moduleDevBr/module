"use client";

import { useState } from "react";
import Logo from "@/app/_components/Logo";
import Button from "@/app/_components/Button";
import Header from "../_components/Header";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

export default function Projetos() {
  const [color, setColor] = useState(true);
  return (
    <main className={`main flexStart ${color ? "white" : "black"}`}>
      <Logo color={color} setColor={setColor} />
      <Header textLink="Projetos" link="/ideal" color={color} />
      <section className={`center ${color ? "white" : "black"}`}>
        <div className="carousel">
          <ScrollingCarousel className="wrap_carousel">
            <div className="item_carousel">
              <div className="logo">
                <img src="/b3-logo.svg" alt="Logo B3" />
              </div>
              <div className="textCarousel">
                <p className="text">
                  <b>Cliente</b>
                  <br />
                  Bolsa de Valores de São Paulo
                </p>
                <p className="text">
                  <b>Projeto</b>
                  <br />
                  Tesouro Direto Coletivo
                </p>
                <p className="text">
                  <b>Descrição </b>
                  <br />
                  Projeto de iniciativa do Tesouro Direto Nacional em parceria
                  com a B3, viabilizando uma forma de financiamento coletivo com
                  títulos do Tesouro Nacional, para fins de Educação.
                </p>
                <p className="text">
                  <b>Trabalho realizado</b>
                  <br />
                  Design de experiência e design de interface, através da Deal
                  Tecnologies
                </p>
                <p className="text">
                  <b>Link do projeto</b>
                  <br />
                  <a
                    href="https://www.tesourodireto.com.br/tesouro-direto-coletivo/"
                    target="_blank"
                  >
                    https://www.tesourodireto.com.br/tesouro-direto-coletivo/
                  </a>
                </p>
              </div>
            </div>
            <div className="item_carousel">
              <div className="logo">
                <img src="/logo-vw.svg" alt="Logo Volkswagen" height={120} />
              </div>
              <div className="textCarousel">
                <p className="text">
                  <b>Cliente</b>
                  <br />
                  Volkswagen Brasil
                </p>
                <p className="text">
                  <b>Projeto</b>
                  <br />
                  E-commerce em Salesforce
                </p>
                <p className="text">
                  <b>Descrição </b>
                  <br />
                  Projeto de criação de loja virtual com pré-venda e reservas de
                  veículos da Volkswagem Brasil.
                </p>
                <p className="text">
                  <b>Trabalho realizado</b>
                  <br />
                  Programação Frontend e integração com ERP Salesforce da
                  Volkswagem Brasil.
                </p>
                <p className="text">
                  <b>Responsável</b>
                  <br />
                  Ricardo Comino França, através da IBM.
                </p>
                <p className="text">
                  <b>Link do projeto</b>
                  <br />
                  <a
                    href="https://www.vw.com.br/pt/configurador.html"
                    target="_blank"
                  >
                    https://www.vw.com.br/pt/configurador.html
                  </a>
                </p>
              </div>
            </div>
            <div className="item_carousel">
              <div className="logo">
                <img
                  src="/logo_travelex-confidence-cambio.svg"
                  alt="Logo Travelex | Confidence Câmbio"
                />
              </div>
              <div className="textCarousel">
                <p className="text">
                  <b>Cliente</b>
                  <br />
                  Banco Travelex | Confidence Câmbio
                </p>
                <p className="text">
                  <b>Projeto</b>
                  <br />
                  Novo APP Mobile
                </p>
                <p className="text">
                  <b>Descrição </b>
                  <br />
                  Projeto de criação do novo aplicativo mobile com a finalidade
                  de realizar vendas de moedas estrangeiras e transferências
                  internacionais de valores para a Confidence Câmbio.
                </p>
                <p className="text">
                  <b>Trabalho realizado</b>
                  <br />
                  Design de experiência e design de interface, através da
                  consultoria Deal Tecnologies
                </p>
                <p className="text">
                  <b>Responsável</b>
                  <br />
                  Ricardo Comino França
                </p>
                <p className="text">
                  <b>Link do projeto</b>
                  <br />
                  <a
                    href="https://play.google.com/store/apps/details?id=br.com.confidencecambio.payments"
                    target="_blank"
                  >
                    https://play.google.com/store/apps/details?id=br.com.confidencecambio.payments
                  </a>
                </p>
              </div>
            </div>
            <div className="item_carousel">
              <div className="logo">
                <img src="/logo_maria-bonita.svg" alt="Logo Maria Bonita" />
              </div>
              <div className="textCarousel">
                <p className="text">
                  <b>Cliente</b>
                  <br />
                  Maria Bonita
                </p>
                <p className="text">
                  <b>Projeto</b>
                  <br />
                  Sistema de agendamentos e gestão financeira para autônomos
                </p>
                <p className="text">
                  <b>Descrição </b>
                  <br />
                  Projeto para profissionais autônomos poderem controlar as
                  despesas, divulgar os serviços, agendar de forma rápida e
                  intuitiva, além de fazer o lançamento de receitas automático e
                  apresentar os resultados.
                </p>
                <p className="text">
                  <b>Trabalho realizado</b>
                  <br />
                  Design, Frontend, Backend e Banco de Dados.
                </p>
                <p className="text">
                  <b>Responsável</b>
                  <br />
                  Ricardo Comino França
                </p>
                <p className="text">
                  <b>Link do projeto</b>
                  <br />
                  <a href="https://mariabonita.app.br/" target="_blank">
                    https://mariabonita.app.br/
                  </a>
                </p>
              </div>
            </div>
          </ScrollingCarousel>
        </div>
      </section>
      <section className={`center`}>
        <Button
          textLink="Contato"
          link="/contato"
          fixed={false}
          color={color}
        />
      </section>
    </main>
  );
}
