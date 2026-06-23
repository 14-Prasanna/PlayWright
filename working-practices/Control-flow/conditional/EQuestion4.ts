const prompt = require("prompt-sync")();


let num = Number(prompt("Enter the number: "))

if(num >=4 ){
    console.log("Eligible")
}
else{
    console.log("Not Eligible")
}