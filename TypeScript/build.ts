const secret = Symbol("secret")

const user = {
    name: "Alice",
    [secret]: "lop-secret-token"
};


console.log(user[secret]);
const Sysmbol = Object.getOwnPropertySymbols(user)
console.log(Sysmbol)