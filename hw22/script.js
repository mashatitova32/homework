//Реалізувати рекурсивну функцію, яка зводить число в ступінь.
//
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функцію pow (num, degree).

function pow(num, degree) {
    if (degree === 1) {
        return num;
    } else {
        return num * pow(num, degree - 1);
    }
}

console.log(pow(6, 2));
console.log(pow(5, 3));
console.log(pow(8, 6));