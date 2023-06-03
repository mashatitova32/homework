// Данный:

// Три товара из категории овощи:

// капуста = 8;
// авокадо = 30;
// помидор = 10;

// Три товара из категории фрукты:

// виноград = 20;
// малиновый = 25;
// кокос = 50;


// Задача: в зависимости от сезона, который выберет пользователь (зима или лето), категории (овощи или фрукты), товаров из выбранной категории (овощи: капуста, авокадо, помидор или фрукты: виноград, малина, кокос) и количества выбранного товара – рассчитать окончательную цену и отобразить полную информацию о выбранном товаре в формате HTML.

// Процедура:

// Спросите пользователя, в какое время года он совершает покупку: зима или лето.
// Если пользователь входит в зиму, окончательная цена должна быть умножена на 2.
// Если пользователь переходит на лето, окончательная цена должна быть умножена на 0,8.
// ВАЖНЫЙ:
// Продолжайте спрашивать пользователя о сезоне, пока слово не будет введено правильно: «зима» или «лето».
// Вводимое значение может быть в любом регистре и с любым количеством пробелов до/после/внутри слова.
// Спросите пользователя о категории, из которой он может выбрать продукт на следующем шаге: овощи или фрукты.
// ВАЖНЫЙ:
// Продолжайте спрашивать категорию пользователя, пока слово не будет введено правильно: «овощи» или «фрукты».
// Вводимое значение может быть в любом регистре и с любым количеством пробелов до/после/внутри слова.
// Спрашивайте у пользователя товары, которые зависят от ранее выбранной категории.
// для овощей пользователь может ввести: капусту, авокадо или помидор.
// для фруктов пользователь может ввести: виноград, малину или кокос.
// ВАЖНЫЙ:
// Продолжайте спрашивать пользователя о товарах, пока слово не будет введено правильно (один из трех типов).
// Вводимое значение может быть в любом регистре и с любым количеством пробелов до/после/внутри слова.
// Спросите у пользователя количество продуктов, которые были выбраны ранее.
// ВАЖНЫЙ:
// Значение должно быть больше 1.
// Вывести в html информацию о покупке с конечной ценой. Например:
// <div class="product" align="center">
//    <img src="images/vegetables/cabbage.svg" alt="капуста" width="100" height="100">
//    <p>Выбранный продукт: <b>капуста</b></p>
//    <p>Количество капусты: <b>3</b></p>
//    <p>Выбранный период: <b>зима</b></p>
//    <p>Выбранная категория: <b>овощи</b></p>
//    <p>Окончательная сумма: <b>48 грн</b></p>
// </div>
let vegetablesList = ['cabbage', 'avocado', 'tomato'];
let fruitsList = ['grapes', 'raspberry', 'coconut'];
let vegetablesPriceList = [8, 30, 10];
let fruitsPriceList = [20, 25, 50];

do {
    season = prompt(`Winter or summer period?`, 'winter').trim().toLowerCase();
} while (!(season === 'winter' || season === 'summer'));

console.log(season);

if (season === 'winter') {
    coefficient = 2;
} else if (season === 'summer') {
    coefficient = 0.8;
}

do {
    category = prompt('Choose category in which you want to buy products: vegetables or fruits', 'fruits').trim().toLowerCase();
} while (!(category === 'vegetables' || category === 'fruits'));


switch (category) {
    case 'vegetables':
        do {
            vegetables = prompt(`Choose products from category vegetables: cabbage, avocado or tomato`, 'tomato').trim().toLowerCase();
            vegetableKey = vegetablesList.indexOf(vegetables)
            productPrice = vegetablesPriceList[vegetableKey];
        } while (!(vegetables === 'cabbage' || vegetables === 'avocado' || vegetables === 'tomato'));
        console.log(vegetables);
        break;
    case 'fruits':
        do {
            fruits = prompt('Choose product from category fruits: grapes or raspberry or coconut.', 'coconut').trim().toLowerCase();
            productPrice = fruitsPriceList[fruitsList.indexOf(fruits)];
        } while (!(fruits === 'grapes' || fruits === 'raspberry' || fruits === 'coconut'));
        console.log(fruits);
        break;
}
console.log(category);

do {
    count = prompt(`Enter count of ${category}`, 5).trim().toLowerCase();
} while (count < 1 && isNaN(count));

console.log(count);

let finalPrice = productPrice * coefficient * count;
console.log(finalPrice);

if (category === 'vegetables') {
    document.write(
        `<div className="product" align="center">
        <img src="img/vegetables/${vegetables}.svg" alt="vegetables" width="100" height="100">
            <p>Selected product: <b>${vegetables}</b></p>
            <p>Count of ${vegetables}: <b>${count}</b></p>
            <p>Selected period: <b>${season}</b></p>
            <p>Selected category: <b>vegetables</b></p>
            <p>Final sum: <b>${finalPrice} UAH</b></p>
    </div>`)
} else if (category === 'fruits') {
    document.write(
        `<div className="product" align="center">
        <img src="img/fruits/${fruits}.svg" alt="fruits" width="100" height="100">
            <p>Selected product: <b>${fruits}</b></p>
            <p>Count of ${fruits}: <b>${count}</b></p>
            <p>Selected period: <b>${season}</b></p>
            <p>Selected category: <b>fruits</b></p>
            <p>Final sum: <b>${finalPrice} UAH</b></p>
    </div>`)
}




