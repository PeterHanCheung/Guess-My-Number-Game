'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;
const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const setNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  setScore(score);
  document.body.style.backgroundColor = 'black';
  setMessage('Guess My Number!');
  setNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //   if doesnt write number
  if (!guess) {
    setMessage('You did not type a number');

    //   if wins
  } else if (guess === secretNumber) {
    setMessage('Congratulations 🎉🎉');
    setNumber(secretNumber);
    document.body.style.backgroundColor = 'green';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //if loses
  } else if (guess !== secretNumber) {
    if (score > 1) {
      setMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      setScore(score);
    } else {
      setMessage('You Lost!');
      setScore(0);
    }
  }
});
