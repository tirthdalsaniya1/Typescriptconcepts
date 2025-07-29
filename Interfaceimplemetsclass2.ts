// Main.ts
import { Person } from './Interfaceimplemetsclass';

class Student implements Person {
  constructor(public name: string, public age: number) {}

  display() {
    console.log(`${this.name} is ${this.age} years old`);
  }
}

const s = new Student("Amit", 20);
s.display(); // Amit is 20 years old