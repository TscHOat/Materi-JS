var a = 1
const b = 2
let c = 3
console.log("a "+a);

foo = ()=>{
    // tidak akan merubah variable c diluar function
    let c = 10
    var a=5
    let d = a+b+c
    console.log("c "+c);
    // d tidak bisa digunakan diluar function
    console.log("d "+d);
}

foo()
console.log("a "+a);
console.log("c "+c);

a = a+b+c

console.log(a);