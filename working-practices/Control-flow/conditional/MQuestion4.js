"use strict";
const prompt = require("prompt-sync")();
const totalInput = parseInt(prompt("Enter total number of animals: "));
const rabbits = parseInt(prompt("Enter count of rabbits: "));
const deer = parseInt(prompt("Enter count of deer: "));
const birds = parseInt(prompt("Enter count of birds: "));
const squirrels = parseInt(prompt("Enter count of squirrels: "));
const friendsSum = rabbits + deer + birds + squirrels;
if (totalInput < friendsSum) {
    console.log("Counted wrongly");
}
else if (totalInput === friendsSum) {
    console.log("Baby lion is well behaved");
}
else {
    console.log("Baby lion is mischievous");
}
