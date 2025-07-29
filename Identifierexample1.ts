import {Person} from './Identifierexample';

const p = new Person("Amit", 15, "atul@example.com");

console.log(p.name);   // works
console.log(p.getDetails()); // works
// console.log(p.age);    // ❌ Error: Property 'age' is private
// console.log(p.email);  // ❌ Error: Property 'email' is protected
