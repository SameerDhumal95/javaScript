let li = "";
function fun1() {
  let value = document.getElementById("ip1").value.trim();

  var op = value.slice(0, 3).toUpperCase();
  console.log(op);

  li += "<li>" + op + "</li>";

  document.getElementById("ulist").innerHTML = li;
}
