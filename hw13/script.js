// 1 Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.
// 2    Знайти мінімальний елемент масиву та його порядковий номер.
// 3    Знайти максимальний елемент масиву та його порядковий номер.
// 4    Визначити кількість негативних елементів.
// 5    Знайти кількість непарних позитивних елементів.
// 6    Знайти кількість парних позитивних елементів.
// 7    Знайти суму парних позитивних елементів.
// 8    Знайти суму непарних позитивних елементів.
// 9    Знайти добуток позитивних елементів.
// 10   Знайти найбільший серед елементів масиву, ост альні обнулити.

let array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

//task 1
let sum = 0;
let amount = 0;

for (let i = 0; i < array.length; i++){
    if(array[i] > 0){
        sum += array[i];
        amount++;
        console.log(array[i]);
    }
}
console.log(sum, amount);

//task 2

for (let i = 0; i < array.length; i++) {
    if( array[0] > array[i]){
        array[0] = array[i];
    }
}
console.log(array[0], );

//task 3
for (let i = 0; i < array.length; i++) {
    if( array[0] < array[i]){
        array[0] = array[i];
    }
}
console.log(array[0] );

//task 4
let amountNegative = 0;

for (let i = 0; i < array.length; i++){
    if(array[i] < 0){
        amountNegative++;
    }
}
console.log(amountNegative);

//task 5
let unpairedPositive = 0;
let sumUnpairedPositive = 0;

for (let i = 0; i < array.length; i++){
    if(array[i] > 0 && i % 3 === 0){
        unpairedPositive++;
        sumUnpairedPositive += array[i];
        console.log(array[i]);
    }
}

console.log(unpairedPositive);

//task 6
let pairedPositive = 0;
let sumPairedPositive = 0;

for (let i = 0; i < array.length; i++){
    if( array[i] > 0 && i % 2 === 0){
        pairedPositive++;
        sumPairedPositive += array[i];
        console.log(array[i]);
    }
}
console.log(pairedPositive);

//task 7
console.log(sumPairedPositive);

//task 8
console.log(sumUnpairedPositive);

//task 9
let multPositive = 1;

for (let i = 0; i < array.length; i++){
    if(array[i] > 0){
        multPositive *= array[i];
        console.log(array[i]);
    }
}
console.log(multPositive);

//task 10
let max = [0];
let maxi = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
        array[maxi] = 0;
        maxi = i;
    } else {
        array[i] = 0;
    }
}
console.log(array);
