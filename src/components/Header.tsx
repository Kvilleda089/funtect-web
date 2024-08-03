import React, { useState } from 'react';
import backgroundGray from '../img/fondo-gris.jpg'
import iconcar from '../img/icon-carrito-compra.png'
import iconSearch from '../img/icon-search.png'
import incoMenu from '../img/icon-menu.png';
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className='header' style={{ backgroundImage: `url(${backgroundGray})`, backgroundPosition: 'right', backgroundSize: 'cover' }}>
      <div className="flex justify-between items-center p-4">
        <div className='flex ml-32'>
          <h1 className="flex-grow text-2xl font-bold">Litigade</h1>
        </div>
        <button className="block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={incoMenu} alt="Menu" className="w-6 h-6" />
        </button>
        <div className={`${menuOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
          <nav className="flex flex-col md:flex-row md:items-center md:justify-end mr-30">
            <ul className="flex flex-col md:flex-row md:items-center md:justify-end">
              <li className="md:mr-4 text-2xl font-bold"><a href="/">Home</a></li>
              <li className="md:mr-4 text-2xl font-bold"><a href="/">Product</a></li>
              <li className="md:mr-4 text-2xl font-bold" ><a href="/">Pricing</a></li>
              <li className="md:mr-4 text-2xl font-bold"><a href="/">Contact</a></li>
            </ul>
          </nav>
          <div className="relative flex items-center mt-4 md:mt-0 md:ml-4 mr-20">
            <input
              type="text"
              placeholder="Buscar"
              className="border-b border-gray-300 focus:outline-none focus:ring-0 placeholder-black placeholder-font-bold text-black"
              style={{ border: 'none', borderBottom: '1px solid #D1D5DB', backgroundColor: 'transparent' }}
            />
            <img src={iconSearch} className="w-6 h-6 absolute right-2" alt="Buscar" />
          </div>
          <a href="/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center mt-4 md:mt-0 md:ml-4 mr-14">
            <img src={iconcar} className="w-full h-full" alt="Carrito Compras" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;


