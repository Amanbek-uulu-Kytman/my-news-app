import React from 'react';
import NewsItem from './NewsItem';
import './AllNews.css';

function AllNews() {
  const newsData = [
    {
      id: 1,
      image: 'path/to/image1.jpg',
      text: 'Текст новости на три строки...',
      date: '07/07/2024',
      time: '12:00',
      link: '/news/1',
    },
    {
      id: 2,
      image: 'path/to/image2.jpg',
      text: 'Текст новости на три строки...',
      date: '08/07/2024',
      time: '14:00',
      link: '/news/2',
    },
    {
      id: 3,
      image: 'path/to/image3.jpg',
      text: 'Текст новости на три строки...',
      date: '09/07/2024',
      time: '10:00',
      link: '/news/3',
    },
    // Добавьте больше новостей здесь
  ];

  return (
    <div className="all-news">
      <div className="container">
        <h2>Все новости</h2>
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
    </div>
  );
}

export default AllNews;
