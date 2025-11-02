let first = 1;
let num1 = "0";
let num2 = "0";
let op = "";
let data = "";

const buttons = document.querySelectorAll(".bbb");
const oparations = document.querySelectorAll(".ooo");
const ccc = document.getElementById("rr");
const ee = document.getElementById("ee");
const ppp = document.getElementById("ppp");
const screen = document.getElementById("nnn");
const opop = document.getElementById("opop");
const fff = document.getElementById("fff");
const n1 = document.getElementById("n1");

oparations.forEach(opopop);
buttons.forEach(btnbtn);

ccc.addEventListener("click", dlt);
ee.addEventListener("click", cal1);
ppp.addEventListener("click", point);
fff.addEventListener("click", format);

function cal1() {
  if (op !== "") {
    switch (op) {
      case "+":
        num1 = +num1 + +num2;
        break;
      case "-":
        num1 = +num1 - +num2;
        break;
      case "x":
        num1 = +num1 * +num2;
        break;
      case "÷":
        num1 = +num1 / +num2;
        break;
    }
    num1 = num1.toString();
    screen.textContent = num1;
    if (isNaN(num1) | (+num1 === Infinity)) {
      new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
      clear();
    } else if (num1.length > 17) {
      new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
      screen.textContent = "Sorry, our screen isn’t that big.";
      clear();
    } else {
      new Audio("./click.mp3").play();
      first = 1;
      num2 = "";
      op = "";
      opop.textContent = op;
      n1.textContent = "";
    }
  } else {
    new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
  }
}
function dlt() {
  let currentnum = first === 1 ? num1 : num2;
  if (currentnum.length > 0) {
    currentnum = currentnum.slice(0, -1);
    screen.textContent = currentnum;
    if (currentnum !== "") {
      new Audio("./click.mp3").play();
    }
    if (currentnum === "") {
      currentnum = "0";
      screen.textContent = currentnum;
      new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
    }
  }
  if (first === 1) {
    num1 = currentnum;
  } else {
    num2 = currentnum;
  }
}
function point() {
  let currentnum = first === 1 ? num1 : num2;

  if (!currentnum.includes(".")) {
    new Audio("./click.mp3").play();
    currentnum += ".";
    screen.textContent = currentnum;
  } else {
    new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
  }
  if (first === 1) {
    num1 = currentnum;
  } else {
    num2 = currentnum;
  }
}
function www() {
  let currentnum = first === 1 ? num1 : num2;
  if (currentnum.length < 17) {
    new Audio("./click.mp3").play();
    currentnum += data;
    if (currentnum[0] === "0" && !currentnum.includes(".")) {
      currentnum = currentnum.slice(1);
    }
  }
  if (currentnum.length === 17) {
    new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
  }

  if (first === 1) {
    num1 = currentnum;
    screen.textContent = num1;
  } else {
    num2 = currentnum;
    screen.textContent = num2;
  }
}
function vvv() {
  if (first === 1) {
    new Audio("./click.mp3").play();
    n1.textContent = num1;
    first = 0;
    op = data;
    opop.textContent = op;
    screen.textContent = num2;
  } else if (first === 0 && data === op) {
    cal1();
  } else {
    new Audio("./click.mp3").play();
    op = data;
    opop.textContent = op;
  }
}
function opopop(oparation) {
  oparation.addEventListener("click", function () {
    data = oparation.dataset.v;
  });
  oparation.addEventListener("click", vvv);
}
function btnbtn(button) {
  button.addEventListener("click", function () {
    data = button.dataset.v;
  });
  button.addEventListener("click", www);
}
document.addEventListener("keyup", function (k) {
  switch (k.key) {
    case "-":
    case "M":
    case "m":
      data = "-";
      vvv();
      break;
    case "p":
    case "P":
    case "+":
      data = "+";
      vvv();
      break;
    case "*":
    case "x":
    case "X":
      data = "x";
      vvv();
      break;
    case "/":
    case "d":
    case "D":
      data = "÷";
      vvv();
      break;
    case "=":
    case "Enter":
      cal1();
      break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      data = k.key;
      www();
      break;
    case "f":
      format();
      break;
    case "Backspace":
      dlt();
      break;
    case ".":
      point();
      break;
  }
});
function clear() {
  num1 = "0";
  num2 = "0";
  first = 1;
  n1.textContent = "";
  op = "";
  opop.textContent = op;
}
function format() {
  if (
    num1 === "0" &&
    num2 === "0" &&
    first === 1 &&
    n1.textContent === "" &&
    op === "" &&
    opop.textContent === op
  ) {
    new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
  } else {
    new Audio("./click.mp3").play();
    screen.textContent = 0;
    clear();
  }
}
