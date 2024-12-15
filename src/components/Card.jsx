// src/components/Card.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext'; // Correct import path

const Card = ({ title, content, image }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`card p-8 rounded-lg shadow-lg w-96 h-auto transition-all ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      {image && <img src={image} alt={title} className="w-full h-64 object-cover rounded-t-lg" />}
      <div className="card-content mt-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{content}</p>
      </div>
    </div>
  );
};

export default Card;
