// Используя PROMPT, спросите пользователя, что он хочет сделать (+ - / *). Спрашивайте до тех пор, пока он не поставит правильный ответ.
// Спросить, сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 7. Спрашивайте до тех пор, пока он не даст правильный ответ.
//     Запрос каждого операнда в user. Это должно быть ЧИСЛО. Спрашивайте до тех пор, пока он не поставит правильный ответ.
//     С помощью ALERT или console.log отобразить конечный результат действия (+-/*).

do{
    signOperation = prompt('Enter sign, please', '+ - / *');
}
while (signOperation !== '+' && signOperation !== '-' && signOperation !== '*' && signOperation !== '/');

do{
    numberOfOperands = +prompt('Enter sign, please', '+ - / *');
}
while (numberOfOperands > 1 && numberOfOperands < 7);


