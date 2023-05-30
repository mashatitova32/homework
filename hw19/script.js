// Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:
//
//1  Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
//2  Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
//3  Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
//4  Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

//task 1
let arrayValues = ['apple', 13, 28, 'water', 3];
let numberIsArray = 0;

function calcNumberElement() {
    for (let i = 0; i < arrayValues.length; i++) {
        if (Number(arrayValues[i])) {
            numberIsArray += arrayValues[i];
        }
    }
}

calcNumberElement();
console.log(numberIsArray);

//task 2
let firstNumber = prompt('Enter first number');
let secondNumber = prompt('Enter second number');
let sign = prompt('Enter sign');

function doMath(x, znak, y) {
    if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) return 'Ошибка';
    return eval(x + znak.replace('^', '**') + y);
}

console.log(doMath(firstNumber, sign, secondNumber));


//task 3
let outerArray = prompt('outerArray = ');
let interiorArray = prompt('interiorArray = ');

let result = [];
result.length = outerArray;

for (let i = 0; i < outerArray; i++) {
    result[i] = [];
    result[i].length = interiorArray;
}

for (let i = 0; i < result.length; i++){
    for (let j = 0; j < result[i].length; j++){
        result[i][j] = 1;
    }
}

console.log(result);

//task 4
let str = prompt('Enter string');
let removeLetter = prompt('Enter letter');

function removeChars(str, lettersToRemove) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (lettersToRemove.indexOf(str[i]) === -1) {
            result += str[i];
        }
    }
    return result;
}

console.log(removeChars(str, removeLetter));
