arrLength = 0;
arrLength = parseInt(prompt('Enter array length'));

arr = [];

for(i = 0; i < arrLength; i++){
    elementArr = prompt(`Enter #${i + 1} element of array`);
    arr.push(elementArr);
}

console.log('Filled array', arr);

arr.sort((a,b) => a - b);

console.log('Sorted array', arr);

arr.splice(1,3);

console.log('Removed item from array', arr);