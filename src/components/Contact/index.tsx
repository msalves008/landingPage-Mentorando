import { Button, TextField } from "@material-ui/core";
import React from "react";
import contactIcon from "../../assets/ContactIcon.svg";
import { Container } from "./styles";

const Contact: React.FC = () => {
  return (
    <Container>
      <h1>Contato</h1>
      <div className="content">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.freepik.com/vectors/job"
        >
          <img src={contactIcon} alt="Contact" />
          Job vector created by freepik - www.freepik.com
        </a>
        <div className="right">
        
        <TextField
          required
          id="filled-required"
          label="Nome"
          type="text"
          defaultValue="Matheus Alves"
          variant="outlined"
          className="text-field"
        />
         <TextField
          required
          id="filled-required"
          label="Telefone"
          type="phone"
          defaultValue="(11) 99999-9999"
          variant="outlined"
          className="text-field"
        />
         <TextField
          required
          id="filled-required"
          label="Email"
          type="email"
          defaultValue="contato@mentorando.com"
          variant="outlined"
          className="text-field"
        />
          <TextField
          required
          id="filled-required"
          label="Mensagem"
          defaultValue="-"
          variant="outlined"
          className="text-field"
        />
        <Button variant="contained" color="primary" size="large" >Enviar Mensagem</Button>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
