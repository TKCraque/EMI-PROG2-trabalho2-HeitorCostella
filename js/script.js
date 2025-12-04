// array global
var listaCadastros = [];
// carrega os dados salvos do localstorage quando for executado
carregarDadosSalvos(); 

document.getElementById("cadastroForm").addEventListener("submit", cadastrar); // no click do cadastro chama a função cadastrar
document.getElementById("tipoConteudo").addEventListener("change", alternarCampos); // quando selecionar tipo midia ela altera o campo específico de cada um
document.addEventListener("DOMContentLoaded", alternarCampos); // "ajuda do alysson" garante que a função será chamada após o carregamento da página
//função para cadastro de mídia
function cadastrar(evento) {
    evento.preventDefault(); //impede que a pagina recarregue
    //pega valores que foram informados no html
    var tipo = document.getElementById("tipoConteudo").value;
    var titulo = document.getElementById("titulo").value;
    var ano = document.getElementById("ano").value;
    var sinopse = document.getElementById("sinopse").value;
    var nomeGenero = document.getElementById("genero").value;
    // pega a classe genero para add no html
    var generoObj = new Genero(nomeGenero);

    var novaMidia;
    //caso seja selecionado campo filme pegar os específicos do filme
    if (tipo === "Filme") {
        var duracao = document.getElementById("duracao").value;
        var diretor = document.getElementById("diretor1").value;
        novaMidia = new Filme(titulo, ano, sinopse, generoObj, duracao, diretor);
      // se não pegar os da série  
    } else { 
        var temporadas = document.getElementById("temporadas").value;
        var episodios = document.getElementById("episodio").value;
        var diretorSerie = document.getElementById("camposSerie").querySelector('input[id="diretor2"]').value; 
        //"ajuda do alysson no input" garante que seja chamdo o diretor de série 
        novaMidia = new Serie(titulo, ano, sinopse, generoObj, episodios, temporadas, diretorSerie);
    }
    //adiciona o novamidia criando agora a lista cadastros
    listaCadastros.push(novaMidia);
    // salva no localstorage
    salvarCadastros();
    // atualiza e exibe na interface 
    renderizarListas();
    //limpa os campos do formulário
    document.getElementById("cadastroForm").reset();
    // garante que ao add o formulário volte ao normal e seus campos especifícos estejam corretos
    alternarCampos(); 
}
//salvar os cadastros com local storage
function salvarCadastros() {
    var jsonCadastros = JSON.stringify(listaCadastros);//converte para string 
    localStorage.setItem("listaCadastros", jsonCadastros); // armazena a string que o JSON converteu
}
// recupera a string salva no localstorage
function carregarDadosSalvos() {
    var jsonCadastros = localStorage.getItem("listaCadastros");
    
    //"ajuda alysson" verifica se algum dado foi salvo 
    if (jsonCadastros) {
        var arrayRaw = JSON.parse(jsonCadastros);// converte de string para seu valor normal 
        
        listaCadastros = [];
        //recria instâncias pois o .parse cria um objeto simples 
        for (var i = 0; i < arrayRaw.length; i++) {
            var midiaRaw = arrayRaw[i];

            if (midiaRaw.tipoMidia === 'Filme') { 
                var filme = new Filme(
                    midiaRaw.titulo, midiaRaw.ano, midiaRaw.sinopse, midiaRaw.genero, 
                    midiaRaw.duracao, midiaRaw.diretor
                );
                listaCadastros.push(filme); // adiciona a nova instância criada 

            } else if (midiaRaw.tipoMidia === 'Serie') { 
                var serie = new Serie(
                    midiaRaw.titulo, midiaRaw.ano, midiaRaw.sinopse, midiaRaw.genero, 
                    midiaRaw.numEpisodios, midiaRaw.numTemporadas, midiaRaw.diretor
                );
                listaCadastros.push(serie); // adicona a nova instância criada
            }
        }
        // atualiza a lista
        renderizarListas();
    }
}
// "ajuda alysson" renderiza as listas para aparecer no html
function renderizarListas() {
    var ulFilmes = document.getElementById("listafoda1");// ul de filme
    var ulSeries = document.getElementById("listafoda2");// ul de série
    // limpa os campos
    ulFilmes.innerHTML = "";
    ulSeries.innerHTML = "";
    
    for (var i = 0; i < listaCadastros.length; i++) {
        // percorre o listacadstros
        var midia = listaCadastros[i];
        // cria um lemento para cada lista 
        var li = document.createElement("li");
        // pega oq está sendo adicionado 
        li.innerHTML = `
            ${midia.toString()} | Gênero: ${midia.genero.nome_genero}
            <button onclick="verDetalhes(${i})">Detalhes</button>
            <button onclick="removerMidia(${i})">Remover</button>
        `;
        // se selecionar filme add a lista em filme se for em série add em série
        if (midia.tipoMidia === 'Filme') {
            ulFilmes.appendChild(li);
        } else if (midia.tipoMidia === 'Serie') {
            ulSeries.appendChild(li);
        }
    }
}
// função para remover 
function removerMidia(indice) {
    //"ajuda alysson"confirma de quer mesmo remover o item
    if(confirm("Tem certeza que deseja remover o item: " + listaCadastros[indice].titulo + "?")){
        // caso remova ele tira o item que foi selecionado
        listaCadastros.splice(indice, 1);
        //atualiza o localstorage
        salvarCadastros();
        // atualiza a pagina 
        renderizarListas();
    }
}
// função para ver os detalhes do filme
function verDetalhes(indice) {
    // acessa o objeto pelo indice e exibe ele
    var midia = listaCadastros[indice];
    alert(midia.exibirDados());
}
//"ajuda alysson" muda o campo depedendo do que foi selecionado
function alternarCampos() {
    var tipo = document.getElementById("tipoConteudo").value;
    var campoFilme = document.getElementById("camposFilme");
    var campoSerie = document.getElementById("camposSerie");
    // "ajuda alysson" precisa criar o escondido no css para manipular usando o classlist que lista  
    if (tipo === "Filme") {
        campoFilme.classList.remove("escondido");// retira o escondido oq faz aparecer a resposta 
        campoSerie.classList.add("escondido");// adiciona o escondido oq faz com que não apareça 
    } else if (tipo === "Serie") {
        campoSerie.classList.remove("escondido");// retira o escondido oq faz aparecer a resposta 
        campoFilme.classList.add("escondido");// adiciona o escondido oq faz com que não apareça 
    }
}
//display usado para esconder totalmente um elemento no html