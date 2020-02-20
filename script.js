const operate = (op, a, b) => console.log(op(a, b));

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const display = document.querySelector('#display');

const value = document.querySelectorAll('.button').forEach(button =>
  button.addEventListener('click', (e) => e.target.innerHTML));

console.log(value);

operate(add, 40, 2);