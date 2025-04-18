let str = "programming";
let chars = str.split('');
let duplicates = [];

chars.forEach((char, index) => {
  if (chars.indexOf(char) !== index && !duplicates.includes(char)) {
    duplicates.push(char);
  }
});

console.log(duplicates); // Output: ['r', 'g', 'm']
