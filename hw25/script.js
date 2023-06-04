// Создайте объект со следующей структурой: obj = {x: 10, y: 20, inner: {x: 20, z: 30}, foo2: {k: 23, p: 13}}.
//
//     Добавьте функцию convert(obj) с аргументом obj. Функция должна возвращать объект с такой структурой:

let obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
}

function assing(object) {
    const newObj = {};
    for (let key in object) {
        if (typeof object[key] === 'object') {
            Object.assign(newObj, assing(object[key]));
        } else {
            newObj[key] = object[key];
        }
    }
    return newObj;
}

console.log(assing(obj));

