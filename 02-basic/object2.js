
//object . methods
let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
//Object.keys() - returns an array of the object's keys
console.log(Object.keys(obj)); // ["name", "age", "city"]
//Object.values() - returns an array of the object's values
console.log(Object.values(obj)); // ["John", 30, "New York"]
//Object.entries() - returns an array of the object's key-value pairs
console.log(Object.entries(obj)); // [["name", "John"], ["age", 30], ["city", "New York"]]
//Object.assign() - copies the values of all enumerable own properties from one or more source objects to a target object
let obj2 = { country: "USA" };
let obj3 = Object.assign({}, obj, obj2);
console.log(obj3); // { name: "John", age: 30, city: "New York", country: "USA" }
//Object.freeze() - freezes an object, preventing new properties from being added to it and marking all existing properties as read-only
Object.freeze(obj);
obj.name = "Jane"; // This will not change the name property
console.log(obj.name); // "John"
//Object.seal() - seals an object, preventing new properties
//from being added to it but allowing existing properties to be modified
Object.seal(obj2);
obj2.country = "Canada"; // This will change the country property
console.log(obj2.country); // "Canada"
obj2.newProp = "test"; // This will not add a new property
console.log(obj2.newProp); // undefined
//Object.hasOwnProperty() - returns a boolean indicating whether the object has the specified property as its own property
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("country")); // false
//Object.is() - determines whether two values are the same value
console.log(Object.is(1, 1)); // true
console.log(Object.is(1, "1")); // false
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false
//Object.getOwnPropertyDescriptor() - returns a property descriptor for an own property of an object
console.log(Object.getOwnPropertyDescriptor(obj, "name")); // { value: "John", writable: false, enumerable: true, configurable: false }
//Object.getOwnPropertyNames() - returns an array of all properties (including non-enumerable properties) found directly in a given object
console.log(Object.getOwnPropertyNames(obj)); // ["name", "age", "city"]
