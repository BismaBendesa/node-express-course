// Path built in module

const path = require("path");

console.log(path.sep);

const filepath = path.join("/content", "subfolder", "test.txt");
console.log(`Filepath : ${filepath}`);

const base = path.basename(filepath);
console.log(`Basename : ${base}`);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(`Absoulute Path : ${absolute}`);
