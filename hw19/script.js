// Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:
//
//1  Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
//2  Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
//3  Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
//4  Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

//task 1
let array = ['apple', 13, 28, 'water', 3];
let numberIsArray = 0;


function calcNumberElement(){
    for(let i = 0; i < array.length; i++){
        if(Number(array[i])){
            numberIsArray += array[i];
        }
    }
}
calcNumberElement();
console.log(numberIsArray);

//task 2
// let equationNumbersOne = +prompt('Enter first number');
// let equationNumbersTwo = +prompt('Enter second number');
// let sign = prompt('Enter sign(+, -, *, /, %, ^)', '+');
//
// function doMath(x, y, znak){
//     switch (znak){
//         case '+':
//             x + y;
//             break;
//         case '-':
//             x - y;
//             break;
//         case '*':
//             x * y;
//             break;
//         case '/':
//             x / y;
//             break;
//         case '%':
//             x % y;
//             break;
//         case '^':
//             x ^ y;
//             break;
//     }
// }
// console.log(doMath(equationNumbersOne, equationNumbersTwo, sign));


let str = prompt('Введите любой текст');
let stR = prompt('Какие символы хотите удалить?');

function removeLetter(x,y) {
    for(let i = 0; i < str.length; i++){
        if (x[i] === y[i]){
            x.replace(y, '');
        } else {
            x[i] += x[i];
        }
    return console.log(str);
}
     // x.replace(`${y}`, '');
     // return console.log(str);
}

removeLetter(str, stR);



