var str = "double quote string single line string";
var str2 = "single quote string single line string";
var str3 = `this is a multi line string 
            on this line i tell the time it is 10 10
            on this line i tell the date it is 14 jul
            here we must use backquote `;

var str4 = new String("this is the string object");

//printing variable in string//
console.log(`Showing first string ${str}`);
console.log(`back quote string can have embedded variables ${str} , ${str2}`);

console.log(str.toUpperCase());

console.log("length =", str.length);

console.log("char at 0", str.charAt(0).toUpperCase());
console.log("concate", "hello".concat("world ", str));

var s = str.concat(" CHECK IT ");
console.log(str); // str is immutable
console.log(s);

var s3 = "0123456789";

console.log(s3.slice(0, 3)); // start =0 index 1,2 ( 3 is excluded )
console.log(s3.slice(3)); // end is end of string
console.log(s3.slice(-3)); // starting from  -3 to end of string
console.log(s3.slice(-5, -2));
console.log(s3.slice(0, -1));
console.log(s3.slice(-1, -3)); //not working big digits on right
console.log(s3.slice(3, 0)); // not working

console.log("   hi   hello     ".trim()); //removes the leading and trailing space

console.log("        ".trim().length);

var a = "hello"; //primitive strings are put in CONSTANT POOL
var b = "hello";
var c = new String("hello"); //String object , is not in constant pool
var d = new String("hello");

if (c.valueOf() == d.valueOf()) {
  console.log("they r same");
} else {
  console.log("they are different");
}
