import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleTheme }) => {
  return (
    <header>
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/contacts">Контакти</Link>
        <Link to="/about">Про мене</Link>
      </nav>
      <button onClick={toggleTheme}>Перемкнути тему</button>
    </header>
  );
};

export default Header;