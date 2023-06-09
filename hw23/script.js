//Для понедельника и вторника элементы массива должны выполнять следующие методы:
//
// Переведите время, затраченное на выполнение задачи, в часы из минут.
// Оставьте только те задачи, на выполнение которых требуется более 2 часов.
// Умножьте результат на почасовую ставку (сумму) и добавьте этот результат в качестве третьего элемента массива.
// Визуализация в html-таблицу с помощью этого примера:

const amount = 100;
const monday = [
    ['Write a tutorial',180],
    ['Some web development',120]
];
const tuesday = [
    ['Keep writing that tutorial',240],
    ['Some more web development',360],
    ['A whole lot of nothing',240]
];

let concatDay = monday.concat(tuesday)
    .map(function (item) {
        item[1] = item[1] / 60;
        return item;
    })
    .filter(function (item) {
        return item[1] > 2;
    })
    .map(function (item) {
        item.push(item[1] * amount);
        return item;
    })
    .map(function (item) {
        return `<tr>
                <td>Task name: ${item[0]}</td>
                <td>Taks duration: ${item[1]} hours</td>
                <td>Task amount: $${item[2]}</td>
            </tr>`;
    })
    .join('');

document.write(`
<table> ${concatDay} </table>
`);






