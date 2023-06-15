//Створити клас SuperMath.
//
// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.
//
// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
//
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
//p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує
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

const cosmeticsProducts = [
	{
		type: 'blush',
		price: 10
	},
	{
		type: 'perfume',
		price: 25
	}
];


kitchenProducts.renderProducts("kitchen");
cosmeticsProducts.renderProducts("cosmetics");
deviceProducts.renderProducts("devices");