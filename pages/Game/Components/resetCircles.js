import { generateRandomColors, pickColor } from './generateColors.js';
import { getDisplayModule } from './display.js';
import { setColorNames } from './fetchName.js';
import { cacheDOM } from './cacheDom.js';

const resetCirclesModule = () => {
  const { circles } = cacheDOM();
  const { showCircleShadow, setCircleBackgroundColor } = getDisplayModule();

  const _getColors = (numberOfCircles) => {
    const colors = generateRandomColors(numberOfCircles);
    return colors;
  };

  const _setPickedColor = (colors) => {
    const pickedColor = pickColor(colors);
    colorDisplay.textContent = pickedColor;
  };

  const resetCircles = (numberOfCircles) => {
    let colors = _getColors(numberOfCircles);
    _setPickedColor(colors);
    circles.forEach((circle, index) => {
      if (colors[index]) {
        circle.style.display = 'block';
        showCircleShadow(circle);
        setCircleBackgroundColor(circle, colors[index]);
      } else {
        circle.style.display = 'none';
      }
    });
    setColorNames();
  };
  return { resetCircles };
};
export { resetCirclesModule };
