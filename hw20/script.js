// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
//
//sum(3) = 3
// sum(5) = 8
// sum(20) = 28

let createSum = function () {
    let sum = 0;
    return function (number) {
        sum += number;
        return console.log(sum);
    }
}

let sum = createSum();

sum(3);
sum(5);
sum(20);