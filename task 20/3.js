// Sample array of objects
const data = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Jim', age: 35 },
  { id: 4, name: 'Jack', age: 28 }
];

// Random ID to filter by (you can replace this with any ID you want)
const randomId = 3; // Example random ID

// Filter the array based on the ID
const filteredData = data.filter(item => item.id === randomId);

// Output the filtered data
console.log(filteredData);
