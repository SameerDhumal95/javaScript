function m1() {
  console.log("test");
}

var x = m1; //NOT GIVING round bracket , I AM not calling the function
console.log(x, typeof x); //that will return datatypes

x();
m1();

var p = function () {
  console.log("test 2");
};

p();

var q = (function (n) {
  console.log("test3");
})();

//FAT ARROW FUNCTION
var z = (x) => {
  console.log("test4", x);
};
z(12);
