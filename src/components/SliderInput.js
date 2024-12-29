import React from 'react';

const SliderInput = ({ label, value, onChange, min, max }) => {
  return (
    <div className="block">
      <label className="text-gray-700 block font-medium">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-center text-gray-700">{value}px</div>
    </div>
  );
};

export default SliderInput;