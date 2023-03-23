var num = [1, 2, 3, 4];
function update() {
  var select = document.getElementById("is1");
  var selOpt = select.options[select.selectedIndex];
  console.log(selOpt.value);

  var arr = [];
  switch (selOpt.value) {
    case "square":
      arr = square(num);
      break;

    case "cube":
      arr = cube(num);
      break;

    case "factorial":
      arr = factorial(num);
      break;

    default:
      arr = [];
  }
  document.getElementById("sp1").innerHTML = "Resulted Array : {" + arr + "}";
}

function square(num) {
  var squareArr = num.map((e) => {
    return e * e;
  });
  return squareArr;
}

function cube(num) {
  var cubeArr = num.map((e) => {
    return e * e * e;
  });
  return cubeArr;
}

function factorial(num) {
  var factArr = num.map((e) => {
    let fact = 1;
    for (i = 1; i <= e; i++) {
      fact = fact * i;
    }
    return fact;
  });
  return factArr;
}
