import React from 'react';
import '../styles/Header.css'
import backgroundGray from '../img/fondo-gris.jpg'
import iconcar from '../img/icon-carrito-compra.png'
import iconSearch from '../img/icon-search.png'
const Header: React.FC = () => {
  return (
    <header className='header' style={{ backgroundImage: `url(${backgroundGray})`, backgroundPosition: 'right', backgroundSize: 'cover' }}>
      <h1 >Litigade</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Product</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Contact</a></li>
          <li className='ml-20'><a href="/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-end p-1">
          <img src={iconSearch} className="w-full h-full" alt="Buscar" /></a></li>
          <li><a href="/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-end p-1">
          <img src={iconcar} className="w-full h-full" alt="Carrito Compras" /></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


