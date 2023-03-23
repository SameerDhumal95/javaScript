// var x = "s s";
// console.log(x.charAt(1).trim().length == 0);

function spaces(value) {
  for (var i = 0; i < value.length; i++) {
    if (value.charAt(i).trim().length == 0) {
      return true;
    }
  }
  return false;
}

function validate() {
  var uname = document.getElementById("ip1").value.trim();
  var pwd = document.getElementById("ip2").value.trim();

  if (spaces(uname) || spaces(pwd)) {
    console.log("hi");
    document.getElementById(
      "error"
    ).innerHTML = `Please input valid characters with no spaces`;
    return false;
  } else {
    if (
      uname.length > 8 &&
      pwd.length > 8 &&
      pwd.length < 15 &&
      isNaN(pwd.charAt(0))
    ) {
      var arr = ["_", "$", "#", "-"];
      for (var i = 0; i < pwd.length; i++) {
        for (j = 0; j < arr.length; j++) {
          if (pwd.charAt(i) == arr[j]) {
            console.log("hi");
            submitPage();
            return true;
          }
        }
      }
    } else {
      document.getElementById(
        "error"
      ).innerHTML = `Please input valid characters`;
      return false;
    }
  }
}

function submitPage() {
  document.forms.form.action = "home.html";
  document.forms.form.submit();
}
