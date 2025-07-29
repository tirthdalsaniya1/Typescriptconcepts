//as you can not write multiple deafult export 
//you can combine deafult and named export

export default function greet() {
  console.log("This is the main greet from DefaultNamedExport");
}

export function hello() {
  console.log("This is a named hello DefaultNamedExport");
}
