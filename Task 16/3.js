let even = 0, odd = 0;

for (let i = 1; i <= 999; i++) {
  if (i % 2 === 0) even++;
  else odd++;
}

console.log("Even:", even);   // 499
console.log("Odd:", odd);     // 500
