// built in module os = operating system
const os = require("os");

// info about user
const user = os.userInfo();
console.log(user);

// system uptime
console.log(`The system Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(currentOS);
