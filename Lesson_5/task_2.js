// Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 2.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».







// Создание разметки
function makeHTML() {
    const cardHTML = `<div class="card">
    <img class="card__img" src="task_2_card.png" alt="null">
    </div>`
    const buttonsHTML = `<div class="buttons">
    <a href="#" class="card__add">Добавить</a>
    <a href="#" class="card__remove">Удалить</a>
    </div>`
    const TEST = `<div class="tool"><p class="tool__item">Корзина сейчас пуста</p></div>`;

    const container = document.querySelector('.container');
    const mainer_select = document.querySelector('body');

    container.insertAdjacentHTML('afterbegin', cardHTML);
    container.insertAdjacentHTML('beforeend', buttonsHTML);
    mainer_select.insertAdjacentHTML('beforeend', TEST);


};


// Создание стилей
function makeStyles() {
    const styleHTML = `
    .tool__item {
        font-family: cursive;
        padding-left: 20px;
    }

    .container {
        display: flex;
        font-family: cursive;
        padding: 15px;
    }

    .card {
        padding-right: 40px;
    }

    .card__img {
        height: 50px;
        width: 50px;
        padding: 5px;
    }

    .card__add,
    .card__remove
    {
        padding-right: 20px;
        text-decoration: none;
        color: black;
    }

    .card__add:active,
    .card__remove:active
    {
        color: red;
    }
    `

    const styleHead = document.querySelector('style');
    styleHead.insertAdjacentHTML('afterbegin', styleHTML);
}

makeHTML();
makeStyles();

// Конструктор корзины
function makeCard() {
    this.basket = [];
    this.pushInto = function (name, price, count) {
        this.basket.push({ name, price, count });
    };
    this.countBasketPrice = function () {
        let result = 0;
        this.basket.forEach((item) => result += item.price * item.count);
        return result;
    };
    this.checkEmpty = function () {
        let res = this.basket.length > 0 ? false : true;
        return res;
    }
    this.removeFromBasket = function () {
        this.basket.pop();
    }
    this.whatInBasket = function () {
        const res = `В корзине: ${Card.count} товаров на сумму ${Card.countBasketPrice()}`;
        return res;
    }
}

// Корзина
function emptyChecker() {
    const mainer = document.querySelector('.tool__item');
    if (Card.checkEmpty()) {
        mainer.innerHTML = 'Корзина сейчас пуста';
    }
    else mainer.innerHTML = `В корзине: ${Card.basket.length} товаров на сумму ${Card.countBasketPrice()}`;
}


const Card = new makeCard();
function pushInto(name, price, count) {
    Card.pushInto('test', 100, 1);
    emptyChecker();
}

function removeFromBasket() {
    Card.removeFromBasket();
    emptyChecker();
}


// Обработчик событий
const addBtn = document.querySelector('.card__add');
const removeBtn = document.querySelector('.card__remove');
const basketBtn = document.querySelector('.card__title');

addBtn.addEventListener("click", pushInto);
removeBtn.addEventListener("click", removeFromBasket);


