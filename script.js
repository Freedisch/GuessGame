// Remember, we're gonna use strict mode in all scripts!
'use strict';

// Implementation of game logic
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let score = 20;

// Impleemntation of the "CHECK" button

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }
  // When the input is to big
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😖 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💩You lost';
    }
  }
  // when the input is too small
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤷‍♂️ Too low!!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💩You lost';
    }
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = '✨YOU WON🧨';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
  }
});

// Implementation to the "AGAIN" button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
