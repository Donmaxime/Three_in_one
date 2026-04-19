let firstNumber;
let operator;
let nextNumber;
let result;

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
/**
 * @param {number} firstNumber
 * @param {string} operator
 * @param {number} nextNumber
 */
function operate(firstNumber, operator, nextNumber) {
    switch (operator) {
        case '+':
            result = add(firstNumber, nextNumber);
            break;
        case '-':
            result = subtract(firstNumber, nextNumber);
            break;
        case '*':
            result = multiply(firstNumber, nextNumber);
            break;
        case '/':
            result = divide(firstNumber, nextNumber);
            break;

        default:
            console.log("Cet opérateur n'existe pas.");
            break;
    }
    console.log(result);
}

const screenExpression = document.querySelector('.screen-expression');
const numbersAndOperators = document.querySelectorAll('.btn-dark, .btn-operator');
const btnLight = document.querySelectorAll('.btn.btn-light');

btnLight.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        if (event.target.value === 'C') {
            screenExpression.textContent = '';
        }
        if (event.target.value === '⌫') {
            if (screenExpression.lastElementChild) {
                screenExpression.lastElementChild.remove();
            }
        }
        console.log(event.target.value);
    });
});

numbersAndOperators.forEach((element) => {
    element.addEventListener('click', (event) => {
        let spanOfElement = document.createElement('span');
        spanOfElement.textContent = `${event.target.value}`;
        screenExpression.appendChild(spanOfElement);
    });
});

function DisplayOnScreen() {}

// operate(10, '+', 5);
// operate(10, '-', 5);
// operate(10, '*', 5);
// operate(10, '/', 5);
