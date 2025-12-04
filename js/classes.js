class Genero {
    constructor(nome_genero) {
        this.nome_genero = nome_genero;
    }
    exibirDados() { 
        return this.nome_genero;
    }
}
class Midia {

    constructor(titulo, ano, sinopse, genero, tipoMidia) {
        this.tipoMidia = tipoMidia; // Filme ou Serie
        this.titulo = titulo;
        this.ano = ano;
        this.sinopse = sinopse;
        this.genero = genero; 
    }
    
    toString() {
        return `${this.titulo} (${this.ano}) ${this.sinopse} ${this.nome_genero}`;
    }

    exibirDados() {
        return `
        Tipo: ${this.tipoMidia}\n
        Título: ${this.titulo}\n
        Ano: ${this.ano}\n
        Sinopse: ${this.sinopse}\n
        Gênero: ${this.genero.nome_genero}`;
    }
}

class Filme extends Midia {
    constructor(titulo, ano, sinopse, genero, duracao, diretor) {
        super(titulo, ano, sinopse, genero, 'Filme'); 
        this.duracao = duracao;
        this.diretor = diretor;
    }
    
    exibirDados() {
        var infoMidia = super.exibirDados();
        return `${infoMidia}\n
        Duração: ${this.duracao} minutos\n
        Diretor: ${this.diretor}`;
    }
}

class Serie extends Midia {
    constructor(titulo, ano, sinopse, genero, numEpisodios, numTemporadas, diretor) {
        super(titulo, ano, sinopse, genero, 'Serie'); 
        this.numEpisodios = numEpisodios;
        this.numTemporadas = numTemporadas;
        this.diretor = diretor;
    }

    exibirDados() {
        var infoMidia = super.exibirDados();
        return `${infoMidia}\n
        Temporadas: ${this.numTemporadas}\n
        Episódios: ${this.numEpisodios}\n
        Diretor: ${this.diretor}`;
    }
}