import React from 'react';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Plataform from './components/Plataform';
import Services from './components/Services';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <AboutUs/>
      <Services/>
      <Plataform/>

      <Footer/>



      <GlobalStyles/>
    </div>
  );
}

export default App;
