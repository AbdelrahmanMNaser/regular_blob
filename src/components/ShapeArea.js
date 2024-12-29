import React, { useEffect, useRef } from "react";
import {
  drawRectangle,
  drawSquare,
  drawTriangle,
  drawCircle,
} from "../utils/PlaneShapeDrawers";
import { drawCube, drawCuboid, drawPyramid, drawSphere } from "../utils/SurfaceDrawers";

function ShapeArea({ shapeData, is3D }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const { shape, color, needStroke, strokeColor, strokeWeight } = shapeData;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = needStroke ? strokeWeight : 0;

    switch (shape) {
      case "circle":
        if (is3D) {
          drawSphere(ctx, canvas, shapeData);
        } else {
          drawCircle(ctx, canvas, shapeData);
        }
        break;
      case "rectangle":
        if (is3D) {
          drawCuboid(ctx, canvas, shapeData);
        } else {
          drawRectangle(ctx, canvas, shapeData);
        }
        //drawRectangle(ctx, canvas, shapeData);
        break;
      case "square":
        if (is3D) {
          drawCube(ctx, canvas, shapeData);
        } else {
          drawSquare(ctx, canvas, shapeData);
        }
        break;
      case "triangle":
        if (is3D) {
          drawPyramid(ctx, canvas, shapeData);
        } else {
          drawTriangle(ctx, canvas, shapeData);
        }
        break;
      default:
        break;
    }
  }, [shapeData, is3D]);

  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <canvas ref={canvasRef} width={500} height={500} className="border" />
    </div>
  );
}

export default ShapeArea;
