//++++++++++++++ for loops +++++++++++++++++++++++

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//for loop with array
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even");
    } else {
        console.log(i + " is odd");
    }
}

//nested for loop
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

//for loop with break and continue
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
    if (i % 2 === 0) {
        continue; // Skip the rest of the loop when i is even
    }
    console.log(i); // This will only log odd numbers less than 5
}
// Output: 1, 3

//for loop with labels
outerLoop: for (let i = 0; i < 3; i++) {
    innerLoop: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Exit the outer loop when i is 1 and j is 1
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}
// Output: i: 0, j: 0