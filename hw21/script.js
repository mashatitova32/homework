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

function deepClone(){
    for(let i = 0; i < array.length; i++){
        if(Array.isArray(array[i])){
            deepClone();
        }
    }
}

