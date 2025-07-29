/*
An interface in TypeScript is like a blueprint for objects.
It defines what properties and what types an object must have — without implementing anything.
When to Use interface?
1. For object shape definitions
2. When you're modeling data structures or API response objects
3. For class contracts (interfaces can be implemented by classes)
*/
export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}
