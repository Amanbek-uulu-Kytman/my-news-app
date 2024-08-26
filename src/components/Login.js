import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="form">
        <h2>Вход</h2>
        <div className="flex-column">
          <label htmlFor="email">Email</label>
          <div className="inputForm">
            <input type="email" id="email" className="input" placeholder="Введите email" />
          </div>
        </div>
        <div className="flex-column">
          <label htmlFor="password">Пароль</label>
          <div className="inputForm">
            <input type="password" id="password" className="input" placeholder="Введите пароль" />
          </div>
        </div>
        <button className="button-submit">Войти</button>
        <p className="p">Забыли пароль? <span className="span">Восстановить</span></p>
      </div>
    </div>
  );
}

export default Login;
