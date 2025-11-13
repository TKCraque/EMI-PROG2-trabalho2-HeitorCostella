class genero{
    constructor(nome_genero){
        this.nome_genero = nome_genero;
    }
    exibirDados(){ return this.nome_genero}
}
class midia{
    constructor(id,titulo,ano,sinopse,genero){
        this.id = id;
        this.titulo = titulo;
        this.ano = ano;
        this.sinopse = sinopse;
        this.genero = genero;
    }
    exibirDados(){
        return` 
        Identificação: ${this.id}\n
        Título: ${this.titulo}\n
        Ano: ${this.ano}\n
        Sinopse: ${this.sinopse}\n
        Gênero: ${this.genero.exibirDados()}`
    }
}
class filme extends midia{
    constructor(id,titulo,ano,sinopse,genero,duração,diretor) {
        super(id,titulo,ano,sinopse,genero);
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
    constructor(id,titulo,ano,sinopse,genero,numEpisodios,
        numTemporadas,diretor) {
        super(id,titulo,ano,sinopse,genero);
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


    

