// var d = new Date();
// console.log(d.getDay(), d.getMonth(), d.getFullYear());

// var d1 = new Date();
// d1.setDate(26);
// d1.setMonth(02);
// d1.setFullYear(2022);

// console.log(d1);

// var d3 = new Date("2020-12-12");
// console.log(d3.getMonth());

//https://livecodestream.dev/post/date-manipulation-in-javascript-a-complete-guide/
//https://devdocs.io/javascript-date/

// const date = new Date();
// const [month, day, year] = [
//   date.getMonth(),
//   date.getDate(),
//   date.getFullYear(),
// ];
// const [hour, minutes, seconds] = [
//   date.getHours(),
//   date.getMinutes(),
//   date.getSeconds(),
// ];
// console.log(month, day, year);
// console.log(hour, minutes, seconds);

const today = new Date();
const tomorrow = new Date(2022, 8, 19);
tomorrow.setHours(today.getHours());
let diff = tomorrow - today; // difference in millisec between total ms of today from epoch
//and total ms of tomorrow from epoch
console.log(diff); //total miliseconds
console.log(Math.round(diff / 1000 / 60 / 60 / 24)); //days

// const independence = new Date(1947, 7, 15);
// const republic = new Date(1950, 0, 26);
//  const today = new Date()
// if(republic >today)
//     console.log("republic day is after today")
// else
// console.log("republic day is before today")

// const gg = new Date(1947, 7, 15);
// if (republic.valueOf() != independence.valueOf()) console.log("different");
// else console.log("same");
