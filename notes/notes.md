# Synchronous v. Asynchronous Code

## Blocking v. Non-Blocking

### Sync Code

1. Line-by-line execution
1. Slow process if it's a complex code
1. Hence, blocking.

```Javascript
// Synchronous Code
const input = fs.readFileSync('input.txt', 'utf-8');
console.log(input);
```

### Asynchronous Code

1. Async
1. Non-blocking

```Javascript
// Asynchronous Code
const fs = require('fs');

fs.readFile('input.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log('Reading file...');
```

---

### **Node.js Process**

1. Single thread (this is where app runs)
1. Others get blocked when precedent hasn't been executed

#### Back-ground

1. This is where time-consuming tasks should be run

---

## **Routing**

Implementation of different actions for different URLs.
