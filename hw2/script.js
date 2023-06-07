//В якості ДЗ, необхідно вирішити дві наступні задачі:
//
// Отримати від користувача 3 рядки та вивести їх у довільному порядку однією командою (конкатенація);
// Розбити за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.

//task 1
let firstName = prompt('Enter your first name, please');
let secondName = prompt('Enter your second name, please');
let age = prompt('Enter your age, please');

let result = firstName + ' ' + secondName + ' ' + age;

alert(result);

//task 2
let numbers = '48932';
let currentNumbers = `${numbers[0]} ${numbers[1]} ${numbers[2]} ${numbers[3]} ${numbers[4]}`;

console.log(currentNumbers);