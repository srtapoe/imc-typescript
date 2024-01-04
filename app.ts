import promptSync from 'prompt-sync';

const prompt = promptSync();

const name: string = prompt('Enter your name: ');
console.log(`Hello, ${name}!`);
