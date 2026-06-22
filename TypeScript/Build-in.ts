let fruits: Array<string> = ['Apple', 'Orange', 'Banana'];

let numbers: Array<number> = [1, 3, 5, 8, 2];

console.log("Fruits:", fruits);

fruits.sort();
console.log("Sorted Fruits:", fruits);

console.log("Removed Fruit:", fruits.pop());

fruits.push("Papaya");
console.log("After Push:", fruits);

fruits = fruits.concat(['Fig', 'Mango']);
console.log("After Concat:", fruits);

console.log("Index of Apple:", fruits.indexOf('Apple'));

console.log("Numbers:", numbers);

numbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", numbers);