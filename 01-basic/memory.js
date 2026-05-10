//there are two types of memory in JavaScript: stack and heap

//stack(primitive data types stored in stack memory)
let num1 = 10;
let num2 = num1; // num2 is a copy of num1, both are stored in stack memory
console.log(num1); // 10
console.log(num2); // 10
num2 = 20; // changing num2 does not affect num1, as they are stored in different memory locations
console.log(num1); // 10
console.log(num2); // 20

//heap(non-primitive data types stored in heap memory)
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 is a reference to the same object in heap memory
console.log(obj1.name); // Alice
console.log(obj2.name); // Alice
obj2.name = "Bob"; // changing obj2 also changes obj1, as they reference the same object in heap memory
console.log(obj1.name); // Bob
console.log(obj2.name); // Bob

