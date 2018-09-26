var score = 0;
var paused = true;
var canvas = document.getElementById('tela');
var ctx = canvas.getContext("2d");
var btPausa = document.getElementById("btPausa");
var btNovo = document.getElementById("btNovo");
var audioWaka = document.getElementById("waka");
var introMusic = document.getElementById("intro");
var audioPacDie = document.getElementById("pacDie");
var audioEatGhost = document.getElementById("eatGhost");
var score = 0;
var qtdPontos = 0;
var velocidadeFantasma = 1.2;
introMusic.currentTime = 0;
audioWaka.currentTime = 0;
var relogio = null;
var relogioGhosts = null;

var nx = 0, ny = 0; //Número de colunas e linhas
var pacManR = new Image();
pacManR.src = "assets/img/pacR.png";
var pacManR2 = new Image();
pacManR2.src = "assets/img/pacR2.png";

var pacManL = new Image();
pacManL.src = "assets/img/pacL.png";
var pacManL2 = new Image();
pacManL2.src = "assets/img/pacL2.png";

var pacManU = new Image();
pacManU.src = "assets/img/pacU.png";

var pacManD = new Image();
pacManD.src = "assets/img/pacD.png";
var pacManD2 = new Image();
pacManD2.src = "assets/img/pacD2.png";

var desenhoPac = pacManR;

var px = -1, py = -1;
var ghosts = new Array(); //Armazena referencias dos Ghosts

function initGame() {
    document.getElementById("score").innerHTML = score;
    document.querySelector('#gameOver').classList.remove('gameOverDisplayShow');
    document.querySelector('#gameOver').classList.add('gameOverDisplayNone');
    score = 0;
    qtdPontos = 0;
    Cenario.mapa = new Array();

    novaFase();

    var nGhosts = 0;
    for (y = 0; y < ny; y++) {
        for (x = 0; x < nx; x++) {
            if (Cenario.mapa[y][x] == Cenario.pacman) {
                px = x;
                py = y;
            }
            if (Cenario.mapa[y][x] == Cenario.ghost) {
                ghosts.push(new Ghost(x, y,
                    Ghost.imagem[nGhosts++]));
            }

        }
    }

    desenharTudo();
}

function novoJogo() {
    pausar();
    resetSoms();
    introMusic.play();
    initGame();

    introMusic.addEventListener('ended', function() {
        startStop();
        if(paused){
            retomar();
        }
        audioWaka.play();
        btPausa.disabled = false;
    },false);	
}

var ponto = new Image();
ponto.onload = desenharTudo;
ponto.src = "assets/img/ponto.png";
var poder = new Image();
poder.onload = desenharTudo;
poder.src = "assets/img/poder.png";
var parede = new Image();
parede.onload = desenharTudo;
parede.src = "assets/img/parede.png";

function desenharTudo() {
	//Limpar a tela
    qtdPontos = 0;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	//Cenário
	for (y = 0; y < ny; y++) {
		for (x = 0; x < nx; x++) {
			if (Cenario.mapa[y][x] == Cenario.parede) {
				ctx.drawImage(parede, x * largura, y * largura, largura, largura);
			} else if (Cenario.mapa[y][x] == Cenario.ponto) {
				ctx.drawImage(ponto, x * largura, y * largura, largura, largura);
				qtdPontos++;
			} else if (Cenario.mapa[y][x] == Cenario.poder) {
				ctx.drawImage(poder, x * largura, y * largura, largura,largura);
                qtdPontos++;
			}
		} //else if & for x
	}
	//Pacman
    ctx.drawImage(desenhoPac, px * largura, py * largura, largura, largura);
	//Fantasmas
	for (i = 0; i < ghosts.length; i++) {
		ghosts[i].desenhar(ctx);
	}
			
} //for y & function


document.onkeydown = onKD; //Eventos de tecla para método onKD
var setaCima = false;
var setaBaixo = false;
var setaEsquerda = false;
var setaDireita = false;
function onKD(evt) {
	if (evt.keyCode == Teclas.direita && paused == false) {
		setaDireita = true;
	}
	if (evt.keyCode == Teclas.esquerda && paused == false) {
		setaEsquerda = true;
	}
	if (evt.keyCode == Teclas.cima && paused == false) {
		setaCima = true;
	}
	if (evt.keyCode == Teclas.baixo && paused == false) {
		setaBaixo = true;
	}
	if (evt.keyCode == Teclas.space) {
		novoJogo();
	}
	if (evt.keyCode == Teclas.control) {
        startStop();
	}
}

function moverPacman() {
    if (setaDireita) {
        desenhoPac = pacManR;
        setTimeout(()=>{
            desenhoPac = pacManR2;
        },50)
        setaDireita = false;
        if (px + 1 < nx) {
            if (Cenario.mapa[py][px + 1] != Cenario.parede) {
                px++;
            }
        } else if (Cenario.mapa[py][0] != Cenario.parede) {
            px = 0;
        }
    }
    if (setaEsquerda) {
        desenhoPac = pacManL;
        setTimeout(()=>{
            desenhoPac = pacManL2;
        },50)
        setaEsquerda = false;
        if (px - 1 >= 0) {
            if (Cenario.mapa[py][px - 1] != Cenario.parede) {
                px--;
            }
        } else if (Cenario.mapa[py][nx - 1] != Cenario.parede) {
            px = nx - 1;
        }
    }
    if (setaCima) {
        desenhoPac = pacManU;
        setaCima = false;
        if (py - 1 >= 0) {
            if (Cenario.mapa[py - 1][px] != Cenario.parede) {
                py--;
            }
        } else if (Cenario.mapa[ny - 1][px] != Cenario.parede) {
            py = ny - 1;
        }
    }
    if (setaBaixo) {
        desenhoPac = pacManD;
        setTimeout(()=>{
            desenhoPac = pacManD2;
        },50)
        setaBaixo = false;
        if (py + 1 < ny) {
            if (Cenario.mapa[py + 1][px] != Cenario.parede) {
                py++;
            }
        } else if (Cenario.mapa[0][px] != Cenario.parede) {
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
    clearInterval(relogio);
    clearInterval(relogioGhosts);
    relogio = null;
    relogioGhosts = null;
    btPausa.innerHTML = "Continuar";
    audioWaka.pause();
    paused = true;
}

function retomar(){
    relogio = setInterval("atualizaPacman()", intervalo);
    relogioGhosts = setInterval("atualizaGhosts()",
        Math.round(intervalo * velocidadeFantasma));
    btPausa.innerHTML = "Pausar";

    if (audioWaka.duration > 0 && !audioWaka.paused) {
        audioWaka.pause();
    } else {
        audioWaka.play();
    }
    paused = false;
}

function startStop(){
    if(document.getElementById('btPausa').innerHTML == "Iniciar"){
        novoJogo();
    }else {
        if(paused){
            retomar();
        }else{
            pausar();
        }
    }
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
        pararSom();
        audioPacDie.play();
        gameOver();
    }
    desenharTudo();
}

function winGame() {
    pausar();
    velocidadeFantasma = velocidadeFantasma - 0.1;
    initGame();
}

 //Troca de fase
function novaFase(){
    var escolhaRandom = Math.floor(Math.random() * (3 - 1)) + 1;
     if(escolhaRandom == 1){
        for (i = 0; i < cenarioCriado.length; i++) {
            Cenario.mapa.push(cenarioCriado[i].slice(0));
        }
    
        nx = Cenario.mapa[0].length;
        ny = Cenario.mapa.length;
        canvas.width = nx * largura;
        canvas.height = ny * largura;
        ghosts.length = 0;
    } else if(escolhaRandom == 2){
        for (i = 0; i < cenarioCriado.length; i++) {
            Cenario.mapa.push(cenarioCriado1[i].slice(0));
        }
    
        nx = Cenario.mapa[0].length;
        ny = Cenario.mapa.length;
        canvas.width = nx * largura;
        canvas.height = ny * largura;
        ghosts.length = 0;
    }
}

//Retorna verdadeiro para o caso de Game Over
function verificaColisoes() {
//Comer ponto?
    if (Cenario.mapa[py][px] == Cenario.ponto) {
        Cenario.mapa[py][px] = Cenario.vazio;
        score += 10;
        document.getElementById("score").innerHTML = score;
        qtdPontos--;
        if(qtdPontos<=0){
            winGame();
        }
//Ponto do poder?
    } else if (Cenario.mapa[py][px] == Cenario.poder) {
        score += 50;
        document.getElementById("score").innerHTML = score;
        Cenario.mapa[py][px] = Cenario.vazio;
        qtdPontos--;
        if(qtdPontos<=0){
            winGame();
        }
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
                score += 200;
                document.getElementById("score").innerHTML = score;
                audioEatGhost.play();
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
    score = 0;
    document.getElementById("score").innerHTML = score;
    document.querySelector('#gameOver').classList.remove('gameOverDisplayNone');
    document.querySelector('#gameOver').classList.add('gameOverDisplayShow');
}

function pararSom(){
    audioEatGhost.pause();
    audioPacDie.pause();
    audioWaka.pause();
    introMusic.pause();
}

function resetSoms(){
    audioEatGhost.currentTime = 0;
    audioPacDie.currentTime = 0;
    audioWaka.currentTime = 0;
    introMusic.currentTime = 0;
}

initGame();