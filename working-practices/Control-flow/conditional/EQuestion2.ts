const prompt = require("prompt-sync")();

let val1 = Number(prompt("Enter The number: "))

if(val1 % 2 == 0){
    console.log("Even")
}
else{
    console.log("Odd")
}
