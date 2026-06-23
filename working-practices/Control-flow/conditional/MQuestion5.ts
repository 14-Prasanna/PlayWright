const prompt = require("prompt-sync")();


const name = prompt("Enter customer name: ");
const quantity = parseInt(prompt("Enter number of items: "));

let pricePerItem = 0;

if (quantity < 10) {
    pricePerItem = 12;
} else if (quantity >= 10 && quantity <= 99) {
    pricePerItem = 10;
} else {
    pricePerItem = 7;
}

const totalCost = quantity * pricePerItem;

console.log(`${name} ${totalCost}`);   