//Написати цикли, які зможуть:
//
// Вивести на сторінку в один рядок через кому числа від 10 до 20.
// Вивести квадрати чисел від 10 до 20.
// Вивести таблицю множення на 7.
// Знайти суму всіх цілих чисел від 1 до 15.
// Знайти добуток усіх цілих чисел від 15 до 35.
// Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// Вивести суму лише парних чисел в діапазоні від 30 до 80.
// Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.
// Надрукувати повну таблицю множення від 1 до 10

//1
let result = '';

for (let i = 10; i <= 20; i++) {
    result += `${i}${i === 20 ? '.' : ','}`;
}

console.log(result);

//2
let result2 = '';

for (let i = 10; i <= 20; i++) {
    result2 += `${i ** 2}${i === 20 ? '.' : ','}`;
}

console.log(result2);

//3
let result3 = '';

for (let i = 1; i <= 10; i++) {
    result3 += `${i * 7}${i === 10 ? '.' : ','}`;
}

console.log(result3);

//4
let sum4 = 0;

for (let i = 1; i <= 15; i++) {
    sum4 += i;
}

console.log(sum4);

//5
let result5 = 1;

for (let i = 15; i <= 35; i++) {
    result5 = result5 * i;
}

console.log(result5);

//6
let number6 = 500;
let sum6 = 0;

for (let i = 1; i <= number6; i++) {
    sum6 = sum6 + i;
}

sum6 = sum6 / number6;

console.log(sum6);

//7
let sum7 = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum7 += i;
    }
}

console.log(sum7);

//8
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//9
let number9 = 10;
let sum9 = 0;

for (let i = 2; i <= number9; i++) {
    if (number9 % i === 0) {
        console.log(i);
    }
}

//10
for (let i = 2; i <= number9; i += 2) {
    if (number9 % i === 0) {
        console.log(i);
    }
}

//11
for (let i = 2; i <= number9; i += 2) {
    if (number9 % i === 0) {
        sum9 += i;
    }
}
console.log(sum9);

//12
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}