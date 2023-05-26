// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>
//
// Наприклад:
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
//
// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generatKey(length, characters){
    key = '';
    while(key.length < length){
        key += characters[Math.floor(Math.random() * characters.length)];
    }
    return console.log(key);
}

generatKey(16,characters);
