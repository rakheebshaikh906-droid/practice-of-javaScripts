//scopes in js/functions
/* Scope refers to the accessibility of variables and functions in different parts of a program.
In JavaScript, there are three types of scopes: global scope, function scope, and block scope.
1. Global Scope: Variables declared outside of any function or block are in the global scope and can be accessed 
from anywhere in the code.
2. Function Scope: Variables declared inside a function are in the function scope and can only be accessed
within that function.
3. Block Scope: Variables declared with let or const inside a block (e.g., inside an if statement or a loop) 
are in the block scope and can only be accessed within that block.*/

//global scope
let globalVar = "I am a global variable";
function globalScopeExample() {
    console.log(globalVar); // Accessible
}
globalScopeExample(); // Output: "I am a global variable"

//function scope
function functionScopeExample() {
    let functionVar = "I am a function variable";
    console.log(functionVar); // Accessible
}
functionScopeExample(); // Output: "I am a function variable"
//console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

//block scope
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar); // Accessible
}
//console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
