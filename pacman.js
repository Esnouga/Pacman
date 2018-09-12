var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");
var btPausa = document.getElementById("btPausa");
var btNovo = document.getElementById("btNovo");
var intervalo = 200;
var relogio = null;
var relogioGhosts = null;

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
function moverPacman() {
...
	if (setaEsquerda) {
		setaEsquerda = false;
		if (px - 1 >= 0) {
			if (Cenario.mapa[py][px - 1] != Cenario.parede) {
			px--;
			}
		} 
		else if (Cenario.mapa[py][nx - 1] != Cenario.parede) {
		px = nx - 1;
		}
	}
...
...
}
function moverPacman() {
...
...
	if (setaCima) {
		setaCima = false;
		if (py - 1 >= 0) {
			if (Cenario.mapa[py - 1][px] != Cenario.parede) {
				py--;
			}
		} 
		else if (Cenario.mapa[ny - 1][px] != Cenario.parede) {
		py = ny - 1;
		}
	}
...
}
function moverPacman() {
...
...
...
	if (setaBaixo) {
		setaBaixo= false;
		if (py + 1 < ny) {
			if (Cenario.mapa[py + 1][px] != Cenario.parede) {
				py++;
			}
		} 
		else if (Cenario.mapa[0][px] != Cenario.parede) {
		py = 0;
		}
	}
}
function moverGhosts() {
	for (i = 0; i < ghosts.length; i++) {
		ghosts[i].mover();
	}
}
	
function pausar() {
	if (relogio != null) {
		clearInterval(relogio);
		clearInterval(relogioGhosts);
		relogio = null;
		relogioGhosts = null;
		btPausa.innerHTML = "Continuar";
	} else {
		relogio = setInterval("atualizaPacman()", intervalo);
		relogioGhosts = setInterval("atualizaGhosts()",
		Math.round(intervalo * 1.2));
		btPausa.innerHTML = "Pausar";
	}
}
function atualizaGhosts() {
	moverGhosts();
	desenharTudo();
}
function atualizaPacman() {
	moverPacman();
	desenharTudo();
}
function atualizaGhosts() {
	moverGhosts();
		if (verificaColisoes()) {
			gameOver();
	}
	desenharTudo();
}
function atualizaPacman() {
	moverPacman();
		if (verificaColisoes()) {
		gameOver();
	}
	desenharTudo();
}
//Retorna verdadeiro para o caso de Game Over
function verificaColisoes() {
	//Comer ponto?
	if (Cenario.mapa[py][px] == Cenario.ponto) {
		Cenario.mapa[py][px] = Cenario.vazio;
		//Ponto do poder?
	} else if (Cenario.mapa[py][px] == Cenario.poder) {
		Cenario.mapa[py][px] = Cenario.vazio;
		for (i = 0; i < ghosts.length; i++) {
		ghosts[i].assustar();
		}
	} //Fim do else if
	//Colisão com fantasmas
	for (i = 0; i < ghosts.length; i++) {
		if (px == ghosts[i].x && py == ghosts[i].y) {
			if (ghosts[i].assustado == 0) {
			return true;
			} else {
				ghosts[i].devorado();
			}
		}
	}
	return false;
} //Fim da função
function gameOver() {
	pausar();
	btPausa.disabled = true;
	btPausa.innerHTML = "Game Over!";
}
