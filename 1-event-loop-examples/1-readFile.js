const { readFile } = require("fs");

console.log("starting the first task");
readFile("../content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
  console.log("completed the task");
});

console.log("starting the next task");
