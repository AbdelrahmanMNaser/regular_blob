import React from 'react';
import { FaPencilAlt, FaEraser } from 'react-icons/fa';
import { MdColorLens } from 'react-icons/md';

const DrawingToolbar = ({ activeTool, setActiveTool, currentColor, setCurrentColor }) => {
  return (
    <div className="w-16 bg-gray-800 p-2 flex flex-col gap-4 items-center">
      <button 
        className={`p-2 rounded ${activeTool === 'pencil' ? 'bg-blue-500' : 'bg-gray-600'}`}
        onClick={() => setActiveTool('pencil')}
      >
        <FaPencilAlt className="text-white text-xl" />
      </button>
      <button 
        className={`p-2 rounded ${activeTool === 'eraser' ? 'bg-blue-500' : 'bg-gray-600'}`}
        onClick={() => setActiveTool('eraser')}
      >
        <FaEraser className="text-white text-xl" />
      </button>
      {activeTool === 'pencil' && (
        <div className="relative">
          <input 
            type="color"
            value={currentColor}
            onChange={(e) => setCurrentColor(e.target.value)}
            className="w-8 h-8 rounded cursor-pointer"
          />
          <MdColorLens className="absolute top-1 left-1 text-white pointer-events-none" />
        </div>
      )}
    </div>
  );
};

export default DrawingToolbar;