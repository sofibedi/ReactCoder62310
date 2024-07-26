import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/category/remeras">Remeras</Link>
      <Link to="/category/buzos">Buzos</Link>
      <Link to="/category/pantalones">Pantalones</Link>
      <Link to="/category/accesorios">Accesorios</Link>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
