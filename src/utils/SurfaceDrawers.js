import { shadeColor } from "./ColorShading";

export const drawCube = (ctx, canvas, shapeData) => {
  const { width, color, needStroke } = shapeData;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Calculate cube dimensions
  const size = width * 0.8; 
  const offset = size * 0.3; 

  // Store original fillStyle and create darker shade for sides
  const originalColor = color;
  const darkerShade = shadeColor(color, -20);
  const darkestShade = shadeColor(color, -40);

  // Draw back face (top)
  ctx.beginPath();
  ctx.moveTo(centerX - size / 2 + offset, centerY - size / 2 - offset);
  ctx.lineTo(centerX + size / 2 + offset, centerY - size / 2 - offset);
  ctx.lineTo(centerX + size / 2, centerY - size / 2);
  ctx.lineTo(centerX - size / 2, centerY - size / 2);
  ctx.closePath();
  ctx.fillStyle = darkestShade;
  ctx.fill();
  if (needStroke) ctx.stroke();

  // Draw right face
  ctx.beginPath();
  ctx.moveTo(centerX + size / 2, centerY - size / 2);
  ctx.lineTo(centerX + size / 2 + offset, centerY - size / 2 - offset);
  ctx.lineTo(centerX + size / 2 + offset, centerY + size / 2 - offset);
  ctx.lineTo(centerX + size / 2, centerY + size / 2);
  ctx.closePath();
  ctx.fillStyle = darkerShade;
  ctx.fill();
  if (needStroke) ctx.stroke();

  // Draw front face
  ctx.beginPath();
  ctx.moveTo(centerX - size / 2, centerY - size / 2);
  ctx.lineTo(centerX + size / 2, centerY - size / 2);
  ctx.lineTo(centerX + size / 2, centerY + size / 2);
  ctx.lineTo(centerX - size / 2, centerY + size / 2);
  ctx.closePath();
  ctx.fillStyle = originalColor;
  ctx.fill();
  if (needStroke) ctx.stroke();
};

export const drawCuboid = (ctx, canvas, shapeData) => {
  const { width, height, color, needStroke, strokeColor, strokeWeight } = shapeData;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Calculate cuboid dimensions
  const w = width * 0.8;
  const h = height * 0.8;
  const offset = w * 0.3;

  // Calculate colors for faces
  const originalColor = color;
  const darkerShade = shadeColor(color, -20);
  const darkestShade = shadeColor(color, -40);

  // Draw back face (top)
  ctx.beginPath();
  ctx.moveTo(centerX - w / 2 + offset, centerY - h / 2 - offset);
  ctx.lineTo(centerX + w / 2 + offset, centerY - h / 2 - offset);
  ctx.lineTo(centerX + w / 2, centerY - h / 2);
  ctx.lineTo(centerX - w / 2, centerY - h / 2);
  ctx.closePath();
  ctx.fillStyle = darkestShade;
  ctx.fill();

  // Draw right face
  ctx.beginPath();
  ctx.moveTo(centerX + w / 2, centerY - h / 2);
  ctx.lineTo(centerX + w / 2 + offset, centerY - h / 2 - offset);
  ctx.lineTo(centerX + w / 2 + offset, centerY + h / 2 - offset);
  ctx.lineTo(centerX + w / 2, centerY + h / 2);
  ctx.closePath();
  ctx.fillStyle = darkerShade;
  ctx.fill();

  // Draw front face
  ctx.beginPath();
  ctx.moveTo(centerX - w / 2, centerY - h / 2);
  ctx.lineTo(centerX + w / 2, centerY - h / 2);
  ctx.lineTo(centerX + w / 2, centerY + h / 2);
  ctx.lineTo(centerX - w / 2, centerY + h / 2);
  ctx.closePath();
  ctx.fillStyle = originalColor;
  ctx.fill();

  // Draw strokes last if needed
  if (needStroke) {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWeight;

    // Draw all edges
    [
      // Front face
      [
        [centerX - w / 2, centerY - h / 2],
        [centerX + w / 2, centerY - h / 2],
      ],
      [
        [centerX + w / 2, centerY - h / 2],
        [centerX + w / 2, centerY + h / 2],
      ],
      [
        [centerX + w / 2, centerY + h / 2],
        [centerX - w / 2, centerY + h / 2],
      ],
      [
        [centerX - w / 2, centerY + h / 2],
        [centerX - w / 2, centerY - h / 2],
      ],

      // Top edges
      [
        [centerX - w / 2, centerY - h / 2],
        [centerX - w / 2 + offset, centerY - h / 2 - offset],
      ],
      [
        [centerX + w / 2, centerY - h / 2],
        [centerX + w / 2 + offset, centerY - h / 2 - offset],
      ],
      [
        [centerX - w / 2 + offset, centerY - h / 2 - offset],
        [centerX + w / 2 + offset, centerY - h / 2 - offset],
      ],

      // Right side edge
      [
        [centerX + w / 2 + offset, centerY - h / 2 - offset],
        [centerX + w / 2 + offset, centerY + h / 2 - offset],
      ],
    ].forEach(([start, end]) => {
      ctx.beginPath();
      ctx.moveTo(...start);
      ctx.lineTo(...end);
      ctx.stroke();
    });
  }
};

export const drawPyramid = (ctx, canvas, shapeData) => {
  const { width, color, needStroke, strokeColor, strokeWeight } = shapeData;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Calculate dimensions
  const size = width * 0.8;
  const height = size * 0.8;
  const offset = size * 0.3;

  // Calculate colors with better contrast
  const originalColor = color;
  const rightFaceShade = shadeColor(color, -25); // More noticeable side shade
  const bottomShade = shadeColor(color, -40); // Dark base for depth

  // Calculate key points
  const basePoints = [
    [centerX - size / 2, centerY + height / 2], // bottom left
    [centerX + size / 2, centerY + height / 2], // bottom right
    [centerX + size / 2 + offset, centerY + height / 2 - offset], // back right
  ];
  const apex = [centerX, centerY - height / 2]; // top point

  // Draw base
  ctx.beginPath();
  ctx.moveTo(...basePoints[0]);
  ctx.lineTo(...basePoints[1]);
  ctx.lineTo(...basePoints[2]);
  ctx.closePath();
  ctx.fillStyle = bottomShade;
  ctx.fill();

  // Draw right face
  ctx.beginPath();
  ctx.moveTo(...basePoints[1]);
  ctx.lineTo(...basePoints[2]);
  ctx.lineTo(...apex);
  ctx.closePath();
  ctx.fillStyle = rightFaceShade;
  ctx.fill();

  // Draw front face
  ctx.beginPath();
  ctx.moveTo(...basePoints[0]);
  ctx.lineTo(...basePoints[1]);
  ctx.lineTo(...apex);
  ctx.closePath();
  ctx.fillStyle = originalColor;
  ctx.fill();

  // Draw strokes last if needed
  if (needStroke) {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWeight;

    // Base
    ctx.beginPath();
    ctx.moveTo(...basePoints[0]);
    basePoints.forEach((point) => ctx.lineTo(...point));
    ctx.closePath();
    ctx.stroke();

    // Visible edges to apex
    [basePoints[0], basePoints[1], basePoints[2]].forEach((point) => {
      ctx.beginPath();
      ctx.moveTo(...point);
      ctx.lineTo(...apex);
      ctx.stroke();
    });
  }
};

export const drawSphere = (ctx, canvas, shapeData) => {
  const { width, color, needStroke, strokeColor, strokeWeight } = shapeData;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = width / 2;

  // Draw shadow first
  const shadowGradient = ctx.createRadialGradient(
    centerX,
    centerY + radius * 0.15,
    radius * 0.5,
    centerX,
    centerY + radius * 0.15,
    radius * 1.2
  );
  shadowGradient.addColorStop(0, "rgba(0, 0, 0, 0.2)");
  shadowGradient.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = shadowGradient;
  ctx.fillRect(centerX - radius, centerY, radius * 2, radius * 2);

  // Main sphere gradient
  const gradient = ctx.createRadialGradient(
    centerX - radius * 0.4,
    centerY - radius * 0.4,
    0,
    centerX,
    centerY,
    radius
  );

  // Enhanced color calculations
  const highlightColor = shadeColor(color, 60);
  const midColor = shadeColor(color, 20);
  const baseColor = color;
  const shadowColor = shadeColor(color, -40);
  const deepShadow = shadeColor(color, -60);

  // Smoother gradient transitions
  gradient.addColorStop(0, highlightColor);
  gradient.addColorStop(0.2, midColor);
  gradient.addColorStop(0.5, baseColor);
  gradient.addColorStop(0.8, shadowColor);
  gradient.addColorStop(1, deepShadow);

  // Draw main sphere
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fillStyle = gradient;
  ctx.fill();

  // Primary highlight
  const primaryHighlight = ctx.createRadialGradient(
    centerX - radius * 0.4,
    centerY - radius * 0.4,
    1,
    centerX - radius * 0.4,
    centerY - radius * 0.4,
    radius * 0.8
  );
  primaryHighlight.addColorStop(0, "rgba(255, 255, 255, 0.8)");
  primaryHighlight.addColorStop(0.2, "rgba(255, 255, 255, 0.3)");
  primaryHighlight.addColorStop(1, "rgba(255, 255, 255, 0)");

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fillStyle = primaryHighlight;
  ctx.fill();

  // Secondary highlight (rim light)
  const rimLight = ctx.createRadialGradient(
    centerX + radius * 0.5,
    centerY - radius * 0.5,
    radius * 0.1,
    centerX + radius * 0.5,
    centerY - radius * 0.5,
    radius * 0.8
  );
  rimLight.addColorStop(0, "rgba(255, 255, 255, 0.3)");
  rimLight.addColorStop(1, "rgba(255, 255, 255, 0)");

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fillStyle = rimLight;
  ctx.fill();

  // Ambient occlusion
  const ambient = ctx.createRadialGradient(
    centerX,
    centerY,
    radius * 0.8,
    centerX,
    centerY,
    radius
  );
  ambient.addColorStop(0, "rgba(0, 0, 0, 0)");
  ambient.addColorStop(1, "rgba(0, 0, 0, 0.2)");

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fillStyle = ambient;
  ctx.fill();

  // Add stroke if needed
  if (needStroke) {
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWeight;
    ctx.stroke();
  }
};
