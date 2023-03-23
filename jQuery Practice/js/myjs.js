$(document).ready(function () {
  console.log("This is using function");
  //jQuery effect
  $("#btn1").click(function () {
    //btn-click
    // $("#container").hide();
    $("#container").fadeOut(2000, function () {
      alert("gone");
    });
  });
});

//jQuery effect
$("#btn2").click(function () {
  //btn-click
  $("#container").fadeIn(2000);
});

//jQuery effect
$("#btn3").click(function () {
  //btn-click
  $("#container").fadeToggle(2000);
});

$("#btn4").click(function () {
  //btn-click
  $("#container").fadeTo(250, 0.5, function () {
    alert("Faded");
  });
});

//___________________________________________

//SlideDown ,slideUp , slideToggle
$("#btn5").click(function () {
  //btn-click
  $("#container").slideUp(3000);
});

$("#btn6").click(function () {
  //btn-click
  $("#container").slideDown(3000);
});
$("#btn7").click(function () {
  //btn-click
  $("#container").slideToggle(3000);
});

//___________________________________________
//Animation
$("#btn8").click(function () {
  //btn-click
  $("#container").animate({ width: "200", height: 200 }, function () {
    alert("Changed width");
  });
});

//___________________________________________
$("#btn9").click(function () {
  //   let v = $("#f").val();
  //   console.log("value is " + v);

  //   let a = $("#content").text();
  //   console.log(a);
  $("#content").html("<b>World...</b>");
});
