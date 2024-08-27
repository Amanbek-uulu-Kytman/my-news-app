import React, { useState } from 'react';
import NewsItem from './NewsItem';
import AddNewsForm from './AddNewsForm';
import './NewsList.css';

function NewsList() {
  const [newsList, setNewsList] = useState([
    {
      title: 'Пример новости 1',
      date: '2024-07-07',
      content: 'Текст новости на три строки...',
    },
    {
      title: 'Пример новости 2',
      date: '2024-07-08',
      content: 'Текст новости на три строки...',
    },
  ]);

  const addNews = (news) => {
    setNewsList([news, ...newsList]);
  };

  return (
    <div className="news-list">
      <AddNewsForm addNews={addNews} />
      <div className="news-grid">
        {newsList.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            date={news.date}
            content={news.content}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsList;
