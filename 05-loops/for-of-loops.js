//for of loops
/* for of loops are used to loop through iterable objects such as arrays, strings, maps, sets, and more. 
Thhey provide a simpler and more readable syntax compared to traditional for loops when working with these
types of data structures. The for of loop iterates over the values of the iterable object, rather than the indices. */

//syntax
//for (variable of iterable) {
//    // code to be executed
//}

//for of loop with array
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
    console.log(number);
}

//for of loop with string
let str = "Hello";
for (let char of str) {
    console.log(char);
}

//map
let myMap = new Map();
myMap.set("name", "Alice");
myMap.set("age", 30);
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

//set
let mySet = new Set([1, 2, 3, 4, 5]);
for (let value of mySet) {
    console.log(value);
}
