//functions in javaScript

/* functions are reusable blocks of code that perform a specific task. They can take parameters, perform operations,  
and return values. Functions help in organizing code, improving readability, and reducing redundancy.*/

// function declaration
function add(a, b) {
    return a + b;
}
console.log(add(89, 67));

function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("rakheeb"));

// functions with conditional statements
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return num + " is even.";
    } else {
        return num + " is odd.";
    }
}
console.log(checkEvenOdd(10));

// function with default parameters
function greet(name = "Guest") {
    return "Hello, " + name + "!";
}
console.log(greet()); // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"

