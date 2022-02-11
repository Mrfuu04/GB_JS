// Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.



function foo() {
    return {
        basket: [],
        pushInto(name, price, count) {
            this.basket.push([name, price, count]);
        },
        countBasketPrice() {
            this.result = 0;
            this.basket.forEach((item) => this.result += item[1] * item[2]);
            return this.result;
        }
    }
}
