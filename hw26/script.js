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

Array.prototype.heroesRender = function(folderName) {
    dcHeroes.heroesRender('dc');
    marvelHeroes.heroesRender('marvel');
}

// Create table header
    function tableHeroes() {
    for (let key in array)
        return document.write(`
                <tr>
                    <td>key[]</td>
                <td>
                    <img src="images/marvel/thor.svg"></td>
                </tr>`)
    }
    tableHeroes();


//Note: This solution modifies the Array prototype, which is generally not recommended in production code. It's better to create a separate utility function for this purpose. However, for the sake of simplicity in this example, I've used this approach.