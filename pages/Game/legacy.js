  // const changeDifficulty = (difficulty) => {
  //   difficulties.forEach((difficulty) =>
  //     difficulty.classList.remove('selected')
  //   );
  //   difficulty.classList.add('selected');
  //   resetScores();
  //   difficulty.textContent === 'Easy'
  //     ? (options = { numberOfCircles: 3, tries: 0 })
  //     : difficulty.textContent === 'Hard'
  //     ? (options = { numberOfCircles: 9, tries: 1 })
  //     : (options = { numberOfCircles: 6, tries: 2 });
  // };

  // const resetScores = () => {
  //   score.p1 = 0;
  //   score.p2 = 0;
  // };

  // const setupCircles = () => {
  //   circles.forEach((circle) => {
  //     circle.addEventListener('click', () => {
  //       checkClickedColor(circle);
  //     });
  //   });
  // };

  // const checkClickedColor = (circle) => {
  //   const clickedColor = circle.style.background;
  //   //compare color to picked circle
  //   if (clickedColor === pickedColor) {
  //     nextTurn(clickedColor, 'You Won!');
  //     title.style.background = `linear-gradient(${clickedColor} 30%, transparent)`;
  //   } else if (options.tries < 1 && circle.style.background !== 'transparent') {
  //     nextTurn('transparent', 'You lost, Try Again');
  //   } else {
  //     while (options.tries > 0) {
  //       circle.style.background = 'transparent';
  //       circle.style.boxShadow = 'none';
  //       messageDisplay.textContent = 'Try one more time';
  //       options.tries--;
  //     }
  //   }
  // };

  // const nextTurn = (color, text) => {
  //   messageDisplay.textContent = text;
  //   newColorsButton.textContent = 'Reset Colors?';
  //   scored.style.display = 'inline';
  //   addScore();
  //   changeColor(color);
  //   checkEndGame();
  // };

  // const resetRound = () => {
  //   scored.style.display = 'none';
  //   newColorsButton.textContent = 'New Colors';
  //   messageDisplay.textContent = '';
  //   title.style.background =
  //     'linear-gradient(to bottom, #067669 30%, transparent)';
  //   resetTries(difficulties);
  //   resetCircles(circles);
  // };

  // const resetTries = (difficulties) => {
  //   if (difficulties[0].classList.contains('selected')) {
  //     options.tries = 0;
  //   } else if (
  //     difficulties[1].classList.contains('selected') ||
  //     difficulties[2].classList.contains('selected')
  //   ) {
  //     options.tries = 1;
  //   }
  // };

  // const resetCircles = (circles) => {
  //   let colors = generateRandomColors(options.numberOfCircles);
  //   pickedColor = pickColor(colors);
  //   colorDisplay.textContent = `of ${pickedColor}`;
  //   circles.forEach((circle, index) => {
  //     if (colors[index]) {
  //       circle.style.display = 'block';
  //       circle.style.boxShadow =
  //         'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, inset -25px -15px 40px rgba(0, 0, 0, 0.3)';
  //       circle.style.background = colors[index];
  //     } else {
  //       circle.style.display = 'none';
  //     }
  //   });
  // };

  // const checkEndGame = () => {
  //   if (score.p1 === winingScore || score.p2 === winingScore) {
  //     restart.style.display = 'inline';
  //     newColorsButton.style.display = 'none';
  //     difficulties.forEach((button) => {
  //       button.style.display = 'none';
  //     });
  //     restart.addEventListener('click', () => {
  //       restart.style.display = 'none';
  //       score.p1 = 0;
  //       score.p2 = 0;
  //       display.p1.textContent = 0;
  //       display.p2.textContent = 0;
  //       gameOver = false;
  //       const colors = ['green', 'red'];
  //       display.p1.classList.remove(...colors);
  //       display.p2.classList.remove(...colors);
  //       difficulties.forEach((button) => {
  //         button.style.display = 'inline';
  //       });
  //       newColorsButton.style.display = 'inline';
  //       resetRound();
  //     });
  //   }
  // };

  // const changeColor = (color) => {
  //   //loop through all circles
  //   circles.forEach((circle) => {
  //     if (color === 'transparent') {
  //       circle.style.boxShadow = 'none';
  //     } else {
  //       circle.style.boxShadow =
  //         'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px, inset -25px -15px 40px rgba(0, 0, 0, 0.3)';
  //     }
  //     circle.style.background = color;
  //   });
  // };

  // const addScore = () => {
  //   if (messageDisplay.textContent === 'You Won!') {
  //     if (!gameOver) {
  //       score.p1++;
  //       if (score.p1 === winingScore) {
  //         display.p1.classList.add('green');
  //         gameOver = true;
  //       }
  //       display.p1.textContent = score.p1;
  //     }
  //   } else if (messageDisplay.textContent === 'You lost, Try Again') {
  //     if (!gameOver) {
  //       score.p2++;
  //       if (score.p2 === winingScore) {
  //         display.p2.classList.add('red');
  //         gameOver = true;
  //       }
  //       display.p2.textContent = score.p2;
  //     }
  //   }
  // };