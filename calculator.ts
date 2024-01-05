import promptSync from 'prompt-sync';
import Person from './Person'; 

const prompt = promptSync();

const user = prompt('Enter your name: ');
const age = parseInt(prompt('Enter your age: '))
const weight = parseInt(prompt('Enter your weight: '))
const height = parseInt(prompt('Enter your height | without comma or period: '))

const person = new Person(user, age, weight, height);
const imc = person.calculateIMC(person.weight, person.height);
person.showIMClassification(imc);