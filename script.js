// Remember, we're gonna use strict mode in all scripts!
'use strict';

// Implementation of game logic
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess > number) {
    document.querySelector('.message').textContent = '😖 Too high!';
  } else if (guess < number) {
    document.querySelector('.message').textContent = '🤷‍♂️ Too low!!';
  } else if (guess == number) {
    document.querySelector('.message').textContent = '✨YOU WON🧨';
  }
});
