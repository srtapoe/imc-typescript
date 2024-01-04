class Person {
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
}
