/*Write a Javascript  mylib.js [Hint include this js file using <script src=....  >  ]
		create a class Product using ES6 class keyword
		the product has a name,desc and cost properties
		the product has a show method that shows all properties

		Write an html that has 3 textfields to accept name desc and cost
	when user clicks a save button create a product object using values from textfields and add it to an array 
		show the array in a table format below
*/

class Product {
  constructor(name, desc, cost) {
    this.name = name;
    this.desc = desc;
    this.cost = cost;
  }

  show() {
    console.log(this.name, this.cost, this.desc);
  }
}

let arr = [];
//let str = ""

function display() {
  var name = document.getElementById("p1").value;

  var desc = document.getElementById("p2").value;

  var cost = document.getElementById("p3").value;

  //document.getElementById("ip1").innerHTML=name//for checking
  let pro1 = new Product(name, desc, cost);

  arr.push(pro1);

  //str = str+"<tr><td>"+pro1.name+"</td><td>"+pro1.desc+"</td><td>"+pro1.cost+"</td></tr>"
  //document.getElementById("tb1").innerHTML=str
  let str2 = "<tr><th>Name</th><th>Desc</th><th>Cost</th></tr>";
  for (var i = 0; i < arr.length; i++) {
    str2 =
      str2 +
      "<tr><td>" +
      arr[i].name +
      "</td><td>" +
      arr[i].desc +
      "</td><td>" +
      arr[i].cost +
      "</td></tr>";
  }
  document.getElementById("tb1").innerHTML = str2;
}
