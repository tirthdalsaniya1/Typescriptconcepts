//function type signatures

import { Logger } from './Typeexample5';

const log: Logger = (msg, level = 'info') => {
  console.log(`[${level.toUpperCase()}] ${msg}`);
};

log("Test passed");             // [INFO] Test passed
log("Something wrong", "error"); // [ERROR] Something wrong

