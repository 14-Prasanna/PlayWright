const prompt = require("prompt-sync")();

let totalClasses: number = Number(
    prompt("Enter Total Classes Held: ")
);

let attendedClasses: number = Number(
    prompt("Enter Classes Attended: ")
);

let attendance: number =
    (attendedClasses / totalClasses) * 100;

if (attendance >= 75) {
    console.log(`${attendance}% Allowed`);
} else {
    let medicalCause: string = prompt(
        "Do you have a medical cause? (Y/N): "
    );

    if (medicalCause.toUpperCase() === "Y") {
        console.log(`${attendance}% Allowed`);
    } else {
        console.log(`${attendance}% Not Allowed`);
    }
}