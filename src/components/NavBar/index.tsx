import React from 'react';
import {Link} from 'react-scroll'
import logoIcon from '../../assets/logo.svg'

import { Container } from './styles';

const NavBar: React.FC = () => {
  return (
    <Container>
      <img src={logoIcon} alt="logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="aboutus">SOBRE NÓS</Link></li>
        <li><Link to="services">SERVIÇOS</Link></li>
        <li><Link to='plataform'>PLATAFORMA</Link> </li>
        <li><Link to='contact'>CONTATO</Link> </li>
        
      </ul>
    </Container>
  );
};

export default NavBar;
