//Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:
//
// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

let firstNumber = prompt('First number');
let secondNumber = prompt('Second number');
let thirdNumber = prompt('Third number');
let count = 3;
let result = (parseInt(firstNumber) + parseInt(secondNumber) + parseInt(thirdNumber)) / count;

alert(result);