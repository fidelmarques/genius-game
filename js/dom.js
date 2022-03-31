/*         INICIANDO CONTRUÇÃO DE LAYOUT NO DOM.       */

//-------------------container Principal------------------
const container = document.querySelector('.container');

//---------------------container Game---------------------
const sectionGame = document.createElement('section');
sectionGame.classList.add('container-game');

//----------------div menu principal central--------------
const menuGame = document.createElement('div');
const menuTexto = document.createElement('div');
const boasVindas = document.createElement('p');
boasVindas.innerText = 'Seja bem vindo';
const jogadas = document.createElement('p');
jogadas.innerText = 'Clique na sequência de cores';
//--------------classes menu principal central------------
menuGame.classList.add('menu-game');
menuTexto.classList.add('menu-texto');
boasVindas.classList.add('bem-vindo');
jogadas.classList.add('jogada');


/* --------------------div painel do Menu----------------- */
const painelMenu = document.createElement('div');
//--------------------------------------------------------
const containerJogadas = document.createElement('div');
const labelJogadas = document.createElement('label');
labelJogadas.innerText = 'Acertos'
const contadorJogadas = document.createElement('div');
contadorJogadas.innerText = '0'
//--------------------------------------------------------
const containerRecords = document.createElement('div');
const labelRecords = document.createElement('label');
labelRecords.innerText = 'Record';
const contadorRecords = document.createElement('div');
contadorRecords.innerText = '0'
//--------------------------------------------------------
const containerBtn = document.createElement('div');
const startGame = document.createElement('button')
const resetGame = document.createElement('button');
/* ---------------Classes div painel do menu-------------- */
painelMenu.classList.add('painel-menu');
containerJogadas.classList.add('container-jogadas');
contadorJogadas.classList.add('jogadas');
//--------------------------------------------------------
containerRecords.classList.add('container-records');
contadorRecords.classList.add('records');
containerBtn.classList.add('container-btn');
//--------------------------------------------------------
startGame.classList.add('btn-start');
startGame.innerText = 'Iniciar'
resetGame.classList.add('btn-reset');
resetGame.innerText = 'Reset'


/* ------------------div botões superiores---------------- */
const topColors = document.createElement('div');
topColors.classList.add('top-cores');
const btnVerde = document.createElement('div');
const btnVermelho = document.createElement('div');
//-------Classes e id's botões coloridos superiores---------
btnVerde.classList.add('desativado');
btnVerde.id = 'box1';
btnVermelho.classList.add('desativado');
btnVermelho.id = 'box2';

/*------------------div botões inferiores------------------ */
const bottomColors = document.createElement('div');
bottomColors.classList.add('bottom-cores');
const btnAmarelo = document.createElement('div');
const btnAzul = document.createElement('div');
//-------Classes e id's botões coloridos inferiores---------
btnAmarelo.classList.add('desativado');
btnAmarelo.id = 'box3';
btnAzul.classList.add('desativado');
btnAzul.id = 'box4';

/*------------------ARRAY DE BOTÕES------------------ */
const buttons = [btnVerde, btnVermelho, btnAmarelo, btnAzul];


/*-------------ATRIBUINDO ELEMENTOS APPENDCHILD------------- */

//-----------------montando botões coloridos----------------
sectionGame.appendChild(topColors);
sectionGame.appendChild(bottomColors);
topColors.appendChild(btnVerde);
topColors.appendChild(btnVermelho);
bottomColors.appendChild(btnAmarelo);
bottomColors.appendChild(btnAzul);

//-----------------montando Menu de jogadas-----------------
container.appendChild(sectionGame);
sectionGame.appendChild(menuGame);
menuTexto.appendChild(boasVindas);
menuTexto.appendChild(jogadas);
menuGame.appendChild(menuTexto);
menuGame.appendChild(painelMenu);
painelMenu.appendChild(containerJogadas)
containerJogadas.appendChild(labelJogadas);
containerJogadas.appendChild(contadorJogadas);
painelMenu.appendChild(containerRecords);
painelMenu.appendChild(containerBtn)
containerBtn.appendChild(startGame);

