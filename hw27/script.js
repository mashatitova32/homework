//1. Створити сутність "Людина".
//
// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
// 2. Створити сутність "Автомобіль".
//
// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника
//
//
// В якості демонстраціїї створити:
//
// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.
//
let person1 = new Human('Masha', 23);
let person2 = new Human('Denis', 26);
let person3 = new Human('Julia', 24);
let person4 = new Human('Anton', 17);

let car1 = new Car('audi', 'a5', 'white', 1729);
let car2 = new Car('bmw', 'm5', 'black', 8742);
let car3 = new Car('honda', 'accord', 'white', 3173);

function Human(name, age) {
    this.name = name;
    this.age = age;
    this.getInfo = function (name, age) {
        return console.log(`${this.name}, ${this.age} years`);
    }
}

function Car(brand, model, color, number, owner) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.number = number;
    this.owner = null;

    Car.prototype.assignTheOwner = function (man) {
        this.owner = man.age >= 18 ? man : console.log(`Could not assign the owner to a man under 18.`);
    }
    this.getInfo = function () {
        console.log(`Марка: ${this.brand}, Модель: ${this.model}, Колір: ${this.color}, Номерний знак: ${this.number}`);
        if (this.owner) {
            console.log(`Власник: `);
            this.owner.getInfo();
        } else {
            console.log('Цей автомобіль ще не має власника.');
        }
    }
}

car1.assignTheOwner(person1);
car1.getInfo();

car2.assignTheOwner(person4);
car2.getInfo();

car3.assignTheOwner(person2);
car3.getInfo();


