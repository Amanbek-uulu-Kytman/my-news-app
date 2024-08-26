import React from 'react';
import NewsItem from './NewsItem';
import './NewsList.css';

function NewsList() {
  const newsData = [
    {
      image: 'path/to/image1.jpg',
      text: 'Текст новости на три строки...',
      date: '07/07/2024',
      time: '12:00',
      link: 'news1.html',
    },
    {
      image: 'path/to/image2.jpg',
      text: 'Текст новости на три строки...',
      date: '08/07/2024',
      time: '14:00',
      link: 'news2.html',
    },
    {
      image: 'path/to/image3.jpg',
      text: 'Текст новости на три строки...',
      date: '09/07/2024',
      time: '10:00',
      link: 'news3.html',
    },
  ];

  return (
    <section className="news-section">
      <div className="container">
        <div className="news-header">
          <div className="news-title">Новости</div>
          <div className="news-all">Баардык жаңылыктар...</div>
        </div>
        <div className="news-grid">
          {newsData.map((news, index) => (
            <NewsItem
              key={index}
              image={news.image}
              text={news.text}
              date={news.date}
              time={news.time}
              link={news.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsList;
