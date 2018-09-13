
	var canvas = document.getElementById('tela');
	var ctx = canvas.getContext("2d");
	var btPausa = document.getElementById("btPausa");
	var btNovo = document.getElementById("btNovo");

	var nx = 0, ny = 0; //Número de colunas e linhas

	var px = -1, py = -1; 
	var ghosts = new Array(); //Armazena referencias dos Ghosts
	function novoJogo() {
		Cenario.mapa = new Array();
		for (i = 0; i < cenarioCriado.length; i++) {
		Cenario.mapa.push(cenarioCriado[i].slice(0));
		}
		nx = Cenario.mapa[0].length;
		ny = Cenario.mapa.length;
		canvas.width = nx * largura;
		canvas.height = ny * largura;
		ghosts.length = 0;
		var nGhosts = 0;
		for (y = 0; y < ny; y++) {
			for (x = 0; x < nx; x++) {
				if (Cenario.mapa[y][x] == Cenario.pacman) {
					px = x;
					py = y;
				}
				if (Cenario.mapa[y][x] == Cenario.ghost) {
					ghosts.push(new Ghost(x, y,
					Ghost.cores[nGhosts++]));
				}
					
			}
		}
			
		btPausa.disabled = false;
		btPausa.innerHTML = "Iniciar";
		desenharTudo();
	}

	var ponto = new Image();
	ponto.onload = desenharTudo;
	ponto.src = "img/ponto.png";
	var poder = new Image();
	poder.onload = desenharTudo;
	poder.src = "img/poder.png";

	function desenharTudo() {
		//Limpar a tela
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		//Cenário
		ctx.fillStyle = "#9999EE";
		for (y = 0; y < ny; y++) {
			for (x = 0; x < nx; x++) {
				if (Cenario.mapa[y][x] == Cenario.parede) {
					ctx.fillRect(x * largura, y * largura, largura, largura);
				} else if (Cenario.mapa[y][x] == Cenario.ponto) {
					ctx.drawImage(ponto, x * largura, y * largura, largura, largura);
				} else if (Cenario.mapa[y][x] == Cenario.poder) {
					ctx.drawImage(poder, x * largura, y * largura, largura,largura);
				} 
			} //else if & for x
		}
		//Pacman
		ctx.fillStyle = "#FFB00F";
		ctx.beginPath();
		ctx.arc(px * largura + (largura / 2), py * largura +
		(largura / 2), largura / 2, Math.PI * 2, false);
		ctx.closePath();
		ctx.fill();

		for (i = 0; i < ghosts.length; i++) {
			ghosts[i].desenhar(ctx);
		}
			
	} //for y & function		

	novoJogo();

