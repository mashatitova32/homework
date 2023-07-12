//Дано 3 блоки
//
// В лівій частині сторінки - перелік категорій.
// При натисканні на категорію в середній блок виводиться список товарів цієї категорії.
// Клік на товар - інформацію про товар у правому блоці.
// В інформації товару - кнопка “купити”.
// При натисканні на “купити” з'являється повідомлення, що товар куплений і повернення у вихідний стан програми ( коли відображається лише список категорій).

// const CATEGORIES = {
//     computers: [
//         {
//             'name': 'Macbook Air M2',
//             price: '1800$',
//             img: 'images/macbook.jpg',
//             description: 'MacBook - Apple M2 (8-core), 13.6" IPS glossy 2560 × 1664, RAM 8GB, Apple M2 8-core GPU, SSD 256GB, backlit keyboard, webcam, USB-C, WiFi 802.11ac, macOS',
//         },
//         {
//             'name': 'Hp Laptop',
//             price: '700$',
//             img: 'images/hp.jpg',
//             description: 'Laptop - Intel Core i5 1235U Alder Lake, 15.6" IPS matte 1920 × 1080, RAM 16GB DDR4, Intel Iris Xe Graphics, SSD 1000GB, numeric keypad, backlit keyboard, webcam, USB 3.2 Gen 1, USB-C, fingerprint reader, 3-cell battery, Windows 11 Home (NBD) (723Z9EA)',
//         },
//         {
//             'name': 'Lenovo IdeaPad 3',
//             price: '500$',
//             img: 'images/lenovo.jpg',
//             description: 'Gaming Laptop - AMD Ryzen 5 5600H, 15.6" IPS anti-glare 1920 × 1080 165 Hz, RAM 16GB DDR4, NVIDIA GeForce RTX 3050 Ti 4GB, SSD 1000GB, numeric keypad, backlit keyboard, webcam, USB 3.2 Gen 1, USB-C, Windows 11 Home',
//         },
//     ],
//     phones: [
//         {
//             'name': 'iPhone 13',
//             price: '1000$',
//             img: 'images/iPhone.jpg',
//             description: 'Mobile Phone 6,1" Super Retina XDR OLED 2532 × 1170, processor Apple A15 Bionic 6-core, RAM 4 GB, internal memory 128 GB, main camera with optical zoom 12 Mpx (f/1,6) + 12 Mpx (f/2,4), selfie camera 12 Mpx, optical stabilization, GPS, Glonass, NFC, LTE, 5G, Lightning port, single SIM + eSIM, water resistant IP68, unlocked, quick charging 20W, wireless charging 15W, battery 3240 mAh, iOS 15',
//         },
//         {
//             'name': 'Samsung Galaxy S23',
//             price: '1100$',
//             img: 'images/samsung.jpg',
//             description: 'Mobile Phone 6,1" AMOLED 2340x1080, 120Hz, processor Qualcomm Snapdragon 8 Gen 2 8-core, RAM 8 GB, internal memory 256 GB, main camera with optical zoom 50 Mpx (f/1,8) + 10 Mpx (f/2,4) + 12 Mpx (f/2,2), selfie camera 12 Mpx, optical stabilization, Glonass, NFC, LTE, 5G, USB-C, fingerprint reader in screen, Dual SIM + eSIM, water resistant IP68, unlocked, quick charging 25W, wireless charging 15W, reverse charging 4,5W, battery 3900 mAh, Android 13',
//         },
//         {
//             'name': 'Realme C55',
//             price: '300$',
//             img: 'images/realme.jpg',
//             description: 'Mobile Phone 6,72" IPS 2400 × 1080, 90Hz, processor MediaTek Helio G88 8-core, RAM 8 GB, internal memory 256 GB, main camera 64 Mpx (f/1,79) + 2 Mpx (f/2,4), selfie camera 8 Mpx, electronic stabilization, GPS, Glonass, NFC, LTE, Jack (3,5mm) and USB-C, fingerprint reader, dual SIM + memory card, unlocked, quick charging 33W, battery 5000 mAh, Android',
//         },
//     ],
//     gamerProducts: [
//         {
//             'name': 'PlayStation 5',
//             price: '700$',
//             img: 'images/ps5.jpg',
//             description: 'Game Console - home, SSD 825GB, Blu-ray (4K), possibility to play in 4K, 1 × game controller',
//         },
//         {
//             'name': 'Microsoft Xbox Series X',
//             price: '800$',
//             img: 'images/xbox.jpg',
//             description: 'Game Console - home, SSD 1024GB, Blu-ray (4K), possibility to play in 4K, 1 × game controller',
//         },
//     ],
//     homeProducts: [
//         {
//             'name': 'Table',
//             price: '200$',
//             img: 'images/table.jpg',
//             description: 'Height Adjustable Desk - without tabletop, electrically adjustable, height: 62-128cm, width: 100-170cm, 2 motors, LED touch control, memory for up to three positions, innovative 2-sensor anti-collision system, working position reminder timer, recommended tabletop size: (1100-2200) × (750-1000)mm, max. load: 125kg, 100-240V, colour: black',
//         },
//         {
//             'name': 'Chair',
//             price: '210$',
//             img: 'images/chair.jpg',
//             description: 'Gaming Chair - upholstery material: synthetic leather, synchro tilt with lock, lumbar and head support, height adjustable, with top part rotation, with forward / backward shift and with right / left shift armrests, revolving and metal construction, seat pan padding: polyurethane molding, metal base, plastic wheels, black and red colour, weight capacity: 136 kg',
//         },
//     ],
//     appliances: [
//         {
//             'name': 'Samsung fridge',
//             price: '560$',
//             img: 'images/fridge.jpg',
//             description: 'Built-in Fridge - with freezer at the bottom, energy efficiency class D, climate class SN-T, refrigerator capacity 190 l, freezer capacity 74l, optional, 3 fridge shelves, 2 freezer trays, 2 cooling circuits, none colour, special features total No Frost, automatic defrost, display, LED light, refrigerator door open indication, super cooling, super freezing, twin Cooling, holiday mode, size 177,5 × 54 × 55 cm (H × W × D)',
//         },
//         {
//             'name': 'Vacuume cleaner robot',
//             price: '500$',
//             img: 'images/cleaner.jpg',
//             description: 'Robot Vacuum for all floor types, battery type: Li-ion, operating time: 180 min, noise level: 68,5 dB, dust container volume: 0,35 l, automatic charging, shock sensor, continue cleaning after recharging, automatic emptying, vacuum multiple rooms, stairs detection sensor, preset rooms scheduled for cleaning, postponed cleaning feature and cleaning schedule, number of side brushes: 1, can climb over obstacles up to 2 cm, navigation type: LiDAR, mopping textile, water container, filter, virtual wall and waste container for vacuuming, washable filter and EPA E11 filter, colour: black',
//         },
//         {
//             'name': 'Coffee Machine Phillips',
//             price: '480$',
//             img: 'images/coffeeMachine.jpg',
//             description: 'Automatic Coffee Machine - pressure: 15 bar, hot water function, timer, prepares two cups at once and automatic shutdown, 1,8l water reservoir, 13 grinding levels, power: 1450W, width: 23,8cm, height: 35,1cm, depth: 43cm, weight: 9kg,',
//         },
//     ],
// };
//
// const categories = document.querySelectorAll('.categories');
// const main = document.querySelector('.products');
//
// categories.forEach(category => {
//     category.addEventListener('click', (e) => {
//         showProducts(category.id);
//     });
// });
//
// function showProducts(category) {
//     main.innerHTML = '';
//
//     CATEGORIES[category].forEach((product, index) => {
//         const productTitle = document.createElement('h3');
//         const productPrice = document.createElement('p');
//         const productImg = document.createElement('img');
//
//         productTitle.classList.add('product-title');
//         productPrice.classList.add('product-price');
//         productImg.classList.add('product-img');
//
//         productPrice.innerHTML = product.price;
//         productTitle.innerHTML = product.name;
//
//
//         productTitle.setAttribute('id', index);
//         productTitle.setAttribute('data-category', category);
//         productImg.setAttribute('src', product.img);
//
//         productTitle.addEventListener('click', (e) => {
//             showProductsInfo(product);
//         });
//
//         const productContainer = document.createElement('div');
//         productContainer.classList.add('product-info');
//
//         productContainer.appendChild(productImg);
//         productContainer.appendChild(productTitle);
//         productContainer.appendChild(productPrice);
//
//         main.appendChild(productContainer);
//     });
// }
//
// const productInfoContainer = document.querySelector('.info-container');
//
// function showProductsInfo(product) {
//     productInfoContainer.innerHTML = '';
//
//     const productTitle = document.createElement('h3');
//     const productPrice = document.createElement('p');
//     const productImg = document.createElement('img');
//     const productDescription = document.createElement('p');
//     const buyButton = document.createElement('button');
//
//     productTitle.classList.add('product-title');
//     productPrice.classList.add('product-price');
//     productImg.classList.add('product-img');
//     productDescription.classList.add('product-description');
//     buyButton.classList.add('buy-button');
//
//     productDescription.innerText = product.description;
//     productPrice.innerText = product.price;
//     productTitle.innerText = product.name;
//     buyButton.innerText = 'Buy product';
//
//     productImg.setAttribute('src', product.img);
//
//     const productContainer = document.createElement('div');
//     productContainer.classList.add('product-info');
//
//     productContainer.appendChild(productImg);
//     productContainer.appendChild(productTitle);
//     productContainer.appendChild(productDescription);
//     productContainer.appendChild(productPrice);
//     productContainer.appendChild(buyButton);
//
//     productInfoContainer.appendChild(productContainer);
//
//     buyButton.addEventListener('click', () => {
//         alert(`Product bought successfully! Page will be automatically reloaded.`);
//         setTimeout(() => {
//             window.location.reload();
//         }, 1000);
//     });
// }
// Функція, що відображає список товарів певної категорії
function showProducts(category) {
    let productList = document.getElementById("productList");

    // Очищаємо список перед відображенням нових товарів
    productList.innerHTML = "";

    // Заповнюємо список товарами з відповідної категорії
    if (category === "category1") {
        let products = ["Товар 1", "Товар 2", "Товар 3"];
    } else if (category === "category2") {
        let products = ["Товар 4", "Товар 5", "Товар 6"];
    } else if (category === "category3") {
        let products = ["Товар 7", "Товар 8", "Товар 9"];
    }

    for (let i = 0; i < products.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = products[i];
        li.onclick = function() { showProductInfo(this.innerHTML); };
        productList.appendChild(li);
    }
}

// Функція, що відображає інформацію про обраний товар
function showProductInfo(product) {
    let productInfo = document.getElementById("productInfo");
    productInfo.style.display = "block";

    // Відображаємо назву обраного товару
    let productName = document.createElement("h4");
    productName.innerHTML = product;
    productInfo.appendChild(productName);
}

// Функція, що купує обраний товар
function buyProduct() {
    alert("Товар куплений");

    // Повертаємо сторінку до початкового стану, де відображаються лише категорії
    let productInfo = document.getElementById("productInfo");
    productInfo.style.display = "none";
    productInfo.innerHTML = "";
}


