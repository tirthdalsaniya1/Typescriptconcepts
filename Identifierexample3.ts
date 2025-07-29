import { Student } from './Identifierexample2';

const student = new Student("amit", 15, "amit@gmail.com");

console.log(student.name);        // ✅ public → works
student.showEmail();              // ✅ shows protected email

// ❌ The following will error:
// console.log(student.email);       // ❌ Error: 'email' is protected