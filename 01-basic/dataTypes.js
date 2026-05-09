// JavaScript Data Types + Variables + Theory
// String
// Used to store text values

let name = "Rakheeb";
console.log(name);
console.log(typeof name);

// Number
// Used to store numbers
// Integer and decimal both are number datatype

let age = 20;
let price = 99.99;
console.log(age);
console.log(price);

console.log(typeof age);
console.log(typeof price);

// Boolean
// Used for true or false values

let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

// Undefined
// When a variable has no value assigned

let city;
console.log(city);
console.log(typeof city);

// Null
// Used for intentionally empty values

let data = null;
console.log(data);
console.log(typeof data);

// Object
// Used to store multiple values together
// Stored in key : value format

let student = {
    name: "Rakheeb",
    age: 20
};
console.log(student);
console.log(typeof student);

// Array
// Used to store multiple values in list form

let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);
console.log(typeof fruits);

/*
JavaScript is Dynamically Typed

Meaning:
We do not write int, float, string etc.

JavaScript automatically detects datatype.
*/

let x = 10;
let y = "Hello";
let z = true;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

/*
Variables in JavaScript

let   -> value can change
const -> value cannot change
var   -> old way
*/

let score = 50;
score = 100;
console.log(score);



const pi = 3.14;
console.log(pi);

// var keyword

var country = "India";
console.log(country);

/*
console.log()
Used to print output in console.
Similar to print() in other languages.
*/

console.log("JavaScript Started");

/*
alert()

Used to show popup message in browser.
*/
alert("Welcome Rakheeb");