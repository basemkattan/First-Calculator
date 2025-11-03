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

const plusbtn = document.querySelector(".plusbtn");
const minusbtn = document.querySelector(".minusbtn");
const multibtn = document.querySelector(".multibtn");
const dividebtn = document.querySelector(".dividebtn");
const sixbtn = document.querySelector(".sixbtn");
const sevenbtn = document.querySelector(".sevenbtn");
const eightbtn = document.querySelector(".eightbtn");
const ninebtn = document.querySelector(".ninebtn");
const twobtn = document.querySelector(".twobtn");
const threebtn = document.querySelector(".threebtn");
const fourbtn = document.querySelector(".fourbtn");
const fivebtn = document.querySelector(".fivebtn");
const zerobtn = document.querySelector(".zerobtn");
const onebtn = document.querySelector(".onebtn");

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
      num2 = "0";
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
}function clear() {
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
      minusbtn.classList.remove("active");
      data = "-";
      vvv();
      break;
    case "p":
    case "P":
    case "+":
      data = "+";
      vvv();
      plusbtn.classList.remove("active");
      break;
    case "*":
    case "x":
    case "X":
      multibtn.classList.remove("active");
      data = "x";
      vvv();
      break;
    case "/":
    case "d":
    case "D":
      dividebtn.classList.remove("active");
      data = "÷";
      vvv();
      break;
    case "=":
    case "Enter":
      ee.classList.remove("active");
      cal1();
      break;
    case "1":
      onebtn.classList.remove("active");
      break;
    case "2":
      twobtn.classList.remove("active");
      break;
    case "3":
      threebtn.classList.remove("active");
      break;
    case "4":
      fourbtn.classList.remove("active");
      break;
    case "5":
      fivebtn.classList.remove("active");
      break;
    case "6":
      sixbtn.classList.remove("active");
      break;
    case "7":
      sevenbtn.classList.remove("active");
      break;
    case "8":
      eightbtn.classList.remove("active");
      break;
    case "9":
      ninebtn.classList.remove("active");
      break;
    case "0":
      zerobtn.classList.remove("active");
      break;
    case "f":
      fff.classList.remove("active");
      format();
      break;
    case "Backspace":
    case "c":
    case "C":
      ccc.classList.remove("active");
      break;
    case ".":
      ppp.classList.remove("active");
      point();
      break;
  }
});
document.addEventListener("keydown", function (k) {
  switch (k.key) {
    case "-":
    case "M":
    case "m":
      minusbtn.classList.add("active");
      break;
    case "p":
    case "P":
    case "+":
      plusbtn.classList.add("active");
      break;
    case "*":
    case "x":
    case "X":
      multibtn.classList.add("active");
      break;
    case "/":
    case "d":
    case "D":
      dividebtn.classList.add("active");
      break;
    case "=":
    case "Enter":
      ee.classList.add("active");
      break;
    case "1":
      onebtn.classList.add("active");
                  data = k.key;
      www();
      break;
    case "2":
      twobtn.classList.add("active");
                  data = k.key;
      www();
      break;
    case "3":
      threebtn.classList.add("active");
                  data = k.key;
      www();
      break;
    case "4":
      fourbtn.classList.add("active");
                  data = k.key;
      www();
      break;
    case "5":
      fivebtn.classList.add("active");
                  data = k.key;
      www();
      break;
    case "6":
      sixbtn.classList.add("active");
                  data = k.key;
      www();
      break;
    case "7":
      sevenbtn.classList.add("active");
                  data = k.key;
      www();
      break;
    case "8":
      eightbtn.classList.add("active");
                  data = k.key;
      www();
      break;
    case "9":
      ninebtn.classList.add("active");
            data = k.key;
      www();
      break;
    case "0":
      zerobtn.classList.add("active");
      data = k.key;
      www();
      break;
    case "f":
      fff.classList.add("active");
      break;
    case "Backspace":
    case "c":
    case "C":
      ccc.classList.add("active");
            dlt();
      break;
    case ".":
      ppp.classList.add("active");
      break;
  }
});
