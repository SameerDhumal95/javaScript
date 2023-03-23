arr = [12, 13, 16, 45, 46, 29, 28, 100];

function evenonly(num) {
  if (num % 2 == 0) return true;
  else return false;
}

//let evenarr = arr.filter(evenonly); //evenonly is callback function
let evenarr = arr.filter((num) => {
  //filter will call that function
  if (num % 2 == 0) return true;
  else return false;
});
console.log(evenarr);
