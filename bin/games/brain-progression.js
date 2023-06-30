#!/usr/bin/env node

import readlineSync from 'readline-sync';
import logic from '../../src/index.js';

const progression = () => {
  const result = {};

  const pLength = Math.round(Math.random() * 5 + 5);
  const pMarked = Math.round(Math.random() * (pLength - 1));
  const pIncrease = Math.round(Math.random() * 8 + 1);
  const pFirstNumber = Math.round(Math.random() * (100 - pLength * pIncrease));
  const progressionSeries = [pFirstNumber];

  let progressionString = (pMarked === 0) ? '..' : pFirstNumber;

  for (let i = 1; i < pLength; i += 1) {
    progressionSeries[i] = progressionSeries[i - 1] + pIncrease;
    if (i === pMarked) {
      progressionString = (`${progressionString} ..`);
    } else {
      progressionString = (`${progressionString} ${progressionSeries[i]}`);
    }
  }

  console.log(`Question: ${progressionString}`);

  result.playerGameAnswer = readlineSync.question('Your answer: ');
  result.correctGameAnswer = progressionSeries[pMarked];

  return result;
};

logic.startGame(progression, 'What number is missing in the progression?');
