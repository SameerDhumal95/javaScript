var x = 10;
console.log("x=", x);
var x = 20; //double declaration is not a problem in var
console.log("x=", x);

let y = 10;
//let y=20  //double declaration is not allowed
y = "Sameer";
console.log("y=", y);

console.log("t1=", t1); //Using a variable before declaration = undefined
var t1 = 40;

// console.log("t2=",t2) //cannot access t2 before initialization
// let t2=100

const pi = 3.14;
pi = 100;
console.log(pi);
