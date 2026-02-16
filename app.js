
// --------------------------Asssignment Calculator ---------------------------- //

var display = document.getElementById("calculation");
var num1 = "";
var num2 = "";
var operator = "";

function inputNumber(num) {
    display.value += num;
}
function setOperator(op) {
    if (display.value == "") return;

    num1 = display.value;
    operator = op;
    display.value = num1 + " " + operator + " ";
}

function calculate() {
    var word = document.getElementById("calculation").value.split(" ");
    num1 = Number(word[0]);
    operator = word[1];
    num2 = Number(word[2]);
    document.getElementById("calculation").value = "";
    var result;

    if (operator == "+") {
        result = num1 + num2;
    }
    else if (operator == "-") {
        result = num1 - num2;
    }
    else if (operator == "*") {
        result = num1 * num2;
    }
    else if (operator == "/") {
        if (num2 == 0) {
            display.value = "Error";
            return;
        }
        result = num1 / num2;
    }
    else if (operator == "%") {
        result = num1 % num2;
    }
    document.getElementById("calculation").value = result;
    display.value = result;
}
function clearAll() {
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function del() {
    display.value = display.value.slice(0, -1);
}
