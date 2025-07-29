
//arrow function is even more simple

let sum2 = (): number => 10 * 20;

console.log(sum2());


let sum3 = (): number => {

    let a = 10;
    let b = 20;
    return a * b;

};

console.log(sum3());

let a = 5, b = 10;

const sum4 = (): number => a * b;

console.log(sum4()); // 50


const fn = () => {

    // logic here
    console.log('this is a normal arrow function');
}

fn();

// no parameter
const sayHi = (): void => console.log("Hi!");
sayHi(); // Hi!


const multiply = (a: number, b: number, c: number): number => a * b * c;

console.log(multiply(10, 20, 10));


const addnums = (a: number, b: number): number => {

    return a * b;
}

console.log(addnums(5, 20));


//array

const array:number[] = [1,2,3,4];

const doubled = array.map(n=>n*2);

console.log(doubled);


const arraySquare:number[] = [1,2,3,4];

const squared = arraySquare.map(n=>n*n);

console.log(squared);

const sayHiHello = ():void => console.log('hi hello');
sayHiHello();