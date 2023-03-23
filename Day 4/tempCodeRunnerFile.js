var colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "white",
  "turquiose",
  "pink",
  "golden",
  "grey",
];
var newarr = colors.filter((e) => {
  return e.length < 5;
});
console.log("newarr", newarr, " original:", colors);
