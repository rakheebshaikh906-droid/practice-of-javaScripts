let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(arr1.push(arr2));
// [1, 2, 3, [4, 5, 6]]

//spread operator
let arr3 = [...arr1, ...arr2];
console.log(arr3);
// [1, 2, 3, 4, 5, 6]

//.from
let str = "Hello";
let arr4 = Array.from(str);
console.log(arr4);
// ['H', 'e', 'l', 'l', 'o']

//.of
let arr5 = Array.of(1, 2, 3);
console.log(arr5);
// [1, 2, 3]

//fill
let arr6 = new Array(5).fill(0);
console.log(arr6);
// [0, 0, 0, 0, 0]

//isArray
console.log(Array.isArray(arr1)); // true
console.log(Array.isArray(str)); // false

//.length
console.log(arr1.length); // 3
console.log(arr2.length); // 3
console.log(arr3.length); // 6

