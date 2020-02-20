const operate = (op, a, b) => op(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const button = document.querySelectorAll('.button');

var value = button.forEach(btn => btn.addEventListener('click', (e) => document.querySelector('#display').value = (e.target.value)));

// function press() {
//   document.querySelectorAll('.button').forEach(button =>
//     button.addEventListener('click', (e) => e.target.value));
// }

// const display = document.querySelector('#display');
// display.addEventListener(press());

// console.log(value);

operate(add, 40, 2)