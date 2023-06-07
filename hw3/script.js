let firstOperand = +prompt('Enter first operand');
let secondOperand = +prompt('Enter second operand');
let sign = prompt('Enter sign', '+, -, *, /');

switch (sign){
    case '+':
        alert(firstOperand + secondOperand);
        break;
    case '-':
        alert(firstOperand - secondOperand);
        break;
    case '*':
       alert(firstOperand * secondOperand);
        break;
    case '/':
        alert(firstOperand / secondOperand);
        break;
}