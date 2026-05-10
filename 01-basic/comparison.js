// Comparison Operators
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false

console.log(1 == 1); // true
console.log(1 == "1"); // true (loose equality, type coercion occurs)
console.log(1 === 1); // true
console.log(1 === "1"); // false (strict equality, no type coercion)
console.log(1 != 2); // true
console.log(1 != "1"); // false (loose inequality, type coercion occurs)
console.log(1 !== 2); // true
console.log(1 !== "1"); // true (strict inequality, no type coercion)

console.log("apple" > "banana"); // false (lexicographical comparison)
console.log("apple" < "banana"); // true (lexicographical comparison)
console.log("2" > "10"); // true (lexicographical comparison, "2" is greater than "1")
console.log("2" < "10"); // false (lexicographical comparison, "2" is greater than "1")