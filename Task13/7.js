let items = ["a", "b", "c", "d", "e", "f"];
items.splice(4, 1, "x", "y"); // remove 1 at index 4, insert 'x', 'y'

console.log(items); // ["a", "b", "c", "d", "x", "y", "f"]
