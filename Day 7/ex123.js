class Person {
  constructor(a, b, c) {
    this.fname = a;
    this.lname = b;
    this.age = c;
  }
}

function showData(obj) {
  //   console.log(obj);
  //   console.log(
  //     JSON.stringify(obj),
  //     JSON.stringify(45),
  //     JSON.stringify(true).toUpperCase(),
  //     JSON.stringify({ a: 1, b: undefined, c: null }),
  //     JSON.stringify([12, 13, 45]).charAt(0)
  //   );
  //var str1 = '{"data":10}'
  /* var str2 = `{"fname": "sameer","lname":"dhumal","pno":12345}`;
  var obj = JSON.parse(str2);
  console.log(obj, obj.fname, str2.fname);
 */
  var obj2 = { fname: "alpha", lname: "beta", pno: 123 };
  var st4 = '{"fname":"alpha","lname":"beta","pno":123}';
  console.log(obj2, obj2.fname, st4.fname);
}
let p1 = new Person("sam", "dhu", 45);
showData(p1);
