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
