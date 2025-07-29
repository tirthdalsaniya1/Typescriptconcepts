import {hello as hello1} from './Namedexport1';
import {hi as hi1} from './Namedexport1';
import {hello as hello2} from './Namedexport2';
import {hi as hi2} from './Namedexport2';
import {age,greet,Person} from './Namedexport2';

//multiple named export's imports

hello1();
hello2();
hi1();
hi2();

console.log('age is', age);
greet();
new Person();