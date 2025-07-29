//this function is called in the class Exportdemo2.ts
// named export, you can export n number of function using named export from a one file
export function hello() {

    console.log('hello from Namedexport2 class');
}

export function hi() {

    console.log('hi from Namedexport2 class');
}


export const age = 30;

export function greet() {
    console.log('greeting you from Namedexport2 class');
}
export class Person {

    constructor() {
        console.log('person class const');
    }
}
