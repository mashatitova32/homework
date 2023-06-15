//В Array.prototype добавьте свойство с именем heroRender в значении которого находится функция.
// Эту функцию можно вызывать в любом контексте массива и в качестве ведущего аргумента эта функция должна иметь имя папки ('dc', 'marvel'), с которой будут подтягиваться иконки супергероев. Пример:
// dcHeroes.heroesRender('dc');
// marvelHeroes.heroesRender('чудо');
// Функция должна возвращать таблицу, отображающую информацию о каждом введенном объекте. Элемент Tr должен выглядеть так:
//<tr>
// 	<td>Thor</td>
// 	<td>
// 		<img src="images/marvel/thor.svg">
// 	</td>
// </tr>
//В первом элементе td отображается имя объекта.
// Во втором изображении td render путь должен иметь имя папки из аргумента, который у нас есть, когда мы вызывали функцию heroRender(). В этом примере имя папки — marvel, а вызов функции — marvelHeroes.heroesRender('marvel'); Имя изображения – это имя поля в объекте, с заменой всех пробелов и приведенное к нижнему регистру. Например, для {name: Spider Man} значки будут выглядеть следующим образом: spiderman.svg
//
//
// Пример рендера таблицы:

let marvelHeroes = [
    {
        name: "Thor"
    },
    {
        name: "Spider Man"
    }
];

let dcHeroes = [
    {
        name: "Superman"
    },
    {
        name: "Batman"
    },
    {
        name: "Deadpool"
    }
];

// Array.prototype.heroesRender = function(folderName) {
//     function tableHeroes(folderName) {
//         for (let i = 0; i < this.length; i++) {
//             const hero = this[i];
//             if (hero.folder === folderName) {
//                 return `<tr>
//                         <td>${hero.name}</td>
//                         <td>
//                             <img src="images/${folderName}/${hero.name}.svg">
//                          </td>
//                     </tr>`
//             }
//         }
//     }
// }
    Array.prototype.heroesRender = function(folderName) {
        let heroArray = this;
        let table = 'NameIcon';
        heroArray.forEach(function(hero) {
            let heroName = hero.name;
            let heroIconName = heroName.split(' ').join('').toLowerCase() + '.svg';
            table += '' + heroName + '';
        });
        table += '';
        return table;
    };




document.write(`${marvelHeroes.heroesRender('marvel')}`);
dcHeroes.heroesRender('dc');








