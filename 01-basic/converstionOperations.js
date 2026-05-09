let score = 33;
console.log(typeof score);
// this type of score is number

//converting number to string
let scoreString = String(score);
console.log(scoreString);
console.log(typeof scoreString);
// this type of score is string

//converting string to number
let scoreNumber = Number(scoreString);
console.log(scoreNumber);
console.log(typeof scoreNumber);

//converting number to boolean
let scoreBoolean = Boolean(score);
console.log(scoreBoolean);
console.log(typeof scoreBoolean);

//converting string to boolean
let emptyString = "";
let nonEmptyString = "Hello";
console.log(Boolean(emptyString)); // false
console.log(Boolean(nonEmptyString)); // true
console.log(typeof Boolean(emptyString)); // boolean
console.log(typeof Boolean(nonEmptyString)); // boolean

//converting boolean to number
let trueValue = true;
let falseValue = false;
console.log(Number(trueValue)); // 1
console.log(Number(falseValue)); // 0
console.log(typeof Number(trueValue)); // number
console.log(typeof Number(falseValue)); // number

//"33" -> 33
//"33abd"-> NaN (Not a Number)
//true -> 1
//false -> 0
//"" -> 0
//" " -> 0
//null -> 0
//undefined -> NaN
//[] -> 0
//[1,2] -> NaN
// {} -> NaN