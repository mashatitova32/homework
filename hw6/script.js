let age = prompt('Напишіть свій рік народження');
let city = prompt('В якому місті ви живете?');
let sport = prompt('Який ваш улюблений вид спорту?');

let get_current_age = function (date) {
    return new Date().getFullYear() - date;
}

if (age === null) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження.')
} else if (age > null) {
    alert(get_current_age(age));
}

switch (city) {
    case null:
        alert('Шкода, що Ви не захотіли ввести свіє місто.');
        break;
    case 'Київ':
        alert('Ти  живеш у столиці України');
        break;
    case 'Лондон':
        alert('Ти  живеш у столиці Англії');
        break;
    case 'Вашингтон':
        alert('Ти  живеш у столиці США');
        break;
    default:
        alert(`Ти живеш у місті ${city}`);
        break;
}

switch (sport) {
    case null:
        alert('Шкода, що Ви не захотіли ввести свій улюблений вид спорту.');
        break;
    case 'Бокс':
        alert('Круто, хочеш стати Олександром Усиком?');
        break;
    case 'Плавання':
        alert('Круто, хочеш стати Майклом Фред Фелпсом II?');
        break;
    case 'Карате':
        alert('Круто, хочеш стати Микио Уэда?');
        break;
    default:
        alert('Чудово!');
        break;
}