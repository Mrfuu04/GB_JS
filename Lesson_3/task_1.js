// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let i = 3;

console.log(2);
while (i < 100) {
    let j = 2;
    let cnt = 0;
    while (i > j) {
        if (i % j == 0) cnt++;
        j++;
    }
    if (cnt == 0) console.log(i);
    i++;
}
