import React from 'react';


function NewsSection() {
  return (
    <section className="news-section">
      <div className="container">
        <div className="news-header">
          <div className="news-title">Жанлыктар</div>
          <div className="news-all">Баардык жаңылыктар...</div>
        </div>
        <div className="news-grid">
          <div className="news-item">
            <div className="news-image"></div>
            <div className="news-content">
              <p className="news-text">Пример текста новостей</p>
              <div className="news-meta">
                <span className="news-date">07/07/2024</span>
                <span className="news-time">12:00</span>
              </div>
            </div>
          </div>
          {/* Повторите блок news-item для остальных новостей */}
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
