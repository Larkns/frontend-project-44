#!/usr/bin/env node

import readlineSync from 'readline-sync';
import logic from '../../src/index.js';

const even = () => {
    const result = {};

    const randomNumber = Math.round(Math.random() * 100);

    console.log(`Question: ${randomNumber}`);

    result.playerGameAnswer = readlineSync.question('Your answer: ');
    result.correctGameAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';

    return result;
};

logic.startGame(even, 'Answer "yes" if the number is even, otherwise answer "no".');
