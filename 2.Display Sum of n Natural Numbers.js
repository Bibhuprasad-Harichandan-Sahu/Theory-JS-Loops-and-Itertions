// program to display the sum of natural numbers
let sum = 0;
const n = 100

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);//sum: 5050

//another method 

// program to display the sum of n natural numbers
let sums = 0;
const a = 100;

// looping from i = n to 1
// in each iteration, i is decreased by 1
for(let i = a; i >= 1; i-- ) {
    // adding i to sum in each iteration
    sums += i; // sum = sum + i
}

console.log('sums:',sums);