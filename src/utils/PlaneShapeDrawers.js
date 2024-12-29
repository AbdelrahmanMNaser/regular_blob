export const drawRectangle = (ctx, canvas, shapeData) => {
  const { width, height, needStroke } = shapeData;
  ctx.fillRect(
    (canvas.width - width) / 2,
    (canvas.height - height) / 2,
    width,
    height
  );
  if (needStroke)
    ctx.strokeRect(
      (canvas.width - width) / 2,
      (canvas.height - height) / 2,
      width,
      height
    );
};

export const drawSquare = (ctx, canvas, shapeData) => {
  const { width, needStroke } = shapeData;
  const side = width;
  ctx.fillRect(
    (canvas.width - side) / 2,
    (canvas.height - side) / 2,
    side,
    side
  );
  if (needStroke)
    ctx.strokeRect(
      (canvas.width - side) / 2,
      (canvas.height - side) / 2,
      side,
      side
    );
};

export const drawTriangle = (ctx, canvas, shapeData) => {
  const { width, height, needStroke } = shapeData;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  // Calculate vertices
  const topY = centerY - height / 2;
  const bottomY = centerY + height / 2;
  const leftX = centerX - width / 2;
  const rightX = centerX + width / 2;

  ctx.beginPath();
  ctx.moveTo(centerX, topY); // Top vertex
  ctx.lineTo(leftX, bottomY); // Bottom left vertex
  ctx.lineTo(rightX, bottomY); // Bottom right vertex
  ctx.closePath();
  ctx.fill();
  if (needStroke) ctx.stroke();
};

export const drawCircle = (ctx, canvas, shapeData) => {
  const { width, needStroke } = shapeData;
  ctx.beginPath();
  ctx.arc(canvas.width / 2, canvas.height / 2, width / 2, 0, 2 * Math.PI);
  ctx.fill();
  if (needStroke) ctx.stroke();
};
