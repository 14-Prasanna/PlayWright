const prompt = require("prompt-sync")();


let num = Number(prompt("Enter the number: "))

if(num >= 0){
    console.log("Positive")
}
else{
    console.log("Negative")
}