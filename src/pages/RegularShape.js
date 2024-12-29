import React, { useState } from "react";
import PageTransition from "../components/PageTransition";
import DrawingForm from "../components/DrawingForm";
import ShapeArea from "../components/ShapeArea";
import { useMemo } from "react";

function RegularShape() {
  const [shapeData, setShapeData] = useState({
    shape: "",
    color: "#000000",
    needStroke: false,
    strokeColor: "#000000",
    width: 100,
    height: 100,
  });

  const [is3D, setIs3D] = useState(false);

  const handleApply = useMemo(() => {
    return (data) => {
      if (!data) return;
      
      setShapeData((prev) => {
        // Simple shallow comparison of key properties
        const hasChanged = Object.keys(data).some(key => prev[key] !== data[key]);
        return hasChanged ? data : prev;
      });
    };
  }, [setShapeData]);

  return (
    <PageTransition>
      <div className="flex h-screen z-30">
        <div className="w-1/3 p-4">
          <DrawingForm onApply={handleApply} />
        </div>
        <div className="w-3/4">
          <ShapeArea shapeData={shapeData} is3D={is3D} />
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIs3D(!is3D)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {is3D ? "Show 2D" : "Show 3D"}
            </button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

export default RegularShape;
