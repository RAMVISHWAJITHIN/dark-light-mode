// src/components/ThemeButton.js
import React from 'react';
import { useTheme } from '../contexts/ThemeContext'; // Automatically resolves .jsx
 // Correct import path
import { FaSun, FaMoon } from 'react-icons/fa'; // Sun and Moon icons

const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="neumorphism p-4 rounded-full flex justify-center items-center cursor-pointer"
    >
      {isDarkMode ? (
        <FaMoon className="text-white text-xl" />
      ) : (
        <FaSun className="text-yellow-500 text-xl" />
      )}
    </button>
  );
};

export default ThemeButton;

