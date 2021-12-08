import React from 'react';

import logoIcon from '../../assets/logo.svg'

import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <img src={logoIcon} alt="logo" />
      <ul>
        <li>HOME</li>
        <li>QUEM SOMOS</li>
        <li>MÉTRICAS</li>
        <li>DEPOIMENTOS</li>
        <li>CONTATO</li>
      </ul>
    </Container>
  );
};

export default NavBar;
