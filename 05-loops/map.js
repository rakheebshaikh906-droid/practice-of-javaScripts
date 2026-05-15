//map() in javaScript

/* The map() method creates a new array populated with the results of calling a provided function 
on every element in the calling array. */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squaredNumbers = numbers.map(function (num) {
    return num * num;
});
console.log(squaredNumbers);

//using arrow function
let cubedNumbers = numbers.map((num) => num * num * num);
console.log(cubedNumbers);
