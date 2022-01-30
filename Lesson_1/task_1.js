let tC = +prompt('Введите температру по цельсию: ');
let tF = parseFloat((9 / 5) * tC + 32).toFixed(2);

alert(`Температура по Фаренгейту\n${tF}`);