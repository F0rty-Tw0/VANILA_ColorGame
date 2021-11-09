import { cacheDOM } from './cacheDom.js';

const getDifficultyModule = () => {
  const { difficulties, winingScoreDisplay } = cacheDOM();

  const _getCurrentDifficultyOptions = () => {
    const difficulty = _getCurrentDifficulty();

    const options =
      difficulty.textContent === 'easy'
        ? { numberOfCircles: 3, tries: 0, winingScore: 5 }
        : difficulty.textContent === 'hard'
        ? { numberOfCircles: 9, tries: 2, winingScore: 15 }
        : { numberOfCircles: 6, tries: 1, winingScore: 10 };
    return options;
  };

  const _getCurrentDifficulty = () => {
    const difficulty = Array.from(difficulties).filter((difficulty) =>
      difficulty.classList.contains('selected')
    );
    return difficulty[0];
  };

  const getWinningScore = () => {
    const currentDifficulty = _getCurrentDifficulty();
    const { winingScore } = _getCurrentDifficultyOptions(currentDifficulty);
    return winingScore;
  };

  const getTries = () => {
    const currentDifficulty = _getCurrentDifficulty();
    const { tries } = _getCurrentDifficultyOptions(currentDifficulty);
    return tries;
  };

  const getNumberOfCircles = () => {
    const currentDifficulty = _getCurrentDifficulty();
    const { numberOfCircles } = _getCurrentDifficultyOptions(currentDifficulty);
    return numberOfCircles;
  };

  const setDifficulty = (difficulty) => {
    difficulty.classList.add('selected');
  };

  const removeSelectedDifficulty = () => {
    difficulties.forEach((difficulty) =>
      difficulty.classList.remove('selected')
    );
  };

  const setWinningScore = () => {
    const winingScore = getWinningScore();
    winingScoreDisplay.textContent = winingScore;
  };

  return {
    getNumberOfCircles,
    getWinningScore,
    setWinningScore,
    removeSelectedDifficulty,
    setDifficulty,
    getTries,
  };
};

export { getDifficultyModule };
