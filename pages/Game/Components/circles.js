import { getDifficultyModule } from './difficulty.js';
import { getScoreModule } from './scores.js';
import { getDisplayModule } from './display.js';
import { rgbToHex } from './rgbToHex.js';
import { cacheDOM } from './cacheDom.js';
let _currentTries;

const getCirclesModule = () => {
  const { circles, colorDisplay } = cacheDOM();

  const { getTries } = getDifficultyModule();

  const {
    showScoreDisplay,
    showCircleShadow,
    hideCircleShadow,
    setDisplayMessage,
    setTitleBackground,
    setCircleBackgroundColor,
    setNewColorsButtonMessage,
  } = getDisplayModule();

  const { addScores, getCurrentScores, checkEndGame } = getScoreModule();

  const _checkClickedColor = (circle) => {
    const pickedColor = _getPickedColor();
    const clickedColor = circle.style.background;
    if (clickedColor === pickedColor) {
      _nextCircle(clickedColor, 'You Won!');
      setTitleBackground(clickedColor);
    } else if (_currentTries < 1 && circle.style.background !== 'transparent') {
      _nextCircle('transparent', 'You lost, Try Again');
    } else {
      setCircleBackgroundColor(circle, 'transparent');
      hideCircleShadow(circle);
      setDisplayMessage('Try one more time');
      _currentTries--;
    }
  };

  const _changeColor = (color) => {
    circles.forEach((circle) => {
      if (color === 'transparent') {
        hideCircleShadow(circle);
      } else {
        showCircleShadow(circle);
      }
      setCircleBackgroundColor(circle, color);
    });
  };

  const _nextCircle = (color, text) => {
    setDisplayMessage(text);
    setNewColorsButtonMessage('Reset Colors?');
    showScoreDisplay();
    addScores();
    _changeColor(color);
    const scores = getCurrentScores();
    checkEndGame(scores);
  };

  const _getPickedColor = () => {
    return colorDisplay.textContent;
  };

  const setCirclesListeners = () => {
    circles.forEach((circle) => {
      circle.addEventListener('click', () => {
        _checkClickedColor(circle);
      });
    });
  };

  const resetCurrentTries = () => {
    _currentTries = getTries();
  };

  const getHexValueOfPickedColor = () => {
    let colorArray = colorDisplay.textContent;
    const hexValue = rgbToHex(colorArray);
    return hexValue;
  };

  return {
    resetCurrentTries,
    setCirclesListeners,
    getHexValueOfPickedColor,
  };
};

export { getCirclesModule };
