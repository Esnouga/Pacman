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