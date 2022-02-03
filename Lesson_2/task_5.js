// Задание:
// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

function validateNums(x, y) {
    let res = ''
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return 1;
    }
}

let message = 'Введите число!'

function getSum(x, y) {
    if (validateNums(x, y)) {
        return message
    };
    return x + y;
}

function getDiv(x, y) {
    if (validateNums(x, y)) {
        return message
    };
    return x / y;
}

function getMul(x, y) {
    if (validateNums(x, y)) {
        return message
    };
    return x * y;
}

function getSub(x, y) {
    if (validateNums(x, y)) {
        return message
    };
    return x - y;
}

let a = 10, b = 5;

console.log(getSum(a, b))
console.log(getDiv(a, b))
console.log(getMul(a, b))
console.log(getSub(a, b))