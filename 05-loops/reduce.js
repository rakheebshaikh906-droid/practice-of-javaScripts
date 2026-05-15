// reduce() in javaScript

/* The reduce() method is a higher-order function that takes an array and a callback function as arguments, 
and returns a single value as the result of applying the callback function to the elements of the array.*/

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);

//using arrow function
const product = numbers.reduce((total, num) => total * num, 1);
console.log(product);

//using function expression
const average = numbers.reduce(function (total, num) {
    return total + num;
}, 0);
console.log(average);

//using reduce with objects
const database = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "Dave", age: 40 },
    { id: 5, name: "Eve", age: 45 },
];
const totalAge = database.reduce((total, user) => total + user.age, 0);
console.log(totalAge);