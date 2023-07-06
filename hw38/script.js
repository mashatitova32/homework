//На сторінці є дві кнопки. - переадресовується на інший сайт (за раніше введеним посиланням). Реалізувати перевірку на http/https. Якщо протокол не вказаний - додаємо

function checkProtocol() {
    let link = document.getElementById('link').value;
    let protocol = 'http://';

    if(!/^https?:\/\//i.test(link)){
        link = protocol + link;
    }
    window.location.href = link;
}


