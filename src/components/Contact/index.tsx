import { Button, TextField } from "@material-ui/core";
import React from "react";
import contactIcon from "../../assets/ContactIcon.svg";
import { Container } from "./styles";

const Contact: React.FC = () => {
  return (
    <Container>
      <h1 id="contact">Contato</h1>
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
          placeholder="Matheus Alves"
          variant="outlined"
          className="text-field"
        />
         <TextField
          required
          id="filled-required"
          label="Telefone"
          type="phone"
          placeholder="(11) 99999-9999"
          variant="outlined"
          className="text-field"
        />
         <TextField
          required
          id="filled-required"
          label="Email"
          type="email"
          placeholder="contato@mentorando.com"
          variant="outlined"
          className="text-field"
        />
          <TextField
          required
          id="filled-required"
          label="Mensagem"
          placeholder="-"
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
