import React from 'react';
import { FaMosque } from 'react-icons/fa';
import './Menu.css';

function Menu() {
  return (
    <div className="menu-block">
      <h2>Меню</h2>
      <ul>
        <li><a href="#"><FaMosque /> Республикалык борбодук</a></li>
        <li><a href="#"><FaMosque /> Айыл өкмөттүк денгелдеги мечит</a></li>
        <li><a href="#"><FaMosque /> Намазкана</a></li>
        <li><a href="#"><FaMosque /> Беш убакыт намаз окулуучу мечит</a></li>
        <li><a href="#"><FaMosque /> Жума мечит</a></li>
        <li><a href="#"><FaMosque /> Райондук борбордук</a></li>
        <li><a href="#"><FaMosque /> Облустук борбордук</a></li>
      </ul>
    </div>
  );
}

export default Menu;
