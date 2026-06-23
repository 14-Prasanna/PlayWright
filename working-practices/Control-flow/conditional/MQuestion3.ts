import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Code : ", (codeInput: string) => {
    const code = parseInt(codeInput);

    if (code === 1) {
        
        rl.question("Enter first number: ", (val1: string) => {
            rl.question("Enter second number: ", (val2: string) => {
                const sum = parseFloat(val1) + parseFloat(val2);
                console.log(sum);
                rl.close();
            });
        });
    } else if (code === 2) {
        
        rl.question("Enter first integer: ", (val1: string) => {
            rl.question("Enter second integer: ", (val2: string) => {
                const product = parseInt(val1) * parseInt(val2);
                console.log(product);
                rl.close();
            });
        });
    } else if (code === 3) {
        
        rl.question("Enter first string: ", (val1: string) => {
            rl.question("Enter second string: ", (val2: string) => {
                console.log(val1 + val2);
                rl.close();
            });
        });
    } else {
        console.log("Invalid Code");
        rl.close();
    }
});

export {};   