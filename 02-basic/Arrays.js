
//Arrays in javaScript

//creating an array
let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]

//accessing array elements
console.log(arr[0]); // 1
console.log(arr[2]); // 3

//array methods
//push
arr.push(6);//add element to the end
console.log(arr); // [1, 2, 3, 4, 5, 6]
//pop
arr.pop();//remove last element
console.log(arr); // [1, 2, 3, 4, 5]
//shift
arr.shift();//remove first element
console.log(arr); // [2, 3, 4, 5]
//unshift
arr.unshift(1);//add element to the beginning
console.log(arr); // [1, 2, 3, 4, 5]
//indexOf
console.log(arr.indexOf(3)); // 2//returns the index of the first occurrence of the element
//slice
console.log(arr.slice(1, 4)); // [2, 3, 4] //returns a new array from index 1 to index 3 (4 is not included)
//splice
arr.splice(2, 1);//remove 1 element from index 2
console.log(arr); // [1, 2, 4, 5]
//concat
let arr2 = [6, 7, 8];
let arr3 = arr.concat(arr2);//returns a new array by concatenating arr and arr2
console.log(arr3); // [1, 2, 4, 5, 6, 7, 8]
//join
console.log(arr.join("-")); // "1-2-4-5" //returns a string by joining all elements of the array 
//length
console.log(arr.length); // 4
//reverse
console.log(arr.reverse()); // [5, 4, 2, 1] //reverses the array
//sort
console.log(arr.sort()); // [1, 2, 4, 5] //sorts the array in ascending order

//splice example
let myArr = [10, 20, 30, 40, 50];
console.log(myArr.splice(1, 3));
