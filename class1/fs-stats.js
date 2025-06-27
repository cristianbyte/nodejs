const fs = require('node:fs');

const stats = fs.statSync('file.txt');

clg
console.log(`File name: ${stats.name}`);
console.log(`File path: ${stats.path}`);
console.log(`File size: ${stats.size} bytes`);
console.log(`File modified at: ${stats.mtime}`);
console.log(`File created at: ${stats.birthtime}`);
console.log(`Is file a directory? ${stats.isDirectory()}`);
console.log(`Is file a file? ${stats.isFile()}`);
console.log(`Is file a symbolic link? ${stats.isSymbolicLink()}`);
