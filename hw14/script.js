
// Использование циклов, if/else, switch/case и методов .push(), .pop(), .unshift(), .shift(), .concat(), .splice(), .reverse() .join() :
//
// 1. Объединить массивы target, native, hero в один общий массив - радуга.
//
// 2. Поменял местами элементы в радужном массиве.
//
// 3. Измените/добавьте элементы радужного массива, чтобы в итоге вы получили такой массив ['Richard','Of','York','Gave','Battle','In','Vain'] ;
//
// 4. Отобразите в html массив, который вы получили на последнем шаге, как на добавленном изображении: Rainbow.png.
//
//
//
//     Семейство шрифтов, которые я использовал на изображении: Quicksand. Но можно взять любую))
//
// Не обязательно использовать все методы! Используйте именно те методы, которые помогут вам создать массив как на изображении радуга.png.

hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
colors = ['red','orange','yellow','green','blue','indigo','violet'];

rainbow = hero.concat(native).concat(destination);
//['Richard', 'Of', 'York', 'Gave', 'Battle', 'Poltava', 'In', 'Vain']  ['Richard','Of','York','Gave','Battle','In','Vain']

console.log(rainbow);

rainbow.shift();
rainbow.splice(0,0, 'Richard');
rainbow.push('Vain');
rainbow.splice(1,2,rainbow[2],rainbow[1]);
rainbow.splice(3,0,'Gave','Battle');
rainbow.splice(5,1);

console.log(rainbow);

rainbowColor = [];
for(i = 0; i < colors.length; i++){
rainbowColor.push(`<div class="wrapp">
<div class="circle ${colors[i]}"></div>
<p>${rainbow[i]}</p>
</div>`)
}

document.write(`
<div class="container">
${rainbowColor.join('')}
</div>`)