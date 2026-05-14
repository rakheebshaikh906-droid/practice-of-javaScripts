//+++++++++++++++++++++ call stack in javaScript ++++++++++++++++++++++++

//call stack is a data structure that is used to keep track of the function calls in javaScript
//call stack is a stack data structure that follows the Last In First Out (LIFO) principle
/*when a function is called, it is added to the call stack and when the function is executed, 
it is removed from the call stack*/
//call stack is used to keep track of the function calls and to manage the execution context of the functions


// Call Stack Example

function one() {
    console.log("Function One");
}
function two() {
    one();

    console.log("Function Two");
}
function three() {
    two();

    console.log("Function Three");
}
// Function call
three();
/*
Step 1
three() called
Call Stack:
three
*/
/*
Step 2
three() calls two()
Call Stack:
two
three
*/
/*
Step 3
two() calls one()
Call Stack:
one
two
three
*/
/*
Step 4
one() completed and removed
Call Stack:
two
three
*/
/*
Step 5
two() completed and removed
Call Stack:
three
*/
/*
Step 6
three() completed and removed
Call Stack becomes empty
*/
/*
Final Output:
Function One
Function Two
Function Three
*/

