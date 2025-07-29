import hello1 from './Defaultexport1';
import hello2 from './Defaultexport2';
//here u can not import with same name as both class have function name hello so we need to rename at the time of import

hello1(); // Outputs: hello from Defaultexport1
hello2(); // Outputs: hello from Defaultexport2