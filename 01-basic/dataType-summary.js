//there are two types od data types in js

//1. primitive data types
//2. non-primitive data types

//primitive data types
//1. string
//2. number
//3. boolean
//4. null
//5. undefined
//6. symbol (introduced in ES6)
//7. bigint (introduced in ES2020)

//non-primitive data types
//1. object
//2. array
//3. function

//symbol
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log(sym1 === sym2); // false (each symbol is unique)
//symbol is a primitive data type that represents a unique identifier. Even if two symbols have the same description, they are different and not equal to each other.

//bigint
let bigInt1 = BigInt(123456789012345678901234567890);
let bigInt2 = 123456789012345678901234567890n; // using the 'n' suffix
console.log(bigInt1 === bigInt2); // true (both represent the same big integer)
//bigint is a primitive data type that can represent integers with arbitrary precision. It is useful for working with 
//numbers that exceed the safe integer limit of the number data type in JavaScript. You can create a bigint using the BigInt constructor or by appending 'n' to the end of an integer literal.

//object
let obj = {
    name: "John",
    age: 30,
};
console.log(obj.name); // John

//array
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // 1

//function
function greet(name) {
    return "Hello, " + name + "!";
};
console.log(greet("Alice")); // Hello, Alice!

// In JavaScript, primitive data types are immutable, meaning their values cannot be changed after they are created. Non-primitive data types, such as objects and arrays, are mutable, meaning their contents can be modified. When you assign a non-primitive data type to a variable, you are assigning a reference to the object in memory, not the actual value. This is why when you modify an object or array through one variable, it affects all variables that reference the same object or array.