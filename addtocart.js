let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Panadol<br>(paracetamol)',
        image: 'images/panadol.PNG',
        price: 312
    },
    {
        id: 2,
        name: 'Metformin<br>500mg',
        image: 'metformin.PNG',
        price: 200
    },
    {
        id: 3,
        name: 'Pulmonol<br>120ml',
        image: 'pulmonol.PNG',
        price: 100
    },
    {
        id: 4,
        name: 'Insulin<br>50 units',
        image: 'insulin.PNG',
        price: 2340
    },
    {
        id: 5,
        name: 'Ibrance<br>125mg',
        image: 'ibrance.PNG',
        price: 45000
    },
    {
        id: 6,
        name: 'SEVELAMER<br>800mg',
        image: 'sevelamer.PNG',
        price: 270
    },
    {
        id: 7,
        name: 'Rimona<br>10sachets',
        image: 'rimona.PNG',
        price: 700
    },
    {
        id: 8,
        name: 'Cefomin<br>40mg/5ml',
        image: 'cefomin.PNG',
        price: 300
    },
    {
        id: 9,
        name: 'Arinac<br>10x10 tablets',
        image: 'arinac.PNG',
        price: 220
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
