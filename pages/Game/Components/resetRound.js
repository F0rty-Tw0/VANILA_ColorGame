import { getDifficultyModule } from './difficulty.js';
import { getDisplayModule } from './display.js';
import { getCirclesModule } from './circles.js';
import { resetCirclesModule } from './resetCircles.js';

const getRestartModule = () => {
  const { resetCurrentTries } = getCirclesModule();
  const {
    hideScoreDisplay,
    setDisplayMessage,
    setTitleBackground,
    setNewColorsButtonMessage,
  } = getDisplayModule();

  const { getNumberOfCircles } = getDifficultyModule();

  const { resetCircles } = resetCirclesModule();

  const resetRound = () => {
    hideScoreDisplay();
    setNewColorsButtonMessage('New Colors');
    setDisplayMessage('');
    setTitleBackground('#067669');
    resetCurrentTries();
    resetCircles(getNumberOfCircles());
  };

  return { resetRound };
};

export { getRestartModule };
