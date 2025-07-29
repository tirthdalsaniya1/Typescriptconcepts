import greet from './DefaultNamedExport';         // default
import { hello } from './DefaultNamedExport';     // named

/*
Question	Answer
Multiple default exports in one file?	❌ Not allowed
Multiple named exports in one file?	✅ Yes
One default + many named exports?	✅ Yes
Multiple default imports across files?	✅ Yes
Multiple default imports from one file?	❌ Not allowed
*/

greet();
hello();