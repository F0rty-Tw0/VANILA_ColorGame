const cacheDOM = () => {
  const circles = document.querySelectorAll('.circle');
  const difficulties = document.querySelectorAll('.difficulty');
  const colorName = document.querySelector('.color__name');
  const title = document.querySelector('.title__container');
  const colorDisplay = document.getElementById('colorDisplay');
  const messageDisplay = document.querySelector('#message');
  const newColorsButton = document.querySelector('.menu__reset-colors');
  const playersScore = {
    p1: document.querySelector('.p1__display'),
    p2: document.querySelector('.p2__display'),
  };
  const scoreDisplay = document.querySelector('.score__container');
  const restart = document.querySelector('#restart');
  const winingScoreDisplay = document.querySelector('.wining__score');

  return {
    circles,
    difficulties,
    title,
    colorName,
    colorDisplay,
    messageDisplay,
    newColorsButton,
    playersScore,
    scoreDisplay,
    restart,
    winingScoreDisplay,
  };
};
export { cacheDOM };
