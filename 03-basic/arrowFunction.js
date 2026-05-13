
//arrow function
const add = (a, b) => {
    return a + b;
}
//if there is only one statement in the function body, we can omit the curly braces and the return keyword
const addShort = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
console.log(addShort(2, 3)); // Output: 5
//arrow functions do not have their own 'this' context, they inherit 'this' from the surrounding scope
const person = {
    name: "Alice",
    greet: function () {
        setTimeout(() => {
            console.log(`Hello, my name is ${this.name}`); // 'this' refers to the person object
        }, 1000);
    }
};
person.greet(); // Output after 1 second: "Hello, my name is Alice"
//arrow functions cannot be used as constructors and will throw an error
//const Person = (name) => { this.name = name; }; // Uncaught TypeError: Person is not a constructor
//arrow functions do not have the 'arguments' object, but we can use rest parameters to achieve similar functionality
const sum = (...args) => {
    return args.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
