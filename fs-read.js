import { readFile } from 'node:fs/promises';

const text = fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log("File content 2:", data);
});

console.log("File content:");
console.log(text);

Promise.all([
  readFile('a.txt', 'utf8'),
  readFile('b.txt', 'utf8')
]).then(([first, second]) => {
    console.log("File content a.txt:", first);
    console.log("File content b.txt:", second);
});