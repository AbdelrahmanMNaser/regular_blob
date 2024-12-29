import React, { useState, useRef } from "react";
import PageTransititon from "../components/PageTransition";
import DrawingToolbar from "../components/DrawingToolbar";

const BlobShape = () => {
  const [lines, setLines] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [activeTool, setActiveTool] = useState("pencil"); // pencil or eraser
  const [currentColor, setCurrentColor] = useState("#000000");
  const svgRef = useRef(null);

  const getCoordinates = (e) => {
    const svg = svgRef.current;
    if (!svg) return null;

    const rect = svg.getBoundingClientRect();
    const point = {
      x: (e.clientX || e.touches?.[0]?.clientX || 0) - rect.left,
      y: (e.clientY || e.touches?.[0]?.clientY || 0) - rect.top,
    };

    point.x = Math.max(0, Math.min(point.x, rect.width));
    point.y = Math.max(0, Math.min(point.y, rect.height));

    return point;
  };

  const handleStart = (e) => {
    e.preventDefault();
    const point = getCoordinates(e);
    if (!point) return;

    setIsDrawing(true);
    if (activeTool === "eraser") {
      // Start new eraser line
      setLines([...lines, { points: [point.x, point.y], type: "eraser" }]);
    } else {
      // Start new colored line
      setLines([
        ...lines,
        { points: [point.x, point.y], type: "pencil", color: currentColor },
      ]);
    }
  };

  const handleMove = (e) => {
    //e.preventDefault();
    if (!isDrawing) return;

    const point = getCoordinates(e);
    if (!point) return;

    let newLines = [...lines];
    let lastLine = newLines[newLines.length - 1];

    const lastX = lastLine.points[lastLine.points.length - 2];
    const lastY = lastLine.points[lastLine.points.length - 1];
    const distance = Math.hypot(point.x - lastX, point.y - lastY);

    if (distance > 5) {
      lastLine.points = [...lastLine.points, point.x, point.y];
      newLines[newLines.length - 1] = lastLine;
      setLines(newLines);
    }
  };

  const handleEnd = () => {
    setIsDrawing(false);
  };

  return (
    <PageTransititon>
    <div className="flex h-screen">
      <DrawingToolbar
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <div className="flex-1 relative">
        <svg
          ref={svgRef}
          className="w-full h-full"
          onMouseDown={handleStart}
          onMouseMove={handleMove}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
        >
          {lines.map((line, i) => (
            <polyline
              key={i}
              points={line.points.join(" ")}
              stroke={line.type === "eraser" ? "white" : line.color}
              strokeWidth={line.type === "eraser" ? 20 : 2}
              fill="none"
            />
          ))}
        </svg>
      </div>
    </div>
    </PageTransititon>
  );
};

export default BlobShape;
