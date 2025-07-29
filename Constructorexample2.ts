// Constructorexample.ts
export default class Constructorexample {
  constructor(public name: string, public age: number) {}

  sayHi() {
    console.log(`Hi, I’m ${this.name}`);
  }
}
