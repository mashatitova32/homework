//Мережа фастфудів пропонує кілька видів гамбургерів:
//
// маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).
//
//
// Гамбургер може бути з одним із декількох видів начинок:
//
// сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).
//
//
// Можна додати добавки:
//
// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).
//
//
// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.
//
// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)
//
//
//
// Приклад роботи коду:
//// маленький гамбургер з начинкою з сиру
// var hamburger = new Hamburger(Hamburger .SIZE_SMALL, Hamburger.STUFFING_CHEESE);
//
// // добавка з майонезу
// hamburger.addTopping(Hamburger.TOPPING_MAYO);
//
// // запитаємо скільки там калорій
// console.log(“Calories: “ + hamburger.calculate ());
//
// // скільки коштує
// console.log("Price: “ + hamburger.calculatePrice());
//
// // я тут передумав і вирішив додати ще приправу
// hamburger.addTopping(Hamburger .TOPPING_SAUCE);
//
// // А скільки тепер коштує?
// console.log("Price with sauce: “ + hamburger.calculatePrice());

class Hamburger{
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping){
        this.toppings.push(topping);
    }

    calculatePrice(){
        const sizePrice = this.size.price;
        const stuffingPrice = this.stuffing.price;
        const toppingPrice = this.toppings.reduce((total, topping) => total + topping.price, 0);
        return sizePrice + stuffingPrice + toppingPrice;
    }

    calculateCalories(){
        const sizeCalories = this.size.calories;
        const stuffingCalories = this.stuffing.calories;
        const toppingCalories = this.toppings.reduce((total, topping) => total + topping.calories, 0);
        return sizeCalories + stuffingCalories + toppingCalories;
    }
}

const SIZE_SMALL = {price: 50, calories: 20};
const BIG_SIZE = {price: 100, calories: 40};
const STUFFING_CHEESE = {price: 10, calories: 20};
const STUFFING_SALAD = {price: 20, calories: 5};
const STUFFING_POTATO = {price: 15, calories: 10};
const TOPPING_SPICE = {price: 15, calories: 0};
const TOPPING_MAYO = {price: 20, calories: 5};

const hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);
hamburger.addTopping(TOPPING_SPICE);
hamburger.addTopping(TOPPING_MAYO);
console.log(hamburger.calculatePrice());
console.log(hamburger.calculateCalories());