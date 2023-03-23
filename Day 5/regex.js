let x = /a/; //single a
// //let x = /a+/; //+ means one or more occurence
// // console.log(x, typeof x);

var s = "baaah";
console.log(s.match(x)); //match will search the string - to find a

// occurences ending with "bad"
//let pattern1 = /bad/;
//let pattern2 = /bad$/; //ending with bad
//let pattern3 = /^bad/; //starting

// var arr = [
//   "ahmedabad",
//   "delhi",
//   "khultabad",
//   "badlapur",
//   "badni",
//   "aurangabad",
// ];

// arr
//   .filter((element) => {
//     return element.match(pattern1);
//   })
//   .forEach((element) => {
//     console.log(element);
//   });

// let space = / /;
// var arr = [
//   "ahm edabad",
//   "delhi",
//   "khultabad",
//   "ba dlapur",
//   " badni",
//   "aurangabad ",
// ];
// arr
//   .filter((element) => {
//     return element.match(space);
//   })
//   .forEach((element) => {
//     console.log(element);
//   });
// let x = "sam d";
// console.log(x.indexOf(" "));

// let pattern = /[0-9]{3}$/; //3 occurences of any digit bet 0 to 9  ,in the end
// var arr = [
//   "pp123pp",
//   "kkkkk",
//   "hellow123",
//   "1234567",
//   "678",
//   "re5tr34",
//   "rto09",
//   "row333",
//   "111rrrr444",
// ];

// arr
//   .filter((element) => {
//     return element.match(pattern);
//   })
//   .forEach((element) => {
//     console.log(element);
//   });

// let emailpattern = /[a-z A-Z -_]+\@[a-z A-z]+\.[a-z A-Z]{1,3}$/;
// var arr = [
//   "---@aaa.com",
//   "pra@gmail.org",
//   "pra_g@hotmail.com",
//   "pra@hotmail",
//   "pra__gre@ggg.vvv",
//   "test@gov.inn",
// ];

// arr
//   .filter((element) => {
//     return element.match(emailpattern);
//   })
//   .forEach((element) => {
//     console.log(element);
//   });

//let pattern = /(ppp)+/;
// let pattern = /^[A-Z][a-z A-Z 0-9]+/; //cap for first letter is capital
// var s = "XpppPrachi";
// console.log(s.match(pattern));
