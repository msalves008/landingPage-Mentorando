import { Button } from "@material-ui/core";
import React from "react";
import Iconrocket from "../../assets/Iconrocket.svg";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <img src={Iconrocket} alt="Initial Icon" />
        <div className="content">
          <h1>
            Toda pergunta tem uma
            <br /> resposta.
          </h1>
          <span>
            Avance seus conhecimentos com os melhores
            <br /> Mentores do mundo.
          </span>
          <Button variant="contained">SAIBA MAIS!</Button>
        </div>
      </div>
    </Container>
  );
};

export default Home;
