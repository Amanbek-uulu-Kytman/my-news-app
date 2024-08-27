import React, { useState } from 'react';
import './AddNewsForm.css';

function AddNewsForm({ addNews }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date && content) {
      addNews({ title, date, content });
      setTitle('');
      setDate('');
      setContent('');
    }
  };

  return (
    <form className="add-news-form" onSubmit={handleSubmit}>
      <h2>Добавить Новость</h2>
      <input 
        type="text" 
        placeholder="Заголовок" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
      <textarea 
        placeholder="Содержание" 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default AddNewsForm;
