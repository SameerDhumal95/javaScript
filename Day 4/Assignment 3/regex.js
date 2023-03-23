//Indicates atleast one should have alphabet and number

/*
let regex = /[A-Z][0-9]/;
console.log(regex.test("ALK91"));

let x = /a+/;

console.log(x, typeof x);

let s = "baa";
console.log(s.match(x)); //match will search the string---> to find a

let pattern = /^bad/;
let arr = [
  "ahemdabad",
  "delhi",
  "badlapur",
  "badni",
  "badrinath",
  "aurangabad",
];

arr
  .filter((element) => {
    return element.match(pattern);
  })
  .forEach((element) => console.log(element));
*/
/*
let pattern = /[0-9]{2}/; //single occurence of any digit betn 0-9
let arr = ["kkkk", "helo1", "what125", "rot", "2fruit", "j"];

arr
  .filter((element) => {
    return element.match(pattern);
  })
  .forEach((element) => console.log(element));
*/

let emailPattern = /[a-z A-Z-_]+\@[a-z A-Z]+\.[a-z A-Z]{1,3}$/;

let arr = ["---@aaa.com", "pra@gmail.com", "pra@hotmail"];

arr
  .filter((element) => {
    return element.match(emailPattern);
  })
  .forEach((element) => console.log(element));
