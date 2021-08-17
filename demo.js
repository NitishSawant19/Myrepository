var selectedOpt;
function checkvalue(option) {
  selectedOpt = option;
}

function checkAns() {
  var audio;
  if (selectedOpt === "option5") {
    audio = new Audio("sounds/rightAns.mp3");
    audio.play();
    document
      .querySelector("#que1 #" + selectedOpt)
      .setAttribute("class", "btn btn-success");
    document.querySelector("#form1 .descr").innerHTML =
      "<strong>Correct!🎊</strong>";
  } else {
    audio = new Audio("sounds/wrongAns.mp3");
    audio.play();
    document
      .querySelector("#que1 #" + selectedOpt)
      .setAttribute("class", "btn btn-danger");
    document
      .querySelector("#que1 #option5")
      .setAttribute("class", "btn btn-success");
    document.querySelector("#form1 .descr").innerHTML =
      "<strong>Incorrect!</strong>";
  }
}
var response;
function checkfreeresp() {
  var audio;
  response = document
    .getElementById("floatingTextarea")
    .value.toLowerCase()
    .trimRight();
  if (response === "switzerland") {
    audio = new Audio("sounds/rightAns.mp3");
    audio.play();
    document.querySelectorAll("#form2 .descr")[0].innerHTML =
      "<strong>Congratulation 🎉</strong>";
    document.querySelectorAll("#form2 .descr")[1].innerHTML =
      "<em>Correct Answer</em>";
  } else {
    audio = new Audio("sounds/wrongAns.mp3");
    audio.play();
    document.querySelectorAll("#form2 .descr")[0].innerHTML =
      "<em>Incorrect Answer</em>";
    document.querySelectorAll("#form2 .descr")[1].innerHTML =
      "<strong>Correct Answer: Switzerland</strong>";
  }
}
