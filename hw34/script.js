//Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає


const textField = document.querySelector('#text-field');
const div = document.querySelector('#div-element');

// Додаємо обробник події на фокусування поля
textField.addEventListener('focus', function() {
    // Встановлюємо видимість <div> на видимий
    div.style.display = 'block';
});

// Додаємо обробник події на втрату фокусу поля
textField.addEventListener('blur', function() {
    // Встановлюємо видимість <div> на прихований
    div.style.display = 'none';
});