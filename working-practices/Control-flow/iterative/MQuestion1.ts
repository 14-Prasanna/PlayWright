export {}
let n = 10;
let oddSum = 0;
let evenSum = 0;
for (let i = 1; i <= n; i++) {
    if (i % 2 == 0)
        evenSum += i;
    else
        oddSum += i;
}
console.log(oddSum, evenSum);