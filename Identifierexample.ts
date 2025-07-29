export class Person {

    public name: string;
    private age: number;
    protected email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    public getDetails(): string {

        return `${this.name}, ${this.age}`
    }

    private secret() {
        console.log("This is private");
    }

}

const p = new Person("Amit", 15, "amit@example.com");

console.log(p.name);   // works
console.log(p.getDetails()); // works
// console.log(p.age);    // ❌ Error: Property 'age' is private
// console.log(p.email);  // ❌ Error: Property 'email' is protected
