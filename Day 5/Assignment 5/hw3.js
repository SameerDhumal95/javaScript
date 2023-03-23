//  3.  Write  patterns that accept the following
// 	A]  strings having 1 or more occurences of only numbers
//   B]  strings that have one or more occurences of only uppercase characters
// 	C] Java class name in camel case
// 	     java method name in camel case
// 	D]  first char caps, second char should be a digit or nothing

let pattern1 = /[0-9]+/;
console.log(pattern1.test("4"));

let pattern2 = /[A-Z]+/;
console.log(pattern2.test("A"));

let pattern3 = /^[A-Z][a-z]+[A-Z][a-z]+$/;
console.log(pattern3.test("AweSome"));
//displayFunction
let pattern4 = /^[a-z]+[A-Z]{0,1}[a-z]+\(\)$/;
console.log(pattern4.test("displayqws()"));

let pattern5 = /^[A-Z][0-9]*$/;
console.log(pattern5.test("S1"));
