class genero{
    constructor(nome_genero){
        this.nome_genero = nome_genero;
    }
    exibirDados(){ return this.nome_genero}
}
class midia{
    constructor(titulo,ano,sinopse,genero){
        this.titulo = titulo;
        this.ano = ano;
        this.sinopse = sinopse;
        this.genero = genero;
    }
    exibirDados(){
        return` 
        Título: ${this.titulo}\n
        Ano: ${this.ano}\n
        Sinopse: ${this.sinopse}\n
        Gênero: ${this.genero.exibirDados()}`
    }
    toString(){
        return`${this.titulo}`
    }
}
class filme extends midia{
    constructor(titulo,ano,sinopse,genero,duração,diretor) {
        super(titulo,ano,sinopse,genero);
        this.duração =duração;
        this.diretor =diretor;
    }
    exibirDados(){
        let infomidia = super.exibirDados()
        return `${infomidia}\n
        Duração: ${this.duração}\n
        Diretor:${this.diretor}\n`
    }
}
class serie extends midia{
    constructor(titulo,ano,sinopse,genero,numEpisodios,
        numTemporadas,diretor) {
        super(titulo,ano,sinopse,genero);
        this.numEpisodios = numEpisodios;
        this.numTemporadas = numTemporadas;
        this.diretor =diretor;
    }
    exibirDados(){
        let infomidia = super.exibirDados()
        return `${infomidia}\n
        Número de Episódios: ${this.numEpisodios}\n
        Número de Temporadas: ${this.numTemporadas}\n`
    }
}


    

