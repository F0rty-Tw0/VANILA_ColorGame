import { getRestartModule } from './resetRound.js';
import { getScoreModule } from './scores.js';
import { getDisplayModule } from './display.js';
import { getDifficultyModule } from './difficulty.js';
import { cacheDOM } from './cacheDom.js';

const getSetupModule = () => {
  const { difficulties, scoreDisplay, newColorsButton } = cacheDOM();
  const { resetRound } = getRestartModule();
  const { resetAllScores } = getScoreModule();
  const { showMenuButtons, hideRestartButton } = getDisplayModule();
  const { removeSelectedDifficulty, setDifficulty, getTries, setWinningScore } =
    getDifficultyModule();

  const _difficultyButtonsClickListener = () => {
    difficulties.forEach((difficulty) => {
      difficulty.addEventListener('click', () => {
        removeSelectedDifficulty();
        setDifficulty(difficulty);
        getTries();
        setWinningScore();
        resetAllScores();
        resetRound();
      });
    });
  };

  const _restartClickListener = () => {
    restart.addEventListener('click', () => {
      showMenuButtons();
      resetAllScores();
      resetRound();
      hideRestartButton();
    });
  };

  const _newColorsListener = () => {
    newColorsButton.addEventListener('click', () => {
      resetRound();
    });
  };
  
  const _scoreDisplayListener = () => {
    scoreDisplay.addEventListener('click', () => {
      if (restart.style.display != 'inline') {
        resetRound();
      }
    });
  };

  const setupResetButtonsListener = () => {
    _scoreDisplayListener();
    _newColorsListener();
  };

  const setButtonListeners = () => {
    _difficultyButtonsClickListener();
    _restartClickListener();
  };

  return {
    setupResetButtonsListener,
    setButtonListeners,
  };
};
export { getSetupModule };
