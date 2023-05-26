import evenGame from './brain-even.js';
import cli from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const { greetings } = cli;

const name = greetings();

evenGame.evenGame(name);
