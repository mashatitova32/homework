//1. Створити клас Людина.
//
// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.
// 2. Створити клас Квартира.
//
// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.
// 3. Створити клас Будинок.
//
// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.
//
//
// В якості демонстраціїї створити:
//
// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.

class Human{
    constructor(name, gender){
        this.name = name;
        this.gender = gender;
    }
}

class Apartament{
    constructor() {
        this.residents = [];
    }
    addResident(human){
        this.residents.push(human);
    }
}

class House{
    constructor(maxApartaments) {
        this.apartaments = [];
        this.maxApartaments = maxApartaments;
    }

    addApartaments(){
        if(this.apartaments.length < this.maxApartaments){
            this.apartaments.push(this.apartaments)
        } else {
            console.log('Cannot add apartment - maximum number of apartments reached.')
        }
    }
}

const person1 = new Human('Masha', 'female');
const person2 = new Human('Danil', 'male');
const person3 = new Human('Julia', 'female');
const person4 = new Human('Ilya', 'male');

const apartaments1 = new Apartament();
const apartaments2 = new Apartament();
const apartaments3 = new Apartament();
const apartaments4 = new Apartament();
const apartaments5 = new Apartament();
const apartaments6 = new Apartament();

const house1 = new House(5);

apartaments1.addResident(person1);
apartaments2.addResident(person3, person4);
apartaments5.addResident(person2);

house1.addApartaments(apartaments1);
house1.addApartaments(apartaments2);
house1.addApartaments(apartaments3);
house1.addApartaments(apartaments4);
house1.addApartaments(apartaments5);
house1.addApartaments(apartaments6);


