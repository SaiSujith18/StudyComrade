// Array of numbers
const numbers = [90, 89, 56, 45];

// Loop through the array and check if each number is odd or even
numbers.forEach(num => {
  if (num % 2 === 0) {
    console.log(`${num} is even`);
  } else {
    console.log(`${num} is odd`);
  }
});
