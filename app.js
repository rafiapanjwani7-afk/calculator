
// --------------------------Asssignment Calculator ---------------------------- //

var display = document.getElementById("calculation");
var currentInput = "";

function inputNumber(num) {
    currentInput += num;
    display.value = currentInput;
}

function calculate() {
    var word = document.getElementById("calculation").value;
    var operator = "";
    for (var i = 0; i < word.length; i++) {
        if (word[i] === "*" || word[i] === "+" || word[i] === "-" || word[i] === "/" || word[i] === "%") {
            operator = word[i];
            break;
        }
    }

    var index = word.indexOf(operator);
    var num3 = word.slice(0, index);
    var num4 = word.slice(index + 1);
    var num1 = Number(num3);
    var num2 = Number(num4);
    document.getElementById("calculation").value = "";
    var result;

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "/") {
        if (num2 != 0) {
            result = num1 / num2;
        } else {
            result = "Error: division by Zero";
        }

    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "%") {
        if (num2 != 0) {
            result = num1 % num2;
        } else {
            result = "Error: modulo by Zero";
        }
    } else {
        result = "Error";
    }

    document.getElementById("calculation").value = result;
}

function clearAll() {
    currentInput = "";
    display.value = "0";
}

function del() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput || "0";
}
