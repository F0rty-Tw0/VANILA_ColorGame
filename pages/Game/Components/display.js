import { cacheDOM } from './cacheDom.js';

const getDisplayModule = () => {
  const { messageDisplay, scoreDisplay, newColorsButton, difficulties, title } =
    cacheDOM();

  const setNewColorsButtonMessage = (message) => {
    newColorsButton.textContent = message;
  };

  const setTitleBackground = (color) => {
    title.style.background = `linear-gradient(to bottom, ${color} 30%, transparent)`;
  };

  const setDisplayMessage = (message) => {
    messageDisplay.textContent = message;
  };

  const showScoreDisplay = () => {
    scoreDisplay.style.display = 'inline';
  };

  const hideScoreDisplay = () => {
    scoreDisplay.style.display = 'none';
  };

  const showRestartButton = () => {
    restart.style.display = 'inline';
  };

  const hideRestartButton = () => {
    restart.style.display = 'none';
  };

  const hideCircleShadow = (circle) => {
    circle.style.boxShadow = 'none';
  };

  const showCircleShadow = (circle) => {
    circle.style.boxShadow =
      'rgba(0, 0, 0, 0.25) -25px 30px 50px -12px, inset -25px -15px 40px rgba(0, 0, 0, 0.4)';
  };

  const setCircleBackgroundColor = (circle, color) => {
    circle.style.background = color;
  };

  const hideMenuButtons = () => {
    difficulties.forEach((button) => {
      button.style.display = 'none';
    });
    newColorsButton.style.display = 'none';
  };

  const showMenuButtons = () => {
    difficulties.forEach((button) => {
      button.style.display = 'inline';
    });
    newColorsButton.style.display = 'inline';
  };

  return {
    setNewColorsButtonMessage,
    setCircleBackgroundColor,
    setTitleBackground,
    showRestartButton,
    hideRestartButton,
    setDisplayMessage,
    showScoreDisplay,
    hideScoreDisplay,
    showCircleShadow,
    hideCircleShadow,
    hideMenuButtons,
    showMenuButtons,
  };
};

export { getDisplayModule };
