let mynumber: number;
mynumber = 20;
console.log('number is', mynumber);
//back ticks uses template literals, using template literals with string interpolation
console.log(`number is ${mynumber}`);
console.error(`number is: ${mynumber}`);

//update the number, we can reassign the variable
mynumber = 30;

console.log('updated number is', mynumber);

let myName: string;
myName = 'John Doe';
console.log('myName is', myName);

//back ticks uses template literals, using template literals with string interpolation
console.log(`myName is ${myName}`);
console.error(`myName is: ${myName}`);

myName = 'Jane Doe222';
console.log('updated myName is', myName);


let isActive: boolean;
isActive = true;
console.log('isActive is', isActive);
//back ticks uses template literals, using template literals with string interpolation
console.log(`isActive is ${isActive}`);
console.error(`isActive is: ${isActive}`);

let myArray: number[];
myArray = [1, 2, 3, 4, 5];
console.log('myArray is', myArray);
//back ticks uses template literals, using template literals with string interpolation
console.log(`myArray is ${myArray}`);

let myarray2: number[];
myarray2 = [2, 2, 2, 22];

console.log('myarra2 is', myarray2);

let myarray3: number[] = [1, 1, 1];

console.log('myArray3 is', myarray3);

let strArray: string[] = ['amit', 'ajay']; // or ["amit", "ajay"]

console.log('strArray is', strArray);


let something: any;

something = 20;
something = true;

console.log('something is', something);

//object
/*
string → primitive type (preferred)

String → object wrapper type (less common, heavier)
*/
let users: { name: string; age: number } = {

    name: "Bob",
    age: 25,

};

console.log('name of the user is', users.name);
console.log('age of the user is', users.age);