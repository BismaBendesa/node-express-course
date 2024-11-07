// Modules - Encapsulated Code (only share minimum)
// CommonJS, every file is module (by default)

// when you are creating your own modules start with ./ otherwise if third party library it's okay
const names = require("./4-name");
const sayHi = require("./5-utils");
const person = require("./6-alternative-export");

// not working in the node version 18
console.log(require("./7-mind-grenade"));

// console.log(person);
// console.log(sayHi);
// console.log(module);

// sayHi("susan");
// sayHi(names.john);
// sayHi(names.evan);
