console.log("first");
setTimeout(() => {
  console.log("second");
}, 0); // even the time given is 0 still the output will be first third second because the setTimeout is a asynchronus function.
console.log("third");
