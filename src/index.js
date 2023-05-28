#!/usr/bin/env node

import readlineSync from 'readline-sync';

const startGame = (game, description) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${name}`);

    console.log(description);

    for (let i = 0; i < 3; i += 1) {
        const gameResults = game();
        let playerAnswer = gameResults.playerGameAnswer;
        if (!Number.isNaN(+(playerAnswer))) {
            playerAnswer = +playerAnswer;
        }
        const correctAnswer = gameResults.correctGameAnswer;

        if (playerAnswer !== correctAnswer) {
            console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
            console.log(`Let's try again, ${name}`);
            return;
        }
        console.log('Correctomundo!');
    }
    console.log(`Congratulations, ${name}`);
};

export default { startGame };
