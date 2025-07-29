
// note: you can not write two function with same name in two diff files. 
// It will throw error. You can write but you need to export that function.


//Default parameters
function greet1(name: string = "Guest") {
  console.log(`Hello, ${name}`);
}

greet1(); // Hello, Guest
greet1("John"); // Hello, John


function greet2(name: string = "amey") {
  console.log(`Namaste, ${name}`);
}

//pass diff param 
greet2("ajit"); // Namaste, ajit
//dont pass anything it will print default param
greet2(); // Namaste, amey

//optional parameter
function logMethod(message?: string) {

  console.log(message ?? 'no message provided');
}

logMethod();
logMethod('this is a warning');

//function as a variable

let sum = function multiply(): number {
  let a = 10, b = 20;
  return a * b;
}
// if u will call like below it will not print actual number bcoz sum is a function
console.log(sum);
// call like this way
console.log(sum());

let sum1 = function (): number {

  let a = 10, b = 20;
  return a * b;
}

console.log(sum1());