import { startGame } from './game.js';

const renderGame = async () => {
  const content = document.querySelector('.wrapper');
  const response = await fetch('./pages/Game/game.html');
  const gameHtml = await response.text();
  content.innerHTML = gameHtml;
  await startGame();
};

export default renderGame;
