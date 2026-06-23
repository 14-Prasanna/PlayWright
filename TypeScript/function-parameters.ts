function sum(a:number, ...b:number[]):number{
    var result = a;
    for(var i =0;i<b.length;i++){
        result += b[i];
    }

    return result
}

let result1 = sum(3, 5);
let result2 =  sum(3, 5,6,78, 909);

console.log(result1)
console.log(result2)