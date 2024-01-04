import promptSync from 'prompt-sync';

const prompt = promptSync();

function getNameUser(name: string) {
    name = prompt('Enter your name: ');
    console.log(`Hello, ${name}!`);
}


