import React from "react";
import waves from "../../assets/waves.svg";
import PlataformIcon from "../../assets/platform.png";
import { Container } from "./styles";

const Plataform: React.FC = () => {
  return (
    <Container>
      <img src={waves} alt="" className="waves" />
      <div className="content">
        <h2>Marque Mentorias a qualquer momento</h2>
        <img src={PlataformIcon} alt="" />
        <p>
          Logo após o agendamento da mentoria tanto o Mentor quanto o Mentorando
          recebem um<br/>link por e-mail com a confirmação do evento é o link da
          mentoria no Google Meet.
        </p>
      </div>
    </Container>
  );
};

export default Plataform;
