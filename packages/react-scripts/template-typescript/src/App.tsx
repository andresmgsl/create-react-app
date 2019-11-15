import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡DO NOT MAKE SHIT!
        </p>
        <a
          className="App-link"
          href="https://www.aluxion.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ALUXION
        </a>
      </header>
    </div>
  );
}

export default App;
