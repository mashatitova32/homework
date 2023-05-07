arrLength = 0;
arrLength = parseInt(prompt('Enter array length'));

arr = [];
console.log('Emply array', arr);

for(i = 0; i < arrLength; i++){
    elementArr = prompt(`Enter #${i + 1} element of array`);
    arr.push(elementArr);
}

console.log('Filled array', arr);

arr.sort((a,b) => a - b);

console.log('Sorted array', arr);
console.log('Removed item from array', arr.slice(1,4));