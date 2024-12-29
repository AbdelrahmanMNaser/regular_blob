// Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ to, title, description, linkText, titleColor, linkColor }) => (
  <Link to={to}>
    <button className="group relative flex flex-col items-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all">
      <div className={`text-2xl sm:text-3xl mb-4 ${titleColor}`}>{title}</div>
      <p className="text-gray-600 text-center mb-4 max-w-xs">
        {description}
      </p>
      <div className={`text-sm ${linkColor} group-hover:underline`}>
        {linkText} →
      </div>
    </button>
  </Link>
);

export default Card;