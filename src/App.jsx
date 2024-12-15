// src/App.js
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext'; // Correct import path
import Card from './components/Card';
import ThemeButton from './components/ThemeButton';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex justify-center items-center bg-gray-200">
        <div className="space-y-4">
          <ThemeButton />
          <Card
            title="Beautiful Sunset"
            content="A beautiful sunset view captured in the mountains."
            image="https://musclecar.uk/wp-content/uploads/2024/08/PMV8-19-Mustang-John_Wick-001.jpg"
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;

