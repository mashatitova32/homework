// Рендеринг игровых карт, который содержит:
//
//     карты номиналом 2-10 всех мастей
// карты валет, дама, король всех мастей
// карты тузов всех мастей
//
//
// В модели используются:
//
//     Семейство шрифтов https://fonts.google.com/specimen/Nerko+One
//     Зеленый цвет стола #55aa55
// Черный цвет текста #353c4d
// Иконки для 4 полосок и валета, дамы, короля в архиве images.zip
//
//
// Все теги должны отображаться с помощью js.
//
//     Внешний вид задачи НЕ важен, важен только JS-код))

// Define the card dimensions
const cardWidth = 100;
const cardHeight = 150;

// Create a canvas element
const canvas = document.createElement('canvas');
canvas.width = cardWidth;
canvas.height = cardHeight;
document.body.appendChild(canvas);

// Get the canvas 2D context
const ctx = canvas.getContext('2d');

// Define the stripe pattern
const stripePattern = [
    { x: 0, y: cardHeight / 2 },
    { x: cardWidth, y: cardHeight / 2 }
];

// Render the cards with denominations 2-10
for (let i = 2; i <= 10; i++) {
    ctx.clearRect(0, 0, cardWidth, cardHeight);
    drawStripes();
    drawDenomination(i);
    saveCardImage(i);
}

// Render the cards with denominations jack, queen, king
const royalDenominations = ['J', 'Q', 'K'];
for (const denomination of royalDenominations) {
    ctx.clearRect(0, 0, cardWidth, cardHeight);
    drawStripes();
    drawDenomination(denomination);
    saveCardImage(denomination);
}

// Render the cards of aces of all suits
const suits = ['♠', '♣', '♦', '♥'];
for (const suit of suits) {
    ctx.clearRect(0, 0, cardWidth, cardHeight);
    drawStripes();
    drawDenomination('A');
    drawSuit(suit);
    saveCardImage(`A${suit}`);
}

// Function to draw the stripes
function drawStripes() {
    ctx.fillStyle = 'gray';
    ctx.beginPath();
    ctx.moveTo(stripePattern[0].x, stripePattern[0].y);
    for (let i = 1; i < stripePattern.length; i++) {
        ctx.lineTo(stripePattern[i].x, stripePattern[i].y);
    }
    ctx.closePath();
    ctx.fill();
}

// Function to draw the card denomination
function drawDenomination(denomination) {
    ctx.fillStyle = 'black';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(denomination, cardWidth / 2, cardHeight / 2);
}

// Function to draw the card suit
function drawSuit(suit) {
    ctx.fillStyle = 'black';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(suit, cardWidth / 2, cardHeight - 20);
}

// Function to save the card image
function saveCardImage(filename) {
    const cardImage = new Image();
    cardImage.src = canvas.toDataURL('image/png');
    cardImage.onload = function() {
        // Save the image or perform any other desired operation
        // For example, you can append the image to the document body
        document.body.appendChild(cardImage);
    };
}