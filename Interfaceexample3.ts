/*
An interface in TypeScript is like a blueprint for objects.
It defines what properties and what types an object must have — without implementing anything.
*/
interface User5 {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // optional
}

const user: User5 = {
  id: 1,
  name: "Amit",
  email: "amit@example.com"
};

console.log(user.name); // ✅ "Amit"
console.log(user.id);
console.log(user.email);
