function add() {
    let a = 10, b = 20;
    console.log('sum of a and b is', a + b);
}

add();

function addAndPrint(a: number, b: number): void {
    console.log('sum of a and b is', a + b);

}

addAndPrint(10, 20);

function addAndPrint2(a: number, b: number): number {
    return a + b;
}

console.log('sum of two no is', addAndPrint2(10, 20));

/*
You can overload functions in TypeScript, but not the same way as in Java.
TypeScript supports overload signatures, 
but the actual function must handle the logic for all cases because 
JavaScript (the runtime) does not support overloading.
*/
// declaration is optional
function greet(name: string, age: number): string;
function greet(name: string): string;

function greet(name: string, age?: number): string {

    if (age !== undefined) {
        return `hello name is ${name} & age is ${age}`;
    }

    return `hello ${name}`;
}
;

console.log(greet('rajesh', 25));
console.log(greet('raju'));

function parseValue(value: string | number): string | number {

    if (typeof value === "string") {
        return parseInt(value);
    }

    return value;

}

console.log(parseValue('string value'));
console.log(parseValue(100));