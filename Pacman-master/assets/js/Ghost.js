//Classe Ghost -> Define atributos e aÃ§Ãµes dos fantasmas
var Ghost = function(x, y, imagem){
    //Atributos dinÃ¢micos

    this.xi = x;//ponto x de inicio
    this.yi = y;//ponto y de inicio
    this.x = x;
    this.y = y;

    var imagemAssustado = new Image();
    imagemAssustado.src = "assets/img/fantasmaAssustado.png";
    this.imagem = imagem;
    this.direcaoAtual = Direcao.naoDefinida;
    this.listaDirecoes = new Array();
    this.assustado = 0;
    //MÃ©todos dinÃ¢micos
    this.desenhar = function(ct){
        if(this.assustado == 0){
            //ct.drawImage = this.imagem;
            ct.drawImage(this.imagem, this.x * largura, this.y * largura, largura, largura);
        }else{
            ct.drawImage(imagemAssustado, this.x * largura, this.y * largura, largura, largura);
        }

        //ct.drawImage(imagemAssustado, this.x * largura, this.y * largura, largura, largura);
    }

    this.checarDirecoes = function(){
        this.listaDirecoes.length = 0;
        if(this.direcaoAtual != Direcao.naoDefinida){
            this.listaDirecoes.push(this.direcaoAtual);
        }
        if(this.direcaoAtual != Direcao.cima && this.direcoaAtual != Direcao.baixo){
            this.listaDirecoes.push(Direcao.cima);
            this.listaDirecoes.push(Direcao.baixo);
        }
        if(this.direcaoAtual != Direcao.esquerda && this.direcaoAtual != Direcao.direita){
            this.listaDirecoes.push(Direcao.esquerda);
            this.listaDirecoes.push(Direcao.direita);
        }
        var i = 0;
        while(i < this.listaDirecoes.length){
            var remover = false;
            switch(this.listaDirecoes[i]){
                case Direcao.cima:
                    if(this.y <= i){
                        remover = true;
                    }else {
                        if(Cenario.mapa[this.y - 1][this.x] == Cenario.parede){
                            remover = true;
                        }
                    }
                    break;
                case Direcao.baixo:
                    if(this.y >= ny - 2){
                        remover = true;
                    }else{
                        if(Cenario.mapa[this.y + 1][this.x] == Cenario.parede){
                            remover = true;
                        }
                    }
                    break;
                case Direcao.esquerda:
                    if(this.x <= 1){
                        remover = true;
                    }else{
                        if(Cenario.mapa[this.y][this.x - 1] == Cenario.parede){
                            remover = true;
                        }
                    }
                    break;
                case Direcao.direita:
                    if(x >= nx - 2){
                        remover = true;
                    }else{
                        if(Cenario.mapa[this.y][this.x + 1] == Cenario.parede){
                            remover = true;
                        }
                    }
                    break;
            }
            if(remover){
                this.listaDirecoes.splice(i, 1);
            }else{
                i++;
            }
        }//while
    }
    this.mover = function(){
        if(this.assustado > 0){
            this.assustado--;
        }
        this.checarDirecoes();
        var movimento = Direcao.naoDefinida;
        var aleatorio = Math.random();
        //Se o primeiro for sorteado ou a lista tiver apenas 1 opÃ§Ã£o
        if(aleatorio < Ghost.chanceMovIgual || this.listaDirecoes.length == 1){
            movimento = this.listaDirecoes[0];
        }else{
            chance = (1 - Ghost.chanceMovIgual) / (this.listaDirecoes.length - 1);
            for(ca = 1; ca < this.listaDirecoes.length; ca++){
                if(aleatorio < Ghost.chanceMovIgual + (ca * chance)){
                    movimento = this.listaDirecoes[ca];
                    break;
                }
            }
        }
        this.direcaoAtual = movimento;
        switch(movimento){
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
        }
    }

    this.assustar = function(){
        this.assustado = 30;
        switch(this.direcaoAtual){
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
    this.devorado = function(){
        this.assustado = 0;
        this.x = this.xi;
        this.y = this.yi;
    }

}
//Elementos estáticos da classe Ghost
Ghost.chanceMovIgual = 0.40;
Ghost.imagem = new Array();
var ghost = new Image();
ghost.src = "assets/img/fantasma1.png";
Ghost.imagem.push(ghost);
ghost = new Image();
ghost.src = "assets/img/fantasma2.png";
Ghost.imagem.push(ghost);
ghost = new Image();
ghost.src = "assets/img/fantasma3.png";
Ghost.imagem.push(ghost);
ghost = new Image();
ghost.src = "assets/img/fantasma4.png";
Ghost.imagem.push(ghost);
Ghost.imagem.push(ghost);