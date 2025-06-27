
# ESM vs CommonJS (Quick Example)

## ✅ ECMAScript Modules (ESM)

**math.mjs**
```js
// Exporting a function
export function sum(a, b) {
  return a + b;
}
```

**main.mjs**
```js
// Importing the function
import { sum } from './math.mjs';

console.log(sum(2, 3)); // 5
```

> ✔ Uses `import/export` syntax  
> ✔ Works in modern browsers and Node.js (with `"type": "module"` or `.mjs`)

---

## 🟫 CommonJS (CJS)

**math.cjs**
```js
// Exporting a function
function sum(a, b) {
  return a + b;
}

module.exports = { sum };
```

**main.cjs**
```js
// Importing the function
const { sum } = require('./math.cjs');

console.log(sum(2, 3)); // 5
```

> ✔ Uses `require/module.exports`  
> ✔ Default in Node.js (without `"type": "module"`)

---

# 📘 Reading Files in Node.js (Sync vs Async)

## ✅ Asynchronous Read (Callback)

```js
const fs = require('node:fs');

const text = fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log("File content:", data);
});

console.log("Code...");
```
## ✅ Synchronous (Sync)
```js
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data); // Waits for the file to be fully read
```

## ✅ Async with Promises

```js
const fs = require('node:fs/promises');

fs.readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));

```

## ✅ Async/Await

```js
const fs = require('node:fs/promises');

(async () => {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();

```

## 🧩 Sequential vs Parallel

### 🔁 Sequential Async
```js
const a = await fs.readFile('a.txt', 'utf8');
const b = await fs.readFile('b.txt', 'utf8');
```
Reads `a.txt` first, then `b.txt`.

### ⚡ Parallel Async
```js
import { readFile } from 'node:fs/promises';

Promise.all([
  readFile('a.txt', 'utf8'),
  readFile('b.txt', 'utf8')
]).then(([first, second]) => {
    console.log("File content a.txt:", first);
    console.log("File content b.txt:", second);
});
```
Reads both at the **same time**. Faster when files are independent.

---

## 📌 When to Use What?

| Scenario | Use |
|---------|-----|
| Script that reads config once | `fs.readFileSync` |
| Web server handling requests | `fs.readFile` (callback or promises) |
| Clean, readable async logic | `async/await` with `fs/promises` |
| Multiple async tasks | `Promise.all()` for parallelism |
| Self-contained logic | Use an **IIFE** with `async/await` |

---

## 🧪 Bonus: IIFE - Immediately Invoked Function Expression

Useful to run `await` at the top level when not inside a function.

```js
(async () => {
  const data = await fs.readFile('file.txt', 'utf8');
  console.log(data);
})();
```

---

## 🧠 Summary

- **Sync** = easy to use, but blocks everything.
- **Async (callback)** = traditional, but messy with many nested calls.
- **Promises** = modern and cleaner.
- **Async/Await** = the best choice for readable async flow.
- **Use parallel reading** when tasks don't depend on each other.


---

## 🌐 HTTP Status Codes
| Code | Description | Example |
|------|-------------|-------------|
| 100 - 199  |  Informational responses | 102 Processing, 101 Switching Protocols |
| 200 - 299  |  Successful responses | 200 OK, 201 Created |
| 300 - 399  |  Redirection messages | 301  Moved Permanently, 302 Found |
| 400 - 499  |  Client error responses | 400 Bad Request, 401 Unauthorized, 404 Not Found |
| 500 - 599  |  Server error responses | 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable |


### 📚 Resources: 
[🐱 HTTP Status Codes](https://http.cat/) 
[🚧 MDN Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)


---

