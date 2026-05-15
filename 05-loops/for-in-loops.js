//++++++++++++++ for in loops ++++++++++++++

/* for in loops are used to loop through the properties of an object. They provide a way to iterate
over the keys of an object, allowing you to access both the key and its corresponding value.*/

//syntax
//for (variable in object) {
//    // code to be executed
//}

//for in loop with object
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output: name: Alice, age: 30, city: New York

//for in loop with array
let numbers = [1, 2, 3, 4, 5];
for (let index in numbers) {
    console.log(`Index: ${index}, Value: ${numbers[index]}`);
}
// Output: Index: 0, Value: 1, Index: 1, Value: 2, Index: 2, Value: 3, Index: 3, Value: 4, Index: 4, Value: 5

