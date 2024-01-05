export default class Person {
    private _user: string;
    private _age: number;
    private _weight: number;
    private _height: number;

    constructor(user: string, age: number, weight: number, height: number) {
        this._user = user;
        this._age = age;
        this._weight = weight;
        this._height = height;
    }

    get user() {
        return this._user;
    }

    get age() {
        return this._age;
    }

    get weight() {
        return this._weight;
    }

    get height() {
        return this._height;
    }

    set user(value: string) {
        this._user = value;
    }

    set age(value: number) {
        if (value == null) {
            throw new Error('Age cannot be null');
        } else if (value > 125) {
            throw new Error('Are your age is correct?');
        } else {
            this._age = value;
        }
    }

    set weight(value: number) {
        this._weight = value;
    }

    set height(value: number) {
        this._height = value;
    }


    calculateIMC(weight: number, height: number):number{
        if(height <= 0 || weight <=0){
            throw new Error("The values of height and weight must be greater than zero")
        }

        const heightInMeters = height / 100;

        const imc = weight / Math.pow(heightInMeters, 2);

        return imc;
    }

    showIMClassification(imc:number):void{
        if (imc < 18.5) {
            console.log(`Seu IMC eh ${imc.toFixed(2)}\n Abaixo do peso`);
        } else if (imc < 24.9) {
            console.log(`Seu IMC eh ${imc.toFixed(2)}\n Peso normal`);
        } else if (imc < 29.9) {
            console.log(`Seu IMC eh ${imc.toFixed(2)}\n Sobrepeso`);
        } else if (imc < 34.9) {
            console.log(`Seu IMC eh ${imc.toFixed(2)}\n Obesidade grau 1`);
        } else if (imc < 39.9) {
            console.log(`Seu IMC eh ${imc.toFixed(2)}\n Obesidade grau 2`);
        } else {
            console.log(`Seu IMC eh ${imc.toFixed(2)}\n Obesidade grau 3`);
        }
    }

    convertToJson(){
        return {
            user: this._user,
            age: this._age,
            weight: this._weight,
            height: this._height,
        };
    }
}
