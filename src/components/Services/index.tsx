import React from "react";

import { Container } from "./styles";

const Services: React.FC = () => {
  return (
    <Container>
      <h1 id="services">O que oferecemos?</h1>
      <div className="content">
        <div className="card">
          <h2>Mentores</h2>
          <p>
            Oferecemos uma plataforma host para que seja realizada mentorias de
            diversos assuntos como: Soft Skils, Hard Skils, Carreira entre
            outros, é claro tudo isso remunerado da forma em que você achar
            melhor, você dar seu preço por hora o que pedimos em troca é apenas
            uma taxa de 5% sobe o valor da mentoria para continuarmos mantendo o
            projeto.
          </p>
        </div>
        <div className="card">
          <h2>Mentorandos</h2>
          <p>
            Para os mentorando Oferecemos uma forma muito prática de comunicação
            com pessoas altamente reconhecidas no mercado brasileiro e no
            exterior. Conecte agora mesmo é evolua sua carreira hoje mesmo.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Services;
