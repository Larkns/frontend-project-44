#!/usr/bin/env node

import readlineSync from 'readline-sync';
import logic from '../../src/index.js';

const calc = () => {
    const result = {};

    const randomNumber1 = Math.round(Math.random() * 100);
    const randomNumber2 = Math.round(Math.random() * 100);
    const randomMathOperationIndex = Math.round(Math.random() * 2);
    let mathOperation;

    switch (randomMathOperationIndex) {
    case 0:
        mathOperation = '+';
        result.correctGameAnswer = randomNumber1 + randomNumber2;
        break;
    case 1:
        mathOperation = '-';
        result.correctGameAnswer = randomNumber1 - randomNumber2;
        break;
    case 2:
        mathOperation = '*';
        result.correctGameAnswer = randomNumber1 * randomNumber2;
        break;
    default:
        console.log('Error');
    }

    console.log(`Question: ${randomNumber1} ${mathOperation} ${randomNumber2}`);

    result.playerGameAnswer = readlineSync.question('Your answer: ');

    return result;
};

logic.startGame(calc, 'What is the result of the expression?');
