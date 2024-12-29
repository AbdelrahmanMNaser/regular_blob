import React from 'react';

const ColorInput = ({ label, value, onChange }) => {
  return (
    <div className="block">
      <label className="text-gray-700 font-medium">{label}</label>
      <div className="mt-1 relative">
        <input
          type="color"
          value={value}
          onChange={onChange}
          className="w-full h-10 bg-gray-200 rounded-lg appearance-none cursor-pointer 
          transition duration-300 ease-in-out transform hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ColorInput;