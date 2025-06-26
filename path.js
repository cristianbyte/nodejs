const path = require('node:path');

console.log(path.sep);

const filePath = path.join('folder1', 'folder2', 'file.txt');
// Output: folder1/folder2/file.txt
console.log(filePath);

// Output: file.txt
console.log(path.basename(filePath));

// Output: file
console.log(path.basename(filePath, '.txt'));

// Output: extension
console.log(path.extname(filePath));
