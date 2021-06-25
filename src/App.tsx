import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Taller de Sistemas Operativos.
        </p>
        <a
          className="App-link"
          href="http://www.itq.edu.mx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TECNM Campus Querétaro
        </a>
        <p>
          Integrantes de la clase:
        </p>
        <p>
        Sandra, Eric Ibanez,César, Emilio, Miguel, Jocelyn, 
          Emmanuel Lira, Armando, Gerardo, Julio, Nuria, Emmanuel Morales,
          Kenet, Larissa, Omar, Marijo, victor, lupita
        </p>
      </header>
    </div>
  );
}

export default App;
