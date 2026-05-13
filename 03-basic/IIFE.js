//immedaitely invoked function expression(IIFE)

/*IIFE is a function that is executed immediately after it is defined. 
 It is a common pattern in JavaScript to create a new scope and avoid polluting the global namespace.*/

(function () {
    let message = "Hello, I am an IIFE!";
    console.log(message); // Output: "Hello, I am an IIFE!"
})();

//IIFE can also be written using arrow function syntax
(() => {
    let message = "Hello, I am an IIFE using arrow function!";
    console.log(message); // Output: "Hello, I am an IIFE using arrow function!"
})();

/*IIFE can also accept parameters, which can be useful for passing in values or dependencies without exposing them to the global scope.*/
(function (name) {
    console.log(`Hello, ${name}! I am an IIFE with parameters!`); // Output: "Hello, Alice! I am an IIFE with parameters!"
})("Alice");

//IIFE can also return values, which can be useful for creating modules or encapsulating functionality.