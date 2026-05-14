//falsy values
/* false,0,-0,BigInt(0),'',null,undefined,NaN */

//truthy values
/* true,{},[],function(){},'0','false',new Boolean(false),new Number(0) */


//nullish coalescing operator (??) null,undefined
let a = null;
let b = a ?? "default value";
console.log(b); // Output: "default value"

let val;
val = 5 ?? 10;//5 
val = 0 ?? 10;//0 
val = null ?? 10;//10
val = undefined ?? 10;//10
val = null ?? 90 ?? 89;//90
console.log(val); // Output: 5,0,10,10,90


//ternary operator 
/* condition ? True : False */

let age = 20;
let canVote = age >= 18 ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: "Yes, you can vote."

let num = -5;
let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(result); // Output: "Negative"

