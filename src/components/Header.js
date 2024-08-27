import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header-section">
      <div className="container">
        <div className="logo">
          <Link to="/"><img src="assets/logo.png" alt="Логотип" /></Link>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/news">Жанылыктар</Link></li>
            <li><Link to="/login">Вход</Link></li>
          </ul>
        </nav>
        <div className="search">
          <input type="text" placeholder="Поиск..." />
        </div>
        <Link to="/login">
        <button className="button">Кируу</button>
      </Link>
      </div>
    </header>
  );
}

export default Header;
