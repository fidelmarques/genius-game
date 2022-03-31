const gameSequence = [];
const clickedSequence = [];
let round = 0;
let score = 0;
let timing = 0;

function homepage() {
    startGame.addEventListener('click', game);
}

function game() {
    changeStartToReset();
    changeText();
    startNewRound();
    waitForClicks();
}

function changeStartToReset() {
    startGame.removeEventListener('click', game);
    startGame.addEventListener('click', () => {
        window.location.reload();
    });
    startGame.innerText = 'Reiniciar';
    contadorJogadas.innerText = '0';
}

function changeText() {
    jogadas.innerText = '';
    boasVindas.innerText = `Round ${round + 1}!`;
}

function startNewRound() {
    const randonButton = Math.floor((Math.random() * 4));
    gameSequence.push(buttons[randonButton]);
    gameSequence.forEach((value, index) => {
        setTimeout(() => {
            value.className = 'ativado';
            setTimeout(() => {
                value.className = 'desativado';
            }, 300);
        }, 700 * (index + 1));
        timing = 700*(index+1);
    });
    setTimeout(() => {
        jogadas.innerText = 'SUA VEZ!'
    }, timing+500);
}

function waitForClicks() {
    buttons.forEach((value) => {
        value.addEventListener('click', () => {
            clickedSequence.push(value);
            setTimeout(() => {
                value.className = 'ativado';
                setTimeout(() => {
                    value.className = 'desativado';
                }, 250);
            }, 0);
            checkClicks();
        });
    });
}

function checkClicks() {
    clickedSequence.forEach((value, index, array) => {
        if (value !== gameSequence[index]) {
            endGame();
            return;
        }
        if (array.length === gameSequence.length)
            nextRound();
    });
}

function endGame() {
    boasVindas.innerText = 'Fim de jogo!';
    jogadas.innerText = `Clique no botão para reiniciar`;
    
    setInterval(() => {
        buttons.forEach(elem => {
                elem.className = 'fimDeJogo';
                setTimeout(() => {
                    elem.className = 'desativado';
                }, 500);
        })
    }, 800);

    setInterval(() => {
        startGame.innerText = 'Reiniciar';
        setTimeout(() => {
            startGame.innerText = '';
        }, 500);
    }, 800);

}

function nextRound() {
    boasVindas.innerText = 'Você acertou!'
    jogadas.innerText = 'PREPARE-SE PARA O PRÓXIMO ROUND!';
    round++;
    score++;
    clickedSequence.length = 0;
    updateScore();
    setTimeout(() => {
        changeText();
        startNewRound();
    }, 3000);
}

function updateScore() {
    contadorJogadas.innerText = `${score}`;
}

homepage();