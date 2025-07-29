class User {
  name: string;
  age: number;

  // Overloads
  constructor(name: string);
  constructor(name: string, age: number);

  // One implementation
  constructor(name: string, age?: number) {
    this.name = name;
    //?? → Nullish Coalescing Operator
    //It returns the right-hand value only if the left-hand value is null or undefined. Otherwise, it returns the left-hand value.
    this.age = age ?? 0; // default age is 0 if not passed
  }
}

const user1 = new User("Amit");
console.log(user1.name); // Amit
console.log(user1.age);  // 0


const user2 = new User("Rahul", 28);
console.log(user2.name); // Rahul
console.log(user2.age);  // 28
