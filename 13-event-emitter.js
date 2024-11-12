const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`Data received \nname : ${name} \nage: ${age}`);
});
customEmitter.on("response", () => {
  console.log("another data is received");
});
customEmitter.emit("response", "john", 24);
