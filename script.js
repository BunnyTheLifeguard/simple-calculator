const operate = (op, a, b) => console.log(op(a, b));

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const display = document.querySelector('#display');

document.querySelectorAll('.button').forEach(button =>
  button.addEventListener('click', (e) => display.value = (e.target.innerHTML)));

operate(add, 40, 2);