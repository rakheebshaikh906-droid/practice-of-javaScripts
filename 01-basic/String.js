//string in javaScript
let str = "Hello, World!";
console.log(str); // Hello, World!

//string concatenation
let str1 = "Hello";
let str2 = "World";
let result = (`${str1} ${str2}`);
console.log(result); // Hello World

//string methods

//length
console.log(str.length); // 13
//charAt
console.log(str.charAt(0)); // H
//toUpperCase
console.log(str.toUpperCase()); // HELLO, WORLD!
//toLowerCase
console.log(str.toLowerCase()); // hello, world!
//indexOf
console.log(str.indexOf("World")); // 7
//substring
console.log(str.substring(0, 5)); // Hello
//split
console.log(str.split(", ")); // ["Hello", "World!"]
//trim
let str3 = "   Hello, World!   ";
console.log(str3.trim()); // Hello, World!
// slice
console.log(str.slice(0, 5)); // Hello
// includes
console.log(str.includes("World")); // true
//replace
console.log(str.replace("World", "JavaScript")); // Hello, JavaScript!

