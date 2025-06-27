const os = require('node:os'); 


console.log("Operating System:", os.type());
console.log("Host Name:", os.hostname());
console.log("Total Memory (GB):", os.totalmem() / 1e9);
console.log("Free Memory (GB):", os.freemem() / 1e9);
console.log("Architectue :", os.arch());
console.log("Platform:", os.platform());
console.log("CPUs: ", os.cpus());

console.log("CPU:", os.cpus()[0].model);