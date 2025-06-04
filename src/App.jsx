import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <ItemListContainer text="¡Bienvenido a Tienda Pipu Pipu! Tu tienda online de confianza." />
      </main>
    </div>
  );
}

export default App;
