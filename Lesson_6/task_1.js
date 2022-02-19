'use strict';


const cart = {
    basket: [],
    quantity: 0,

    init() {
        this.render();
        this.clearCart()
    },

    pushInto(name, price, count) {
        this.basket.push({ name, price, count });
    },

    countBasketPrice() {
        let result = 0;
        this.basket.forEach((item) => {
            result += item.price * item.count;
        })
        return result
    },

    render() {
        const existsChecker = document.querySelector('.cart__item');
        if (existsChecker) {
            existsChecker.remove();
        }
        const selector = document.querySelector('.cart');
        if (this.checkEmpty()) {
            selector.insertAdjacentHTML('afterbegin', this.getEmptyCart() + this.getWhatInBasket());
        } else { selector.insertAdjacentHTML('afterbegin', this.getFullCart() + this.getWhatInBasket()); }
    },

    checkEmpty() {
        const res = this.basket.length > 0 ? false : true;
        return res;
    },

    getEmptyCart() {
        return `<div class="cart__item"><div class="cart__imgWrapper">
        <img class="cart__img" src="cart_img/empty_cart.jpg" alt="">
        <button class="cart__btn">Очистить корзину</button></div>
    `
    },

    getFullCart() {
        return `<div class="cart__item"><div class="cart__imgWrapper">
        <img class="cart__img" src="cart_img/full_cart.jpg" alt="">
        <button class="cart__btn">Очистить корзину</button></div>
    `
    },

    getWhatInBasket() {
        const price = this.countBasketPrice();
        if (this.basket.length === 0) return `<div class="cart__def"><p>Корзина пуста</p></div>`;
        else {
            return `<div class="cart__def"><p>В корзине: ${this.quantity} товар(ов) на сумму ${price}</p></div>`;
        }
    },

    clearCart() {
        const btnSelector = document.body.querySelector('.cart__btn');
        const defSelector = document.body.querySelector('.cart__def');
        btnSelector.addEventListener('click', () => {
            this.basket = [];
            this.quantity = 0;
            this.render();
        })
    }
}

const catalog = {
    items: [],
    cart: null,

    init(cart) {
        this.cart = cart;
        this.pushToCard();
        cart.init();
    },


    pushToCard() {
        const buttonItems = document.querySelectorAll('.item__buy')
        for (let index = 0; index < buttonItems.length; index++) {
            buttonItems[index].addEventListener('click', (event) => {
                let elem = event.target.parentNode;
                let title = elem.querySelector('h3').textContent;
                let price = elem.querySelector('.item__price').textContent;
                this.cart.pushInto(title, price, 1);
                this.cart.quantity += 1;
                this.cart.render();
                this.cart.init();
            })
        }
    },


    makeItem(img, title, price) {
        if (this.isWrapperExists()) {
            const selector = document.body.querySelector('.catalog__itemWrapper:last-child');
            if (this.isThirdItem()) {
                selector.insertAdjacentHTML("afterend", this.createHtmlWrapper(img, title, price));
            }
            else {
                selector.insertAdjacentHTML("beforeend", this.createHtml(img, title, price));
            }

        }
        else {
            const selector = document.body.querySelector('.catalog');
            selector.insertAdjacentHTML("beforeend", this.createHtmlWrapper(img, title, price));
        }
    },


    getHtmlCode(type, img, title, price) {
        if (type == 1) {
            return `<div class="item">
            <img class="item__img" src="${img}" alt="">
            <h3>${title}</h3>
            <p class="item__price">${price}</p>
            <button class="item__buy">В корзину</button>
            </div>`
        }
        else {
            return `<div class="catalog__itemWrapper"><div class="item">
            <img class="item__img" src="${img}" alt="">
            <h3>${title}</h3>
            <p class="item__price">${price}</p>
            <button class="item__buy">В корзину</button>
            </div>`
        }
    },

    createHtml(img, title, price) {
        this.items.push({ img: img, title: title, price: price })
        return this.getHtmlCode(1, img, title, price);
    },

    createHtmlWrapper(img, title, price) {
        this.items.push({ img: img, title: title, price: price })
        return this.getHtmlCode(2, img, title, price);
    },


    isWrapperExists() {
        const selector = document.querySelector('.catalog__itemWrapper');
        if (selector) return true
        else return false;
    },

    isThirdItem() {
        const childSelector = document.querySelector('.catalog__itemWrapper:last-child');
        const thirdSelector = document.querySelector('.catalog__itemWrapper:last-child .item:nth-child(3)');
        if (childSelector.lastChild === thirdSelector) return true
        else return false;
    },
}



catalog.makeItem('img/case.jpg', 'Кейс', 1500);
catalog.makeItem('img/keyboard.jpg', 'Клавиатура', 3000);
catalog.makeItem('img/monitor.jpg', 'Монитор', 9500);
catalog.makeItem('img/mouse.jpeg', 'Мышь', 500);
catalog.makeItem('img/phonejpg.jpg', 'Телефон', 350);

catalog.init(cart);
