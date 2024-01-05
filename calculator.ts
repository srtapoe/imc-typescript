import promptSync from 'prompt-sync';
import Person from './Person'; 
import * as fs from 'fs';

const prompt = promptSync();

const user = prompt('Enter your name: ');
const age = parseInt(prompt('Enter your age: '))
const weight = parseInt(prompt('Enter your weight: '))
const height = parseInt(prompt('Enter your height | without comma or period: '))

const person = new Person(user, age, weight, height);
const json = JSON.stringify(person.convertToJson(), null, 2);
const pathFromJSON = 'users.json';
fs.writeFileSync(pathFromJSON, json);
const imc = person.calculateIMC(person.weight, person.height);
person.showIMClassification(imc);
console.log('Date saved in', pathFromJSON);