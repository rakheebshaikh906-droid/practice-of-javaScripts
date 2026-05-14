//++++++++++++++++++++++ while loop ++++++++++++++++++++++

let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
//while loop with array
let numbers = [1, 2, 3, 4, 5];
let index = 0;
while (index < numbers.length) {
    console.log(numbers[index]);
    index++;
}

//while loop with break and continue
let num = 0;
while (num < 10) {
    if (num === 5) {
        break; // Exit the loop when num is 5
    }
    if (num % 2 === 0) {
        num++;
        continue; // Skip the rest of the loop when num is even
    }
    console.log(num); // This will only log odd numbers less than 5
    num++;
}
// Output: 1, 3

//do-while loop
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
// Output: 0, 1, 2, 3, 4

//do-while loop with break and continue
let j = 0;
do {
    if (j === 5) {
        break; // Exit the loop when j is 5
    }
    if (j % 2 === 0) {
        j++;
        continue; // Skip the rest of the loop when j is even
    }
    console.log(j); // This will only log odd numbers less than 5
    j++;
} while (j < 10);
// Output: 1, 3
