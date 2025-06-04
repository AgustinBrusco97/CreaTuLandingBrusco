import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>Tienda PipuPipu</h1>
      </div>
      
      <ul className="navbar-nav">
        <li><a href="#cellphones">Celulares</a></li>
        <li><a href="#TVs">Televisores</a></li>
        <li><a href="#kitchen">Cocina</a></li>
        <li><a href="#VR">Simuladores</a></li>
      </ul>
      
      <CartWidget />
    </nav>
  );
};

export default NavBar;
