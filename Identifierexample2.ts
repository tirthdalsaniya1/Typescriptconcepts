import { Person } from './Identifierexample';

export class Student extends Person {

    constructor(name: string, age: number, email: string) {
        //Constructors for derived classes must contain a 'super' call.

        super(name, age, email);

    }
    showEmail() {
        console.log(`Student email is: ${this.email}`); // ✅ works (protected)
    }
}
