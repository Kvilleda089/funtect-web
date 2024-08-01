import React from 'react';
import '../styles/Header.css'

const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1 >Litigade</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">Product</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


