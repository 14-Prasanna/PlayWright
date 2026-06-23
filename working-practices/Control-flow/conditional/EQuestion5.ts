const prompt = require("prompt-sync")();


const num = Number(prompt("Enter the number: "))

if(num <=15000){
    console.log("Mobile chosen is within the budget")
}
else{
    console.log("Mobile chosen is beyond the budget")
}