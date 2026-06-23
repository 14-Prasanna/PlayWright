function add(a: string, b: string): string{
    return a*b;
};
function add(a: number, b: number): number;

function add(a: any, b: any): any {
    return a + b;
}

console.log(add("Prasanna", "Venkatesh"));
console.log(add(10, 20));
console.log(add(302006, "Prasanna"));