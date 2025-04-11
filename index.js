const lib = require("./lib.js");

// console.log(lib.sum(4,5), lib.diff(3,2)); // This will log the object containing sum and diff functions

// import {sum, diff} from './lib.js'

// console.log(sum(4,5), diff(3,2))

// const fs = require('fs');

//Synchronus way of reading file, which we shouldn't be doing in node js
// const t1 = performance.now();
// const txt = fs.readFileSync("demo.txt", 'utf-8');
// console.log(txt)

//Asynchronus way of reading file, which we should be doing in node js
// const t1 = performance.now();
// fs.readFile("demo.txt", "utf-8", (err, txt) => {
//     if (err){
//         console.log("Error in file", err);
//         return;
//     }
//     console.log(txt)
// });
// console.log(lib.sum(4,5), lib.diff(3,2));
// const t2 = performance.now();
// console.log(t2-t1);

const express = require("express");

console.log("Hello World");

const server = express();
server.listen(8080);