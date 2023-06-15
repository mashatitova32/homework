//Задача:
//
// Создайте функцию-конструкцию Product, у которой есть такие аргументы: категория, тип, цена и назначьте ее полям объекта с соответствующими ключами.
// Каждый объект, созданный функцией-конструктором, должен иметь возможность рендеринга функции, эта функция должна возвращать строку вида:
//Все продукты должны создаваться функцией-конструктором Product и для всех мы вызываем метод render().
// В итоге необходимо отрисовать на странице таблицу с выводом данных по всем товарам.

let kitchenProducts = [
    {
        category: 'kitchen',
        type: 'grater',
        price: 10
    },
    {
        category: 'kitchen',
        type: 'pastry-bag',
        price: 25
    },
    {
        category: 'kitchen',
        type: 'scale',
        price: 5
    },
    {
        category: 'kitchen',
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        category: 'devices',
        type: 'desktop',
        price: [100,1000]
    },
    {
        category: 'devices',
        type: 'laptop',
        price: [50,1500]
    },
    {
        category: 'devices',
        type: 'smartphone',
        price: [80,2000]
    },
    {
        category: 'devices',
        type: 'tablet',
        price: [20,1300]
    }
];

let cosmeticsProducts = [
    {
        category: 'cosmetics',
        type: 'blush',
        price: 100
    },
    {
        category: 'cosmetics',
        type: 'eyeshadow',
        price: 50
    },
    {
        category: 'cosmetics',
        type: 'lipstick',
        price: 80
    },
    {
        category: 'cosmetics',
        type: 'nail-polish',
        price: 200
    },
    {
        category: 'cosmetics',
        type: 'perfume',
        price: 300,
    }
];

function Product(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
    this.render = function () {
        let imgSrc = `images/${this.category}/${this.type}.svg`;
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

let kitchen = kitchenProducts.map(function(item) {
    return new Product(item.category, item.type, item.price);
});

let devices = devicesProducts.map(function(item) {
    return new Product(item.category, item.type, item.price);
});

let cosmetics = cosmeticsProducts.map(function(item) {
    return new Product(item.category, item.type, item.price);
});

let allProducts = [...kitchen, ...devices, ...cosmetics];

allProducts.forEach(function(product) {
    document.write(`
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                ${product.render()}
            </tbody>
        </table>
    `);
});


