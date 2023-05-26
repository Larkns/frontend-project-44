import readlineSync from 'readline-sync';

const evenGame = (name) => {
    for (let i = 0; i < 3; i += 1) {
        const randomNumber = Math.round(Math.random() * 100);
        let playerAnswerBool;
        const correctAnswerBool = randomNumber % 2 === 0;
        const correctAnswer = correctAnswerBool ? 'yes' : 'no';

        console.log('Answer "yes" if the number is even, otherwise answer "no".');
        console.log(`Question: ${randomNumber}`);

        const playerAnswer = readlineSync.question('Your answer: ');

        if (playerAnswer === 'yes') {
            playerAnswerBool = true;
        }
        if (playerAnswer === 'no') {
            playerAnswerBool = false;
        }

        if (correctAnswerBool === playerAnswerBool) {
            console.log('Correctomundo!');
        } else {
            console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
            console.log(`Let's try again, ${name}`);
            return;
        }
    }
    console.log(`Congratulations, ${name}`);
};

export default { evenGame };
