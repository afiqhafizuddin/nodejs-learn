const fs = require(`fs`);

// const hello = `Hello, world`;

// console.log(hello);

const textIn = fs.readFileSync(`./input.txt`, `utf-8`);
console.log(textIn);

const textOut = `This is the person studying how to code: ${textIn}.\nCreated on ${Date.now()}`;

fs.writeFileSync(`./output.txt`, textOut);
console.log(`File Written`);
