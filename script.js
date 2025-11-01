const btn = document.querySelectorAll(".bbb");
const ooo = document.querySelectorAll(".ooo");
const ccc = document.getElementById("rr");
const ee = document.getElementById("ee");
const ppp = document.getElementById("ppp");
const screen = document.getElementById("nnn");
const opop = document.getElementById("opop");
const fff = document.getElementById("fff");
const n1 = document.getElementById("n1");

let first = 1;
let num1 = "0";
let num2 = "0";
let op = "";

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

  // } else if(num2 === "") {
  //   new Audio("./click.mp3").play();
  //   screen.textContent = num1;
  //   n1.textContent = "";
  //   first = 0
  // }else if(num2 !== ""){
  //   new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
  // }
}

ee.addEventListener("click", cal1);

ooo.forEach(function (oo) {
  oo.addEventListener("click", function () {
    if (first === 1) {
      new Audio("./click.mp3").play();
      n1.textContent = num1;
      first = 0;
      op = oo.dataset.v;
      opop.textContent = op;
      screen.textContent = 0;
    } else if (first === 0 && oo.dataset.v === op) {
      op = oo.dataset.v;
      cal1();
      n1.textContent = "";
      opop.textContent = op;
      first = 1;
      screen.textContent = num1;
    } else {
      new Audio("./click.mp3").play();
      op = oo.dataset.v;
      opop.textContent = op;
    }
  });
});

btn.forEach(function (bt) {
  bt.addEventListener("click", function () {
    if (first === 1) {
      if (num1.length === 17) {
        new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
      }

      if (num1.length < 17) {
        new Audio("./click.mp3").play();
        num1 += bt.dataset.v;
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
        num2 += bt.dataset.v;
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
  });
});

rr.addEventListener("click", function () {
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
});

ppp.addEventListener("click", function () {
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
});

fff.addEventListener("click", function () {
  new Audio("./click.mp3").play();
  num1 = "0";
  num2 = "0";
  first = 1;
  opop.textContent = "";
  n1.textContent = "";
  screen.textContent = 0;
});
