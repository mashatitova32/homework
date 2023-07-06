let table = document.createElement('table');
let body = document.querySelector('body');

body.appendChild(table);

let number = 1;

for(i = 0; i < 10; i++){
    let row = document.createElement('tr');

    for(let j = 0; j < 10; j++){
        let cell = document.createElement('td');
        cell.textContent = number;
        row.appendChild(cell);
        number++;
    }
    table.appendChild(row);
}


