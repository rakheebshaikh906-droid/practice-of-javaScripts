// control flow

/*control flow statements are used to control the flow of execution of a program based on certain conditions.
if-else statement is used to execute a block of code if a specified condition is true, and another block of code
if the condition is false.*/

//if-else statement in JavaScript

//syntax
/*if (condition) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
}
*/

//example
let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//if-else statement with multiple conditions using else if
let score = 85
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

//nested if-else statement
let num = 10;
if (num > 0) {
    console.log("The number is positive.");
    if (num % 2 === 0) {
        console.log("The number is even.");
    } else {
        console.log("The number is odd.");
    }
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

//&& (logical AND) operator can be used to combine multiple conditions in an if statement
let x = 5;
let y = 10;
if (x > 0 && y > 0) {
    console.log("Both x and y are positive.");
} else {
    console.log("Either x or y is not positive.");
}

//|| (logical OR) operator can be used to check if at least one of the conditions is true
let a = 5;
let b = -3;
if (a > 0 || b > 0) {
    console.log("At least one of a or b is positive.");
} else {
    console.log("Neither a nor b is positive.");
}

//! (logical NOT) operator can be used to negate a condition
let isRaining = true;
if (!isRaining) {
    console.log("It's not raining. You can go outside.");
} else {
    console.log("It's raining. You should stay inside.");
}
