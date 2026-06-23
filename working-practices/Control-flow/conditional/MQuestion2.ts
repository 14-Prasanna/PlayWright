import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input: string) => {
    let currentNumber = parseInt(input);

    if (currentNumber % 2 !== 0) {
        
        currentNumber = (3 * currentNumber) + 1;
    } else {
        
        currentNumber = currentNumber / 2;
    }

    console.log(currentNumber);
    rl.close();
});

export {};   