import React from 'react';
import './NewsItem.css';

function NewsItem({ image, text, date, time, link }) {
  return (
    <div className="news-item">
      <div className="news-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="news-content">
        <p className="news-text">{text}</p>
        <div className="news-meta">
          <span className="news-date">{date}</span>
          <span className="news-time">{time}</span>
        </div>
        <a href={link}>Читать полностью</a>
      </div>
    </div>
  );
}

export default NewsItem;
