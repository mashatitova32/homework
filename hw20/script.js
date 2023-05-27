// Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
//
//sum(3) = 3
// sum(5) = 8
// sum(20) = 28

let createSum = function () {
    let num = 0;
    return function (x) {
        num += x
        return console.log(num);
    }
}

let sum = createSum();

sum(3);
sum(5);
sum(20);