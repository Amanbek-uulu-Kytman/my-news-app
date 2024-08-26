import React from 'react';
import Menu from './Menu';
import Slider from './Slider';
import MapSection from './MapSection';
import ScrollableBlock from './ScrollableBlock';
import NewsSection from './NewsSection';
// Импорт стилей с правильным путем
import '../styles/styles.css';

function Home() {
  return (
    <div className="Home">
      <section className="menu-and-slider">
        <div className="container">
          <Menu />
          <Slider />
        </div>
      </section>
      <MapSection />
      <section className="scrollable-blocks">
        <div className="container">
          <ScrollableBlock title="Блок 1" />
          <ScrollableBlock title="Блок 2" />
        </div>
      </section>
      <NewsSection />
    </div>
  );
}

export default Home;
