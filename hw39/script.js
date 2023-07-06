//Створити програму для відображення результатів голосування. З наступними умовами:
//
// Як варіанти відповіді - смайлики. За замовчуванням, 5шт.
// Виведення даних - смайлики в один рядок, під ними - кількість тих, хто проголосував за кожен смайл.
// При натисканні на смайл - під ним змінюється значення лічильника.
// Реалізувати таким чином, щоб додавання нових варіантів відповіді не вело до додавання нових функцій.

const options = ['😄', '😊', '😐', '🙁', '😔'];
const counters = [0, 0, 0, 0, 0];

function updateResult() {
    let votingResult = document.getElementById('voting-result');
    votingResult.innerHTML = '';

    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        let count = counters[i];

        let optionElement = document.createElement('div');
        optionElement.textContent = option;

        let countElement = document.createElement('span');
        countElement.textContent = count;

        optionElement.appendChild(countElement);
        votingResult.appendChild(optionElement);

        optionElement.addEventListener('click', function () {
            vote(i);
        })
    }
}

function vote(index) {
    counters[index]++;
    updateResult();
}

updateResult();

