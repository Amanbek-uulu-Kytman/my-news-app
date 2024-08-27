import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import SingleNews from './components/SingleNews';
import Login from './components/Login';
import AllNews from './components/AllNews';
import Footer from './components/Footer'; // Подключаем Footer
import './styles/styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<AllNews />} />
          <Route path="/news/:id" element={<SingleNews />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer /> {/* Футер отображается на всех страницах */}
      </div>
    </Router>
  );
}

export default App;
