let first = 1;
let num1 = "0";
let num2 = "0";
let op = "";
let data = "";

const btn = document.querySelectorAll(".bbb");
const ooo = document.querySelectorAll(".ooo");
const ccc = document.getElementById("rr");
const ee = document.getElementById("ee");
const ppp = document.getElementById("ppp");
const screen = document.getElementById("nnn");
const opop = document.getElementById("opop");
const fff = document.getElementById("fff");
const n1 = document.getElementById("n1");

ooo.forEach(opopop);
btn.forEach(btnbtn);

rr.addEventListener("click", dlt);
ee.addEventListener("click", cal1);
ppp.addEventListener("click", point);
fff.addEventListener("click", format);

function cal1() {
  if (op !== "" && num1 !== "") {
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
      num1 = "";
      num2 = "";
      first = 1;
      n1.textContent = "";
      opop.textContent = "";
    } else if (num1.length > 17) {
      new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
      screen.textContent = "Sorry, our screen isn’t that big.";
      num1 = "";
      num2 = "";
      first = 1;
      n1.textContent = "";
      op = "";
      opop.textContent = op;
    } else {
      new Audio("./click.mp3").play();
      num2 = "";
      first = 1;
      op = "";
      opop.textContent = op;
      n1.textContent = "";
    }
  } else {
    new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
  }
}
function dlt() {
  if (first === 1 && num1.length > 0) {
    num1 = num1.slice(0, -1);
    screen.textContent = num1;
    new Audio("./click.mp3").play();
    if (num1 === "") {
      num1 = "0";
      screen.textContent = num1;
      new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
    }
  } else if (first === 0 && num2.length > 0) {
    num2 = num2.slice(0, -1);
    screen.textContent = num2;
    new Audio("./click.mp3").play();
    if (num2 === "") {
      num2 = "0";
      screen.textContent = num2;
      new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
    }
  } else if (first === 0 && num2.length < 1) {
    screen.textContent = 0;
    new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
  }
}
function point() {
  new Audio("./click.mp3").play();
  if (first === 1 && !num1.includes(".")) {
    if (num1 === "") {
      num1 = "0";
    }
    num1 += ".";
    screen.textContent = num1;
  } else if (first === 0 && !num2.includes(".")) {
    if (num2 === "") {
      num2 = "0";
    }
    num2 += ".";
    screen.textContent = num2;
  }
}
function format() {
  new Audio("./click.mp3").play();
  num1 = "0";
  num2 = "0";
  first = 1;
  opop.textContent = "";
  n1.textContent = "";
  screen.textContent = 0;
}
function vvv() {
  if (first === 1) {
    new Audio("./click.mp3").play();
    n1.textContent = num1;
    first = 0;
    op = data;
    opop.textContent = op;
    screen.textContent = 0;
  } else if (first === 0 && data === op) {
    op = data;
    cal1();
    n1.textContent = "";
    opop.textContent = op;
    first = 1;
    screen.textContent = num1;
  } else {
    new Audio("./click.mp3").play();
    op = data;
    opop.textContent = op;
  }
}
function www() {
  if (first === 1) {
    if (num1.length === 17) {
      new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
    }

    if (num1.length < 17) {
      new Audio("./click.mp3").play();

      num1 += data;

      if (num1[0] === "0" && !num1.includes(".")) {
        num1 = num1.slice(1);
      }
    }

    if (num1[0] === "0" && num1[1] === "0" && !num1.includes(".")) {
      num1 = num1.slice(1);
    }
    screen.textContent = num1;
    if (num1 === "") {
      screen.textContent = 0;
    }
  } else {
    n1.textContent = num1;
    if (num2.length < 17) {
      new Audio("./click.mp3").play();
      num2 += data;
      if (num2[0] === "0" && !num2.includes(".")) {
        num2 = num2.slice(1);
      }
    }
    if (num2.length === 17) {
      new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
    }
    if (num2[0] === "0" && num2[1] === "0" && !num2.includes(".")) {
      num2 = num2.slice(1);
    }
    screen.textContent = num2;
    if (num2 === "") {
      screen.textContent = 0;
    }
  }
}
function opopop(oo) {
  oo.addEventListener("click", function () {
    data = oo.dataset.v;
  });
  oo.addEventListener("click", vvv);
}
function btnbtn(bt) {
  bt.addEventListener("click", function () {
    data = bt.dataset.v;
  });
  bt.addEventListener("click", www);
}
document.addEventListener("keyup", function (oo) {
  switch (oo.key) {
    case "+":
    case "-":
    case "*":
      data = oo.key;
      vvv();
      break;
    case "x":
    case "X":
      data = "*";
      vvv();
      break;
    case "/":
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
      data = oo.key;
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

