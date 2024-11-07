// built in file system module
const { readFileSync, writeFileSync } = require("fs");

console.log("Starting the first task");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

// no file = create
// hasfile = overwrite
// flag a = create new values
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first}, ${second}`,
  { flag: "a" }
);
console.log("Done with this task");
console.log("Starting with the next task");
