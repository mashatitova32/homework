//Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає


const textField = document.querySelector('#text-field');
const div = document.querySelector('#div-element');

textField.addEventListener('focus', function () {
    div.style.display = 'block';
});

textField.addEventListener('blur', function () {
    div.style.display = 'none';
});