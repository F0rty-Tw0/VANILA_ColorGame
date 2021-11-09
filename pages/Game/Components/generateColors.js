const _randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const generateRandomColors = (numberOfCircles) => {
  const colors = [];
  for (let i = 0; i < numberOfCircles; i++) {
    colors.push(_randomColor());
  }
  return colors;
};

const pickColor = (colors) => {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

export { generateRandomColors, pickColor };
