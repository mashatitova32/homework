//Створити клас SuperMath.
//
// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.
//
// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.
//
// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.
//p = new SuperMath();
// p.check(obj); // --> no p.input() -> 3 prompt -> рахує

class SuperMath {
	check(obj) {
		const {X, Y, znak} = obj;
		if (['+', '-', '*', '/', '%'].includes(znak)) {
			const configuration = prompt(`Do you want to perform ${X} ${znak} ${Y}? Type 'yes' to confirm.`);
			if (configuration === 'yes') {
				switch (znak) {
					case '+':
						return X + Y;
					case '-':
						return X - Y;
					case '*':
						return X * Y;
					case '/':
						return X / Y;
					case '%':
						return X % Y;
				}
			} else {
				return this.input();
			}
		} else {
			alert('Invalid operator!');
			return this.input();
		}
	}

	input() {
		const X = +prompt('Enter a number for X:');
		const Y = +prompt('Enter a number for X:');
		const znak = prompt('Enter for operation (+, -, *, /, %):');
		return this.check({X: Number(X), Y: Number(Y), znak});
	}
}

const result = new SuperMath();
console.log(result.input());