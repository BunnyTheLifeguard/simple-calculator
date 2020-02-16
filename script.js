const operate = (op, a, b) => console.log(op(a, b));

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

operate(add, 40, 2);