import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleNews.css';

function SingleNews() {
  const { id } = useParams();
  // Здесь будет код для загрузки данных новости по ID
  // Например, можно использовать `useEffect` и `fetch` или данные с сервера

  return (
    <div className="single-news">
      <div className="container">
        <h2>Новость #{id}</h2>
        <p>Здесь будет текст новости...</p>
        {/* Вставить контент новости */}
      </div>
    </div>
  );
}

export default SingleNews;
