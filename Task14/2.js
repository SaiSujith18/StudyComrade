function divideNumbers(a, b) {
  if (b === 0) {
    return 'Cannot divide by zero';
  }
  return a / b;
}

console.log(divideNumbers(10, 2)); // Output: 5
