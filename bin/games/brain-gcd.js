#!/usr/bin/env node

import readlineSync from 'readline-sync';
import logic from '../../src/index.js';

const gcd = () => {
  const result = {};

  let randomNumber1 = Math.round(Math.random() * 100);
  let randomNumber2 = Math.round(Math.random() * 100);

  console.log(`Question: ${randomNumber1} ${randomNumber2}`);
  result.playerGameAnswer = readlineSync.question('Your answer: ');

  if (randomNumber1 > randomNumber2) {
    const temp = randomNumber1;
    randomNumber1 = randomNumber2;
    randomNumber2 = temp;
  }

  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (randomNumber2 === 0) {
      result.correctGameAnswer = randomNumber1;
      break;
    }
    randomNumber1 %= randomNumber2;
    if (randomNumber1 === 0) {
      result.correctGameAnswer = randomNumber2;
      break;
    }
    randomNumber2 %= randomNumber1;
  }

  return result;
};

logic.startGame(gcd, 'Find the greatest common divisor of given numbers.');
