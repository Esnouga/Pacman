var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");
var btPausa = document.getElementById("btPausa");
var btNovo = document.getElementById("btNovo");

var nx = 0, ny = 0; //Número de colunas e linhas
function novoJogo() {
	Cenario.mapa = new Array();
	for (i = 0; i < cenarioCriado.length; i++) {
	Cenario.mapa.push(cenarioCriado[i].slice(0));
}
nx = Cenario.mapa[0].length;
ny = Cenario.mapa.length;
canvas.width = nx * largura;
canvas.height = ny * largura;
btPausa.disabled = false;
btPausa.innerHTML = "Iniciar";
desenharTudo();
}

//Imagens que serão desenhadas
var ponto = new Image();
ponto.onload = desenharTudo;
ponto.src = "ponto.png";
var poder = new Image();
poder.onload = desenharTudo;
poder.src = "poder.png";

function desenharTudo() {
	//Limpar a tela
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//Cenário
	ctx.fillStyle = "#9999EE";
	for (y = 0; y < ny; y++) {
		for (x = 0; x < nx; x++) {
			if (Cenario.mapa[y][x] == Cenario.parede) {
				ctx.fillRect(x * largura, y * largura, largura, largura);
			} 
			else if (Cenario.mapa[y][x] == Cenario.ponto) {
				ctx.drawImage(ponto, x * largura, y * largura, largura,largura);
			} 
			else if (Cenario.mapa[y][x] == Cenario.poder) {
				ctx.drawImage(poder, x * largura, y * largura, largura,largura);
			} 
		} 
	} 
}
– novoJogo();

var px = -1, py = -1; //Posição do PAC-MAN
function novoJogo() {
	canvas.height = ny * largura;
	for (y = 0; y < ny; y++) {
		for (x = 0; x < nx; x++) {
			if (Cenario.mapa[y][x] == Cenario.pacman) {
				px = x;
				py = y;
			}
		}
	}
	btPausa.disabled = false;
}
function desenharTudo() {
//Cenário
//...
//Pacman
	ctx.fillStyle = "#FFB00F";
	ctx.beginPath();
	ctx.arc(px * largura + (largura / 2), py * largura + (largura / 2), largura / 2, Math.PI * 2, false);
	ctx.closePath();
	ctx.fill();
}
var ghosts = new Array(); //Armazena referencias dos Ghosts
function novoJogo() {
	ghosts.length = 0;
	var nGhosts = 0;
	for (y = 0; y < ny; y++) {
		for (x = 0; x < nx; x++) {
			if (Cenario.mapa[y][x] == Cenario.pacman) {
			...
			}
			if (Cenario.mapa[y][x] == Cenario.ghost) {
				ghosts.push(new Ghost(x, y,
				Ghost.cores[nGhosts++]));
			}
		}
	}
}
function desenharTudo() {
//Cenário
//...
//Pacman
...
//Fantasmas
	for (i = 0; i < ghosts.length; i++) {
		ghosts[i].desenhar(ctx);
	}
}
document.onkeydown = onKD; //Eventos de tecla para método onKD
var setaCima = false;
var setaBaixo = false;
var setaEsquerda = false;
var setaDireita = false;
function onKD(evt) {
	if (evt.keyCode == Teclas.direita) {
	setaDireita = true;
	}
	if (evt.keyCode == Teclas.esquerda) {
	setaEsquerda = true;
	}
	if (evt.keyCode == Teclas.cima) {
	setaCima = true;
	}
	if (evt.keyCode == Teclas.baixo) {
	setaBaixo = true;
	}
}
function moverPacman() {
	if (setaDireita) {
	setaDireita = false;
	px++;
	}
	if (setaEsquerda) {
	setaEsquerda = false;
	px--;
	}
	if (setaCima) {
	setaCima = false;
	py--;
	}
	if (setaBaixo) {
	setaBaixo = false;
	py++;
	}
}
function moverPacman() {
	if (setaDireita) {
	setaDireita = false;
		if (px + 1 < nx) {
			if (Cenario.mapa[py][px + 1] != Cenario.parede) {
				px++;
			}
		} 	
		else if (Cenario.mapa[py][0] != Cenario.parede) {
			px = 0;
		}
	}
...
...
...
}
