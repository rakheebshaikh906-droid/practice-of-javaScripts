//+++++++++++++++++++++++Number in JavaScript++++++++++++++++++++++
let x = new Number(5);
console.log(x); // [Number: 5]

//number methods

//toString
console.log(x.toString()); // "5"
//toFixed
console.log(x.toFixed(2)); // "5.00"
//toExponential
console.log(x.toExponential(2)); // "5.00e+0"
//toPrecision
console.log(x.toPrecision(2)); // "5.0"
//toLocaleString
let y = 10000000000;
console.log(y.toLocaleString('en-IN')); // "10,000,000,000" (depending on locale)

//number.Min_VALUE
console.log(Number.MIN_VALUE); // 5e-324
//number.Max_VALUE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

//++++++++++++++++++++++Math in JavaScript++++++++++++++++++++++

//Math.PI
console.log(Math.PI); // 3.141592653589793
//Math.E
console.log(Math.E); // 2.718281828459045
//Math.sqrt
console.log(Math.sqrt(16)); // 4
//Math.abs
console.log(Math.abs(-5)); // 5
//Math.pow
console.log(Math.pow(2, 3)); // 8
//Math.round
console.log(Math.round(4.7)); // 5
//Math.ceil
console.log(Math.ceil(4.2)); // 5
//Math.floor
console.log(Math.floor(4.7)); // 4
//Math.random
console.log(Math.random()); // random number between 0 and 1
//important formula for random value between min and max
let min = 10;
let max = 20;
let randomValue = Math.floor(Math.random() * (max - min + 1) + min);
console.log(randomValue); // random number between 10 and 20

//Math.sign
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0

//Math.max
console.log(Math.max(1, 5, 3)); // 5
//Math.min
console.log(Math.min(1, 5, 3)); // 1
//Math.log
console.log(Math.log(10)); // 2.302585092994046