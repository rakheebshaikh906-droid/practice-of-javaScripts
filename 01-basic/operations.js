//operations in javaScripts

let str1 = "Hello";
let str2 = "World";

//concatenation
let result = str1 + " " + str2;
console.log(result); // Hello World

//repetition
//let repeatedStr = str1 * 3; // This will result in NaN (Not a Number) because the * operator is not defined for

console.log("1" + 2);//12
console.log("1" - 2);//-1
console.log(1 + "2");//12

console.log(1 + 2 + "3");//33
console.log("1" + 2 + 3);//123
// In the first case, 1 + 2 is evaluated first, resulting in 3, and then "3" is concatenated to it, giving "33".
// In the second case, "1" + 2 is evaluated first, resulting in "12", and then 3 is concatenated to it, giving "123".
// The order of operations matters when combining strings and numbers in JavaScript. When the + operator is used with a string and a number, the number is converted to a string and concatenated. When the - operator is used with a string and a number, JavaScript tries to convert the string to a number, which can lead to unexpected results if the string cannot be converted to a valid number.
