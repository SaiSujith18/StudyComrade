let arr = [1, 9, 8];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

let average = sum / arr.length;

console.log("Sum:", sum);         // 18
console.log("Average:", average); // 6
