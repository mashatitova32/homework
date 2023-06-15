//Задача:
//
// Создайте функцию-конструкцию Product, у которой есть такие аргументы: категория, тип, цена и назначьте ее полям объекта с соответствующими ключами.
// Каждый объект, созданный функцией-конструктором, должен иметь возможность рендеринга функции, эта функция должна возвращать строку вида:
//Все продукты должны создаваться функцией-конструктором Product и для всех мы вызываем метод render().
// В итоге необходимо отрисовать на странице таблицу с выводом данных по всем товарам.

// let kitchenProducts = [
//     {
//         type: 'grater',
//         price: 10
//     },
//     {
//         type: 'pastry-bag',
//         price: 25
//     },
//     {
//         type: 'scale',
//         price: 5
//     },
//     {
//         type: 'whisk',
//         price: 15
//     }
// ];
//
// let devicesProducts = [
//     {
//         type: 'desktop',
//         price: [100,1000]
//     },
//     {
//         type: 'laptop',
//         price: [50,1500]
//     },
//     {
//         type: 'smartphone',
//         price: [80,2000]
//     },
//     {
//         type: 'tablet',
//         price: [20,1300]
//     }
// ];
//
// let cosmeticsProducts = [
//     {
//         type: 'blush',
//         price: 100
//     },
//     {
//         type: 'eyeshadow',
//         price: 50
//     },
//     {
//         type: 'lipstick',
//         price: 80
//     },
//     {
//         type: 'nail-polish',
//         price: 200
//     },
//     {
//         type: 'perfume',
//         price: 300,
//     }
// ];

function Product(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
    this.render = function () {
        let imgSrc = ` images/${this.category}/${this.type}.svg`;
        let priceStr = '';
        if (Array.isArray(this.price)) {
            priceStr = `${this.price[0]}-${this.price[1]} USD`;
        } else {
            priceStr = `${this.price} USD`;
        }
        return `<tr>
                    <td><img src="${imgSrc}" alt="${this.type}" width="50" height="50"></td> 
                    <td>${this.type}</td>  
                    <td>${priceStr}</td>            
               </tr>`;
    }
}

let kitchenProducts = [
    new Product("kitchen", "grater", 10),
    new Product("kitchen", "pastry-bag", 25),
    new Product("kitchen", "scale", 5),
    new Product("kitchen", "whisk", 15)
];

let devicesProducts = [
    new Product("devices", "desktop", [100, 1000]),
    new Product("devices", "laptop", [50, 1500]),
    new Product("devices", "smartphone", [80, 2000]),
    new Product("devices", "tablet", [20, 1300])
];

let cosmeticsProducts = [
    new Product("cosmetics", "blush", 100),
    new Product("cosmetics", "eyeshadow", 50),
    new Product("cosmetics", "lipstick", 80),
    new Product("cosmetics", "nail-polish", 200),
    new Product("cosmetics", "perfume", 300)
];

let allProducts = [...kitchenProducts, ...devicesProducts, ...cosmeticsProducts];

allProducts.forEach(product => {
    document.write(`
      <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Prise</th>
            </tr>
        </thead>
        <tbody>
        ${product.render()}
        </tbody>
        </table>`)
});

//
// <table>
//<thead>
//<tr>
//<th>Image</th>
//<th>Name</th>
//<th>Prise</th>
//</tr>
//</thead>
//<tbody>
//${product.render()}
//</tbody>
//</table>\`)
