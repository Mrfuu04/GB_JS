// Создать функцию, генерирующую шахматную доску. При этом можно использовать 
// любые html-теги по своему желанию. Доска должна быть разлинована 
// соответствующим образом, т.е. чередовать черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, 
// столбцы – латинскими буквами A, B, C, D, E, F, G, H. 
// (использовать createElement / appendChild)




function makeChessArea() {
    const table = document.createElement('div');

    function makeCells() {
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        let res = '<table>';
        let resNums = '<table><tr>';

        for (let i = 0; i < 8; i++) {
            resNums += `<th class="nums">${i + 1}</th>`;
            res += `<tr><th class="letters">${letters[i]}</th>`;
            for (let j = 0; j < 8; j++) {
                if (i % 2 == 0 && j % 2 == 0) res += `<td id=black></td>`;
                else if (i % 2 == 0 && j % 2 != 0) res += `<td id=white></td>`;
                if (i % 2 != 0 && j % 2 == 0) res += `<td id=white></td>`;
                else if (i % 2 != 0 && j % 2 != 0) res += `<td id=black></td>`;
            }
        }
        res += '</tr>'
        table.innerHTML = resNums + '</tr></table>';
        table.innerHTML += res + '</table>';
        document.body.appendChild(table);
    }

    function insertStyles() {
        const parentElem = document.querySelector('head');
        let styleElem = `td {border: 0.2px solid black; width: 50px; height: 50px;
                            } table { border-collapse: collapse; } .nums {padding-left:10px;}
                            .nums {padding-left: 45px; padding-top:50px}
                            .letters {padding: 0px 15px 0px 0px;}
                            #black {background-color: #996663;} 
                            #white {background-color: #ccffcc}`;


        parentElem.innerHTML += '<style>' + styleElem + '</style > ';
    }



    insertStyles();
    makeCells();
}


makeChessArea();
