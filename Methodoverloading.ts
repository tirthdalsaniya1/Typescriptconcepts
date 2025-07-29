/*
| Rule                                              | Explanation                           | 
| ------------------------------------------------- | ------------------------------------- |
| You can declare **multiple method signatures**    | Above the method definition           |
| You must write **one implementation**             | That handles all possible input types | 
| The actual function must accept **union types**   | e.g. \`string                         | 
| Return type must be compatible with all overloads | e.g. both signatures return `string`  |
*/

class Greeter {
  // Overload signatures
  greet(name: string): string;
  greet(age: number): string;

  // Single implementation
  greet(value: string | number): string {
    if (typeof value === 'string') {
      return `Hello, ${value}`;
    } else {
      return `You are ${value} years old.`;
    }
  }
}

const g = new Greeter();

console.log(g.greet("Amit"));   // Hello, Amit
console.log(g.greet(15));       // You are 15 years old