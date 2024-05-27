const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

let number1 = 0;
let number2 = 0;
let operand = '';

const operate = function(n1, n2, op) {
    switch (op) {
        case '+':
            return add(n1, n2);
        case '-':
            return subtract(n1, n2);
        case '*':
            return multiply(n1, n2);
        case '/':
            return divide(n1, n2);
        default:
            return "Error";
    }
}

const evaluateInput = function () {
    let valList = display.innerText.split(' ')
    if (valList.length !== 3) {
        console.log(valList.length);
        return;
    }
    number1 = parseInt(valList[0]);
    operand = valList[1];
    number2 = parseInt(valList[2]);
    display.innerText = operate(number1, number2, operand);
}

const display = document.querySelector('#display');
const clearButton = document.querySelector('#clear');
const opButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');

equalsButton.addEventListener('click', () => {
    evaluateInput();
})

for (let opButton of opButtons ) {
    opButton.addEventListener('click', () => {
        evaluateInput();
        display.innerHTML = display.innerHTML + " " + opButton.textContent + " ";
    });
}

clearButton.addEventListener('click', () => {
    display.innerText = ''
});

// create function to generate buttons? 
const buttons = document.querySelectorAll('.number');
for (let button of buttons) {
    button.addEventListener('click', () => {
        display.innerHTML += button.textContent;
    })
};