import { getDifficultyModule } from './difficulty.js';
import { getDisplayModule } from './display.js';
import { cacheDOM } from './cacheDom.js';

const getScoreModule = () => {
  const { messageDisplay, playersScore } = cacheDOM();
  const { getWinningScore } = getDifficultyModule();
  const { showRestartButton, hideMenuButtons } = getDisplayModule();

  const _setScores = (playerScore, playerDisplay) => {
    const winingScore = getWinningScore();
    playerScore++;
    if (playerScore === winingScore) {
      playerDisplay.classList.add('green');
    }
    playerDisplay.textContent = playerScore;
  };

  const resetAllScores = () => {
    Object.values(playersScore).forEach((score) => {
      score.textContent = 0;
      score.classList.remove('green');
    });
  };
  
  const addScores = () => {
    const scores = getCurrentScores();
    if (messageDisplay.textContent === 'You Won!') {
      _setScores(scores.p1, playersScore.p1);
    } else if (messageDisplay.textContent === 'You lost, Try Again') {
      _setScores(scores.p2, playersScore.p2);
    }
  };

  const getCurrentScores = () => {
    return { p1: playersScore.p1.textContent, p2: playersScore.p2.textContent };
  };

  const checkEndGame = (scores) => {
    const winingScore = getWinningScore();
    if (scores.p1 == winingScore || scores.p2 == winingScore) {
      showRestartButton();
      hideMenuButtons();
    }
  };

  return {
    addScores,
    checkEndGame,
    resetAllScores,
    getCurrentScores,
  };
};
export { getScoreModule };
