import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <img src="assets/logo.png" alt="Логотип" />
        </div>
        <div className="footer-links">
          <a href="#">Контакты</a>
          <a href="#">Политика конфиденциальности</a>
          <a href="#">О нас</a>
        </div>
        <div className="footer-socials">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
