// main.ts
import { Status, Level } from './Enumexample2';

function getStatusMessage(status: Status): string {
  if (status === Status.Success) return '✅ All good!';
  if (status === Status.Failure) return '❌ Something went wrong!';
  return '⌛ Still pending...';
}

console.log(getStatusMessage(Status.Failure)); // ❌ Something went wrong!


console.log(Level.Low); // 👉 0
console.log(Level.Medium); // 👉 1
