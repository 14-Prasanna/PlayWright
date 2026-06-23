import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter age: ", (input: string) => {
    const age = parseInt(input);

    if (age < 0) {
        console.log("Invalid Age");
    } else if (age >= 20) {
        console.log("Not Allowed");
    } else if (age < 13) {
        console.log("Cartoon Club");
    } else {
        console.log("Teens Club");
    }

    rl.close();
});

export {};   