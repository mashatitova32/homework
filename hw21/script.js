// function deepClone(array) {
//     const newArray = [];
// //...
//     return newArray;
// }
//Array can have a lot of levels, for example:

const array = [
    [
        ['some text', true, [1,2,3,4, [10, 20]]],
    ],
    [
        [1, 2, 3, [100, 200]],
        ['name', 'age']
    ],
];

function deepClone(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            const tempClone = deepClone(arr[i]);
            newArray.push(tempClone);
        } else {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(deepClone(array));

