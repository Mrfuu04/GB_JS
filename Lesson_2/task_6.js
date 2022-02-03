//  Задание:
// Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) 
// и вернуть полученное значение (использовать switch).

function validateNums(x, y) {
    let res = ''
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return 1;
    }
}
let message = 'Введите число!'


function mathOperation(arg1, arg2, operation) {
    if (validateNums(arg1, arg2)) {
        return message
    };
    switch (operation) {
        case '+': return arg1 + arg2;
        case '-': return arg1 - arg2;
        case '/': return arg1 / arg2;
        case '*': return arg1 * arg2;
        default:
            return null;
    }
}

console.log(mathOperation(4, 3, '+'))
