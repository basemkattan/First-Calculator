let editingFirstNumber = 1;
let firstNumber = "0";
let secondNumber = "0";
let currentOperator = "";
let data = "";
let firstAttemptToDeleteWhileEmpty = 0;
let stopRepeatingBackspace = 0;
let stopRepeatingTypingNumbers = 0;

const numbersButtons = document.querySelectorAll(".bbb");
const operatorsButtons = document.querySelectorAll(".ooo");
const clearButton = document.getElementById("rr");
const equalButton = document.getElementById("ee");
const pointButton = document.getElementById("ppp");
const mainNumberOnScreen = document.getElementById("nnn");
const operatorPlaceOnScreen = document.getElementById("opop");
const allClearButton = document.getElementById("fff");
const smallSizeNumberPlaceOnScreen = document.getElementById("n1");

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

setupMultipleButtons(operatorsButtons, useOperators);
setupMultipleButtons(numbersButtons, writeNumber);

function setupMultipleButtons(buttons, job) {
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      data = button.dataset.v;
    });
    button.addEventListener("click", job);
  });
}

clearButton.addEventListener("click", dlt);
equalButton.addEventListener("click", calculate);
pointButton.addEventListener("click", addPoint);
allClearButton.addEventListener("click", format);

function calculate() {
  if (currentOperator !== "") {
    switch (currentOperator) {
      case "+":
        firstNumber = +firstNumber + +secondNumber;
        break;
      case "-":
        firstNumber = +firstNumber - +secondNumber;
        break;
      case "x":
        firstNumber = +firstNumber * +secondNumber;
        break;
      case "÷":
        firstNumber = +firstNumber / +secondNumber;
        break;
    }
    firstNumber = firstNumber.toString();
    mainNumberOnScreen.textContent = firstNumber;
    if (isNaN(firstNumber) | (+firstNumber === Infinity)) {
      new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
      clear();
    } else if (firstNumber.length > 17) {
      new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
      mainNumberOnScreen.textContent = "Sorry, our screen isn’t that big.";
      clear();
    } else {
      new Audio("./click.mp3").play();
      editingFirstNumber = 1;
      secondNumber = "0";
      currentOperator = "";
      operatorPlaceOnScreen.textContent = currentOperator;
      smallSizeNumberPlaceOnScreen.textContent = "";
    }
  } else {
    new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
  }
}

function dlt() {
  let currentnum = editingFirstNumber === 1 ? firstNumber : secondNumber;
  if (currentnum.length > 0) {
    currentnum = currentnum.slice(0, -1);
    mainNumberOnScreen.textContent = currentnum;
    if (currentnum !== "") {
      new Audio("./click.mp3").play();
    }
    if (currentnum === "" && editingFirstNumber === 1) {
      currentnum = "0";
      mainNumberOnScreen.textContent = currentnum;
      new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
      stopRepeatingBackspace = 1;
    }
    if (
      currentnum === "" &&
      editingFirstNumber === 0 &&
      firstAttemptToDeleteWhileEmpty < 1
    ) {
      currentnum = "0";
      mainNumberOnScreen.textContent = currentnum;
      new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
      firstAttemptToDeleteWhileEmpty += 1;
      setTimeout(() => {
        firstAttemptToDeleteWhileEmpty = 0;
      }, 700);
      stopRepeatingBackspace = 1;
    }
    if (
      currentnum === "" &&
      editingFirstNumber === 0 &&
      firstAttemptToDeleteWhileEmpty >= 1
    ) {
      editingFirstNumber = 1;
      secondNumber = "0";
      currentOperator = "";
      mainNumberOnScreen.textContent = firstNumber;
      operatorPlaceOnScreen.textContent = currentOperator;
      smallSizeNumberPlaceOnScreen.textContent = "";
      new Audio("./click.mp3").play();
      firstAttemptToDeleteWhileEmpty = 0;
      return;
    }
  }
  if (editingFirstNumber === 1) {
    firstNumber = currentnum;
  } else {
    secondNumber = currentnum;
  }
}

function addPoint() {
  let currentnum = editingFirstNumber === 1 ? firstNumber : secondNumber;
  if (!currentnum.includes(".")) {
    new Audio("./click.mp3").play();
    currentnum += ".";
    mainNumberOnScreen.textContent = currentnum;
  } else {
    new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
  }
  if (editingFirstNumber === 1) {
    firstNumber = currentnum;
  } else {
    secondNumber = currentnum;
  }
}
function writeNumber() {
  let currentnum = editingFirstNumber === 1 ? firstNumber : secondNumber;
  if (currentnum.length < 17) {
    new Audio("./click.mp3").play();
    currentnum += data;
    if (currentnum[0] === "0" && !currentnum.includes(".")) {
      currentnum = currentnum.slice(1);
    }
  }
  if (currentnum.length === 17) {
    new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
    stopRepeatingTypingNumbers = 1;
  }
  if (editingFirstNumber === 1) {
    firstNumber = currentnum;
    mainNumberOnScreen.textContent = firstNumber;
  } else {
    secondNumber = currentnum;
    mainNumberOnScreen.textContent = secondNumber;
  }
}
function useOperators() {
  if (editingFirstNumber === 1) {
    new Audio("./click.mp3").play();
    smallSizeNumberPlaceOnScreen.textContent = firstNumber;
    editingFirstNumber = 0;
    currentOperator = data;
    operatorPlaceOnScreen.textContent = currentOperator;
    mainNumberOnScreen.textContent = secondNumber;
  } else if (editingFirstNumber === 0 && data === currentOperator) {
    calculate();
  } else {
    new Audio("./click.mp3").play();
    currentOperator = data;
    operatorPlaceOnScreen.textContent = currentOperator;
  }
}
function clear() {
  firstNumber = "0";
  secondNumber = "0";
  editingFirstNumber = 1;
  smallSizeNumberPlaceOnScreen.textContent = "";
  currentOperator = "";
  operatorPlaceOnScreen.textContent = currentOperator;
}
function format() {
  if (
    firstNumber === "0" &&
    secondNumber === "0" &&
    editingFirstNumber === 1 &&
    smallSizeNumberPlaceOnScreen.textContent === "" &&
    currentOperator === "" &&
    operatorPlaceOnScreen.textContent === currentOperator
  ) {
    new Audio("./notification-alert-269289 (mp3cut.net).mp3").play();
  } else {
    new Audio("./click.mp3").play();
    clear();
    mainNumberOnScreen.textContent = firstNumber;
  }
}
document.addEventListener("keyup", function (k) {
  switch (k.key) {
    case "-":
    case "M":
    case "m":
      minusbtn.classList.remove("active");
      data = "-";
      useOperators();
      break;
    case "p":
    case "P":
    case "+":
      data = "+";
      useOperators();
      plusbtn.classList.remove("active");
      break;
    case "*":
    case "x":
    case "X":
      multibtn.classList.remove("active");
      data = "x";
      useOperators();
      break;
    case "/":
    case "d":
    case "D":
      dividebtn.classList.remove("active");
      data = "÷";
      useOperators();
      break;
    case "=":
    case "Enter":
      equalButton.classList.remove("active");
      calculate();
      break;
    case "1":
      onebtn.classList.remove("active");
      stopRepeatingTypingNumbers = 0;
      break;
    case "2":
      twobtn.classList.remove("active");
      stopRepeatingTypingNumbers = 0;
      break;
    case "3":
      threebtn.classList.remove("active");
      stopRepeatingTypingNumbers = 0;
      break;
    case "4":
      fourbtn.classList.remove("active");
      stopRepeatingTypingNumbers = 0;
      break;
    case "5":
      fivebtn.classList.remove("active");
      stopRepeatingTypingNumbers = 0;
      break;
    case "6":
      sixbtn.classList.remove("active");
      stopRepeatingTypingNumbers = 0;
      break;
    case "7":
      sevenbtn.classList.remove("active");
      stopRepeatingTypingNumbers = 0;
      break;
    case "8":
      eightbtn.classList.remove("active");
      stopRepeatingTypingNumbers = 0;
      break;
    case "9":
      ninebtn.classList.remove("active");
      stopRepeatingTypingNumbers = 0;
      break;
    case "0":
      zerobtn.classList.remove("active");
      stopRepeatingTypingNumbers = 0;
      break;
    case "f":
      allClearButton.classList.remove("active");
      format();
      break;
    case "Backspace":
    case "c":
    case "C":
      clearButton.classList.remove("active");
      stopRepeatingBackspace = 0;
      break;
    case ".":
      pointButton.classList.remove("active");
      addPoint();
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
      equalButton.classList.add("active");
      break;
    case "1":
      onebtn.classList.add("active");
      if (stopRepeatingTypingNumbers) {
        return;
      }
      data = k.key;
      writeNumber();
      break;
    case "2":
      twobtn.classList.add("active");
      if (stopRepeatingTypingNumbers) {
        return;
      }
      data = k.key;
      writeNumber();
      break;
    case "3":
      threebtn.classList.add("active");
      if (stopRepeatingTypingNumbers) {
        return;
      }
      data = k.key;
      writeNumber();
      break;
    case "4":
      fourbtn.classList.add("active");
      if (stopRepeatingTypingNumbers) {
        return;
      }
      data = k.key;
      writeNumber();
      break;
    case "5":
      fivebtn.classList.add("active");
      if (stopRepeatingTypingNumbers) {
        return;
      }
      data = k.key;
      writeNumber();
      break;
    case "6":
      sixbtn.classList.add("active");
      if (stopRepeatingTypingNumbers) {
        return;
      }
      data = k.key;
      writeNumber();
      break;
    case "7":
      sevenbtn.classList.add("active");
      if (stopRepeatingTypingNumbers) {
        return;
      }
      data = k.key;
      writeNumber();
      break;
    case "8":
      eightbtn.classList.add("active");
      if (stopRepeatingTypingNumbers) {
        return;
      }
      data = k.key;
      writeNumber();
      break;
    case "9":
      ninebtn.classList.add("active");
      if (stopRepeatingTypingNumbers) {
        return;
      }
      data = k.key;
      writeNumber();
      break;
    case "0":
      zerobtn.classList.add("active");
      if (stopRepeatingTypingNumbers) {
        return;
      }
      data = k.key;
      writeNumber();
      break;
    case "f":
      allClearButton.classList.add("active");
      break;
    case "Backspace":
    case "c":
    case "C":
      clearButton.classList.add("active");
      if (stopRepeatingBackspace) {
        return;
      }
      dlt();
      break;
    case ".":
      pointButton.classList.add("active");
      break;
  }
});
