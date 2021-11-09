import { getRestartModule } from './Components/resetRound.js';
import { getCirclesModule } from './Components/circles.js';
import { getDifficultyModule } from './Components/difficulty.js';
import { getSetupModule } from './Components/resetListeners.js';

const startGame = async () => {
  const { setCirclesListeners } = getCirclesModule();
  const { resetRound } = getRestartModule();
  const { setWinningScore } = getDifficultyModule();
  const { setButtonListeners, setupResetButtonsListener } = getSetupModule();

  setCirclesListeners();
  setButtonListeners();
  setWinningScore();
  setupResetButtonsListener();
  resetRound();
};

export { startGame };
