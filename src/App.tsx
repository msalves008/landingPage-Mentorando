import React from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { GlobalStyles } from './styles/global';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <GlobalStyles/>
    </div>
  );
}

export default App;
