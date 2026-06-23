import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter length: ", (lengthStr: string) => {
    const length = parseFloat(lengthStr);

    rl.question("Enter breadth: ", (breadthStr: string) => {
        const breadth = parseFloat(breadthStr);

        if (length === breadth) {
            console.log("Square");
        } else {
            console.log("Not a Square");
        }

        rl.close();
    });
});

export {};   