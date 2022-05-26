let fields = [];

let gameOver = false;
let currentShape = 'cross';


//////////////  Fügt die Elemente Kreis und X durch anklicken, dem Tic Tac Toe Feld hinzu  //////////////
function fillShape(id) {

    if (!fields[id] && !gameOver) {
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.remove('playerInactive');
            document.getElementById('player-2').classList.add('playerInactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.add('playerInactive');
            document.getElementById('player-2').classList.remove('playerInactive');

        }
        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin();
    }
}


//////////////  Entfernt die d-none-Klasse für den Kreis bzw. das X, durch anklicken   //////////////
function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }

    }
}


//////////////  Gewiner durch if-abfragen ermitteln  //////////////
function checkForWin() {
    let winner;
    //////////////  Gewiner waagerecht  /////////////
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)'

    }

    //////////////  Gewiner waagerecht  /////////////
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)'
    }

    //////////////  Gewiner waagerecht  /////////////
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)'


    }

    //////////////  Gewiner senkrecht  /////////////
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'scaleX(1) rotate(90deg)'

    }

    //////////////  Gewiner senkrecht  ///////////// 
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'scaleX(1) rotate(90deg)'
    }

    //////////////  Gewiner senkrecht  /////////////
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'scaleX(1) rotate(90deg)'

    }

    //////////////  Gewiner diagonal  /////////////
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'scaleX(1) rotate(45deg)'

    }

    //////////////  Gewiner diagonal  /////////////
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'scaleX(1) rotate(-45deg)'

    }

    if (winner) {
        console.log('Gewonnen:', winner);
        gameOver = true;
        setTimeout(function () {
            document.getElementById('gameOver').classList.remove('d-none');
            document.getElementById('button').classList.remove('d-none');

        }, 1000);


    }

}


function restartGame() {
    gameOver = false;
    fields = [];
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('button').classList.add('d-none');

    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).style.transform = 'scaleX(0)';

    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');


    }
}