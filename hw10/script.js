// Используя PROMPT, спросите пользователя, что он хочет сделать (+ - / *). Спрашивайте до тех пор, пока он не поставит правильный ответ.
// Спросить, сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 7. Спрашивайте до тех пор, пока он не даст правильный ответ.
//     Запрос каждого операнда в user. Это должно быть ЧИСЛО. Спрашивайте до тех пор, пока он не поставит правильный ответ.
//     С помощью ALERT или console.log отобразить конечный результат действия (+-/*).

// do{
//     signOperation = prompt('Enter sign, please', '+ - / *');
// }
// while (signOperation !== '+' && signOperation !== '-' && signOperation !== '*' && signOperation !== '/');
//
// do{
//     numberOfOperands = +prompt('Enter sign, please', '+ - / *');
// }
// while (numberOfOperands > 1 && numberOfOperands < 7);


let operation;
let numOperands;

do {
    operation = prompt('What operation do you want to perform? (+, -, *, /)');
} while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/');

do {
    numOperands = parseInt(prompt('How many operands do you want to use? (2-6)'));
} while (numOperands < 2 || numOperands > 6);

let operands = [];

for (let i = 0; i < numOperands; i++) {
    let operand;
    do {
        operand = parseInt(prompt(`Enter operand ${i + 1}:`));
    }
    while (isNaN(operand));
    operands.push(operand);
}

let result = operands[0];

for (let i = 1; i < numOperands; i++) {
    switch (operation) {
        case '+':
            result += operands[i];
            break;
        case '-':
            result -= operands[i];
            break;
        case '*':
            result *= operands[i];
            break;
        case '/':
            result /= operands[i];
            break;
    }
}

console.log(`The result of performing ${operation} on ${numOperands} operands (${operands.join(', ')}) is: ${result}`);

