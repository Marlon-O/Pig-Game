var scores, currentPlayer, roundScore, playContinue;

init();

var diceDOM = document.querySelector('.dice');

diceDOM.style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click', function () {
    if (playContinue) {
        var dice = Math.floor(Math.random() *6) +1;

        roundScore += dice;

        diceDOM.src = './dices/dice-' +dice +'.png';
        diceDOM.style.display = 'block';

        if (dice !== 1) {
            document.querySelector('#current--' +currentPlayer).textContent = roundScore;
        } else {
            changePlayer();
        }
    }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
    if (playContinue) {
        scores[currentPlayer] += roundScore;
        document.querySelector('#score--' +currentPlayer).textContent = scores[currentPlayer];
    
        if (scores[currentPlayer] >= 100) {
            document.querySelector('.player--' +currentPlayer).classList.add('player--winner');
            playContinue = false;
        } else {
            changePlayer();
        }
    }
});


document.querySelector('.btn--new').addEventListener('click', function () {
    init();
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--' +currentPlayer).classList.add('player--active');
    document.querySelector('#score--0').textContent = 0;
    document.querySelector('#score--1').textContent = 0;
    document.querySelector('#current--0').textContent = 0;
    document.querySelector('#current--1').textContent = 0;
});


function changePlayer () {
    document.querySelector('.player--' +currentPlayer).classList.remove('player--active');
    document.querySelector('#current--' +currentPlayer).textContent = 0;
    currentPlayer == 0? currentPlayer = 1: currentPlayer = 0;
    document.querySelector('.player--' +currentPlayer).classList.add('player--active');
    roundScore = 0;
    diceDOM.style.display = 'none';
}

function init () {
    scores = [0,0], currentPlayer = 0, roundScore = 0, playContinue = true;
}
