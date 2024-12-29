import React from 'react';

const BackButton = ({ onClick }) => (
  <button 
    onClick={onClick}
    className="px-6 sm:px-8 py-1 sm:py-2 bg-blue-500 text-white rounded-full text-lg sm:text-xl hover:bg-blue-600 transform hover:scale-105 transition-all absolute top-4 sm:top-8 left-4 sm:left-8"
  >
    ← Back
  </button>
);

export default BackButton;