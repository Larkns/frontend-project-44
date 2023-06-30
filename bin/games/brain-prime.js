#!/usr/bin/env node

import readlineSync from 'readline-sync';
import logic from '../../src/index.js';

const prime = () => {
  const result = {};

  const randomNumber = Math.round(Math.random() * 98 + 2);
  let isPrime = true;

  console.log(`Question: ${randomNumber}`);

  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      isPrime = false;
    }
  }

  result.playerGameAnswer = readlineSync.question('Your answer: ');
  result.correctGameAnswer = (isPrime) ? 'yes' : 'no';

  return result;
};

logic.startGame(prime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
