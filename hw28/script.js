//Задача:
//
// Создайте функцию-конструкцию Product, у которой есть такие аргументы: категория, тип, цена и назначьте ее полям объекта с соответствующими ключами.
// Каждый объект, созданный функцией-конструктором, должен иметь возможность рендеринга функции, эта функция должна возвращать строку вида:
//Все продукты должны создаваться функцией-конструктором Product и для всех мы вызываем метод render().
// В итоге необходимо отрисовать на странице таблицу с выводом данных по всем товарам.

let kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        type: 'desktop',
        price: [100,1000]
    },
    {
        type: 'laptop',
        price: [50,1500]
    },
    {
        type: 'smartphone',
        price: [80,2000]
    },
    {
        type: 'tablet',
        price: [20,1300]
    }
];

let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];

function Products(){}


