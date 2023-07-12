function saveData() {
    // Отримуємо значення полів з форми
    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let birthDate = document.getElementById('birth-date').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let city = document.getElementById('city').value;
    let address = document.getElementById('address').value;
    let languages = '';
    if (document.getElementById('language1').checked) {
        languages += 'Українська, ';
    }
    if (document.getElementById('language2').checked) {
        languages += 'Англійська, ';
    }
    if (document.getElementById('language3').checked) {
        languages += 'Російська, ';
    }
    languages = languages.slice(0, -2); // Видаляємо останній кома та пробіл

    // Створюємо новий рядок для таблиці
    let newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${birthDate}</td>
    <td>${gender}</td>
    <td>${city}</td>
    <td>${address}</td>
    <td>${languages}</td>
  `;

    // Додаємо новий рядок до таблиці
    let tableBody = document.querySelector('#data-table tbody');
    tableBody.appendChild(newRow);

    // Сховати форму та показати таблицю
    document.getElementById('registration-form').style.display = 'none';
    document.getElementById('data-table').style.display = 'table';
}