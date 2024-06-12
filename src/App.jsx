import React from 'react';
import './App.css';

import UserInterface from "./UserInterface"
import StylesContext from "./StylesContext";


function App() {
 const stylin = {
    background: "#1ECD97",
    width: 150,
    height: 30,
    fontSize: 18,
    letterSpacing: 1,
    border: "2px solid #1c1d1f",
    borderRadius: 6
  };


  return (
    <main>

    <StylesContext.Provider value={stylin}>
        <h1
          style={{
            color: "#FEE001",
            fontFamily: "Luminari, fantasy",
            fontSize: 50
          }}
        >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
        </StylesContext.Provider>

    </main>

  );
}

export default App;             
