import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleNews.css';

function SingleNews() {
  const { id } = useParams();

  return (
    <div className="single-news">
      <div className="news-container">
        <div className="news-image-container">
          <img 
            src={`https://via.placeholder.com/1200x600.png?text=Новость+${id}`} 
            alt={`Жанылык ${id}`} 
            className="news-image"
          />
        </div>
        <div className="news-content">
          <h2 className="news-title">Заголовок новости {id}</h2>
          <p className="news-date">Дата публикации: 10/10/2024</p>
          <p className="news-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SingleNews;
