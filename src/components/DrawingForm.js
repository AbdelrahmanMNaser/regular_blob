import React, { useState, useEffect } from "react";
import SliderInput from "./SliderInput";
import ColorInput from "./ColorInput";

function DrawingForm({ onApply }) {
  const [shape, setShape] = useState("");
  const [color, setColor] = useState("#383838");
  const [needStroke, setNeedStroke] = useState(false);
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [strokeWeight, setStrokeWeight] = useState(1);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  useEffect(() => {
    if (shape === "rectangle" && width === height) {
      // only adjust if they happen to be equal
      setWidth(parseFloat(width) + 1.0);
    } else if (shape === "square") {
      // use the most recently changed dimension
      const lastChanged =
        document.activeElement?.name === "height" ? height : width;
      if (lastChanged && !isNaN(lastChanged)) {
        setWidth(lastChanged);
        setHeight(lastChanged);
      }
    }
  }, [shape, width, height]);

  useEffect(() => {
    onApply({
      shape,
      color,
      needStroke,
      strokeColor,
      strokeWeight,
      width,
      height,
    });
  }, [
    shape,
    color,
    needStroke,
    strokeColor,
    strokeWeight,
    width,
    height,
    onApply,
  ]);

  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-2xl shadow-lg space-y-6 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
        Customize Your Shape
      </h2>

      {/* Shape Selection Section */}
      <div className="space-y-4 p-4 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-gray-100">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
            />
          </svg>
          Shape Selection
        </h3>
        <div className="block">
          <label className="text-gray-700 font-medium">Shape</label>
          <select
            value={shape}
            onChange={(e) => setShape(e.target.value)}
            className="mt-1 block w-full rounded-lg border-gray-300 bg-white px-3 py-2 shadow-sm transition-all duration-200 focus:border-indigo-500 focus:ring-2"
          >
            <option value="" disabled>
              Select shape
            </option>
            <option value="rectangle">Rectangle</option>
            <option value="square">Square</option>
            <option value="triangle">Triangle</option>
            <option value="circle">Circle</option>
          </select>
        </div>
      </div>

      {/* Color Selection Section */}
      <div className="space-y-4 p-4 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-gray-100 mt-4">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill={color}
            stroke={color}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
            />
          </svg>
          Color Selection
        </h3>
        <ColorInput
          label="Fill Color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>

      {/* Dimension Section */}
      <div className="space-y-4 p-4 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-gray-100">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
          Dimensions
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <SliderInput
            label="Width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            min={0}
            max={500}
          />
          {shape !== "circle" && (
            <SliderInput
              label="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              min={0}
              max={500}
            />
          )}
        </div>
      </div>

      {/* Stroke Section */}
      <div className="space-y-4 p-4 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-gray-100">
        <h3 className="text-xl font-semibold flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill={strokeColor}
            stroke={strokeColor}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
          Stroke
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={needStroke}
              onChange={(e) => setNeedStroke(e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 transition-all duration-200"
            />
            <label className="text-gray-700 font-medium">Enable Stroke</label>
          </div>

          {needStroke && (
            <div className="pl-6 border-l-2 border-indigo-200 space-y-4">
              <ColorInput
                label="Stroke Color"
                value={strokeColor}
                onChange={(e) => setStrokeColor(e.target.value)}
              />
              <SliderInput
                label="Stroke Weight"
                value={strokeWeight}
                onChange={(e) => setStrokeWeight(e.target.value)}
                min={1}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DrawingForm;
