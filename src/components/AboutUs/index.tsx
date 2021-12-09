import React from "react";
import aboutIcon from "../../assets/AboutIcon.svg";
import { Container } from "./styles";

const AboutUs: React.FC = () => {
  return (
    <Container>
      <h1>Sobre Nós</h1>
      <div className="container">
        <div className="content">
          <div className="infos">
            <p>
              Somos uma plataforma online que conecta Mentorandos com Mentores de
              diversos cargos e empresas espalhadas pelo mundo, de forma rápida
              é prática, é o melhor de tudo no conforto da sua casa.
            </p>
            <span>
              “O maior inimigo do conhecimento não é a <br/> ignorância, é a ilusão do
              conhecimento.”<br/>
              Stephen Hawking
            </span>
          </div>

          <img src={aboutIcon} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
