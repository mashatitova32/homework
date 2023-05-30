// Задача:
//
//     1. Из спортивного массива методом .slice() скопировать в новый массив summer_sports все массивы, относящиеся к летним видам спорта.
//
// 2. Из спортивного массива методом .slice() скопировать в новый массив winter_sports все массивы, относящиеся к зимним видам спорта.
//
// 3. Из полученных массивов: summer_sports и winter_sports вырезаем в новый массив: fruit только те массивы, которые относятся к фруктам.
//
// 4. Вывести в консоль все массивы Summer_sports, Winter_sports, Fruits как на картинке console.png.

sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];

summer_sports = sports.slice(5);
winter_sports = sports.slice(0, 5);
fruits = summer_sports.splice(2, 2).concat(winter_sports.splice(2, 1));

function consolePictures(name, array) {
    console.log(`***${name}***`);
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i][0]} : ${array[i][1]}`);
    }
    console.log('  ');
}

consolePictures('Summer sport', summer_sports);
consolePictures('Winter sport', winter_sports);
consolePictures('Fruits', fruits);


