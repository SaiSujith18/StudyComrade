let char = prompt("Enter a character:").toLowerCase();

if ("aeiou".includes(char)) {
  console.log(char + " is a vowel.");
} else {
  console.log(char + " is a consonant.");
}
