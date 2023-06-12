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


// const humans = [
//     {
//         name: 'Masha',
//         age: 23
//     },
//     {
//         name: 'Denis',
//         age: 26
//     },
//     {
//         name: 'Julia',
//         age: 17
//     },
//     {
//         name: 'Anton',
//         age: 21
//     }
// ];
//
// const cars = [
//     {
//         brand: 'audi',
//         model: 'a5',
//         color: 'white',
//         number: 3721,
//         owner: humans[2]
//     },
//     {
//         brand: 'bmw',
//         model: 'm5',
//         color: 'black',
//         number: 1826,
//         owner: humans[3]
//     },
//     {
//         brand: 'honda',
//         model: 'accord',
//         color: 'gray',
//         number: 6391,
//         owner: humans[1]
//     },
// ]

function Human(name, age){
    this.name = name;
    this.age = age;
    this.getInfo = function (name, age){
       return console.log(`Hello! My name is ${this.name}. I'm ${this.age} years old!`);
    }
}


function Car(brand, model, color, number, owner){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.number = number;
    this.getInfo = function (brand, model, color, number, owner){
        return console.log(`Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}, Number: ${this.number}, Owner: ${this.owner}`);
    }
    this.owner = function (owner){
        if(owner.age < 18){
            console.log('Младше 18')
        } else {
            this.owner = owner;
        }
    }

}
car1.getInfo(person1);

person1.getInfo();
person2.getInfo();
person3.getInfo();
person4.getInfo();



// humans
//     .map(function (item){
//         return new Human(item.name, item.age)
//     })
//     .forEach(function (item){
//         return item.getInfo();
//     })
//
// cars
//     .map(function (item){
//         return new Car(item.brand, item.model, item.color, item.number, item.owner);
//     })
//     .forEach(function (item){
//         return item.getInfo();
//     })



// class Car {
//     constructor(brand, model, year, licensePlate) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//         this.licensePlate = licensePlate;
//     }
//
//     assignOwner(owner) {
//         if (owner.age < 18) {
//             console.log("Owner must be over 18 years old");
//         } else {
//             this.owner = owner;
//         }
//     }
//
//     displayInfo() {
//         console.log(`Brand: ${this.brand}`);
//         console.log(`Model: ${this.model}`);
//         console.log(`Year: ${this.year}`);
//         console.log(`License Plate: ${this.licensePlate}`);
//         this.owner.displayInfo();
//     }
// }
//
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     displayInfo() {
//         console.log(`Name: ${this.name}`);
//         console.log(`Age: ${this.age}`);
//     }
// }
//
// // Example usage:
// const car1 = new Car('Toyota', 'Corolla', 2010, 'ABC-1234');
// const person1 = new Person('John', 25);
//
// car1.assignOwner(person1);
// car1.displayInfo();


