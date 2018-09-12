var Ghost = function(x, y, cor) {
//Atributos dinâmicos
	this.xi = x;//ponto x de inicio
	this.yi = y;//ponto y de inicio
	this.x = x;
	this.y = y;
	this.cor = cor;
	this.direcaoAtual = Direcao.naoDefinida;
	//Métodos dinâmicos
	this.desenhar = function(ct) {
		ct.fillStyle = this.cor;
		ct.fillRect(this.x * largura, this.y * largura,
		largura, largura);
	}
}
//Elementos estáticos da classe Ghost
Ghost.cores = new Array();
Ghost.cores.push("rgba( 85, 238, 85, 0.85)");
Ghost.cores.push("rgba( 85, 238, 238, 0.85)");
Ghost.cores.push("rgba(238, 238, 85, 0.85)");
Ghost.cores.push("rgba(238, 85, 85, 0.85)");
Ghost.cores.push("rgba(238, 85, 238, 0.85)");

//Atributo dinâmico
this.listaDirecoes = new Array();
this.checarDirecoes = function() {
	//Limpar o array de possíveis direções
	this.listaDirecoes.length = 0;
	if (this.direcaoAtual != Direcao.naoDefinida) {
		this.listaDirecoes.push(this.direcaoAtual);
	}
	if (this.direcaoAtual != Direcao.cima && this.direcaoAtual != Direcao.baixo) {
		this.listaDirecoes.push(Direcao.cima);
		this.listaDirecoes.push(Direcao.baixo);
	}
	if (this.direcaoAtual != Direcao.esquerda && this.direcaoAtual != Direcao.direita) {
		this.listaDirecoes.push(Direcao.esquerda);
		this.listaDirecoes.push(Direcao.direita);
	}
	var i = 0;
	while (i < this.listaDirecoes.length) {
		var remover = false;
		switch (this.listaDirecoes[i]) {
			case Direcao.cima:
				if (this.y <= 1) {
					remover = true;
				} 
				else {
					if (Cenario.mapa[this.y - 1][this.x] == Cenario.parede) {
						remover = true;
					}
			}break;
			case Direcao.baixo:
				if (this.y >= ny - 2) {
					remover = true;
				} 
				else {
					if (Cenario.mapa[this.y + 1][this.x] == Cenario.parede) { 
						remover = true;
					}
				}
				break;
			case Direcao.esquerda:
				if (this.x <= 1) {
					remover = true;
				} 
				else {
				if (Cenario.mapa[this.y][this.x - 1] == Cenario.parede) { remover = true;
				}
			}
			break; 
			case Direcao.direita:
				if (this.x >= nx - 2) {
					remover = true;
				} 
				else {
				if (Cenario.mapa[this.y][this.x + 1] == Cenario.parede) {
						remover = true;
				}
			}
			break;
		} //Fim do switch
		if (remover) {
			this.listaDirecoes.splice(i, 1);
		} 
		else {
			i++;
		}
	} //Fim do WHILE
} //Fim da função checarDirecoes()
this.mover = function() {
	this.checarDirecoes();
	var movimento = Direcao.naoDefinida;
	var aleatorio = Math.random();
	//Se o primeiro for sorteado ou a lista tiver apenas 1 opção
	if (aleatorio < Ghost.chanceMovIgual || this.listaDirecoes.length == 1) {
		movimento = this.listaDirecoes[0];
	}
	else {
		chance = (1 - Ghost.chanceMovIgual) /
		(this.listaDirecoes.length - 1);
		for (ca = 1; ca < this.listaDirecoes.length; ca++) {
			if (aleatorio < Ghost.chanceMovIgual + (ca * chance)) {
				movimento = this.listaDirecoes[ca];
				break;
			}
		}
	} 
	this.direcaoAtual = movimento;
	switch(movimento) {
		case Direcao.cima:
			this.y--;
			break;
		case Direcao.baixo:
			this.y++;
			break;
		case Direcao.esquerda:
			this.x--;
			break;
		case Direcao.direita:
			this.x++;
			break;
		default:
			break;
	}
} //Fim função mover() 
//Número de movimentos restantes como assustado
this.assustado = 0;
this.assustar = function () {
	this.assustado = 30;
	switch(this.direcaoAtual) {
		case Direcao.cima:
			this.direcaoAtual = Direcao.baixo;
			break;
		case Direcao.baixo:
			this.direcaoAtual = Direcao.cima;
			break;
		case Direcao.esquerda:
			this.direcaoAtual = Direcao.direita;
			break;
		case Direcao.direita:
			this.direcaoAtual = Direcao.esquerda;
			break;
	}
}
//Quando o Fantasma for devorado
this.devorado = function () {
	this.assustado = 0;
	this.x = this.xi;
	this.y = this.yi;
}
//Adicionar à função mover()
this.mover = function() {
	if (this.assustado > 0) {
		this.assustado--;
	}
this.checarDirecoes();
...
}
//Alterar a função para desenhar fantasma assustado
this.desenhar = function(ct) {
	if (this.assustado == 0) {
		ct.fillStyle = this.cor;
	} else {
		ct.fillStyle = "rgba(255, 255, 255, 0.8)";
	}
	ct.fillRect(this.x * largura, this.y * largura,largura, largura);
}
