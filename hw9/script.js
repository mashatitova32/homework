//Написати цикли, які роблять наступне:
//
// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

//task 1
for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
}

//task 2
let value = 27;

for (let i = 10; i <= 100; i += 10) {
    console.log(i * value);
}
//task 3
let integer = 100;

for(let i = 1; i <= 100; i++){
    if(i*i < integer){
        console.log(i);
    }
}

//task 4
let primeNumber = prompt('enter number');
let isPrime = true;

if (primeNumber < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < primeNumber; i++) {
        if (primeNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(primeNumber + ' - простое число');
} else {
    console.log(primeNumber + ' - составное число');
}

//task 5
let number = parseInt(prompt("Введите что-бы проверить можно ли получить число из 3-ки в степени: "));

while (number % 3 === 0) {
    number /= 3;
}
console.log((number === 1)? "Число можно получить " : "Число нельзя получить");




