    var listaCadastros = [];
    var listagenero = [];
    
    carregar();
    document.getElementById("cadastrar").addEventListener("click", cadastrar);

    function cadastrar(evento){
        evento.preventDefault();
        var titulo = document.getElementById("titulo").value
        var ano =  document.getElementById("ano").value
        var sinopse = document.getElementById("sinopse").value
       
        if((document.getElementById("tipoConteudo").value) = "Filme"){
            var duração= document.getElementById("duracao").value
            var diretor = document.getElementById("diretor").value
            var Filme = new filme(titulo,ano,sinopse,document.getElementById("genero").value,duração,diretor);
            listaCadastros.push(Filme);
        }else{
            var temporadas = document.getElementById("temporadas").value
            var episodios = document.getElementById("episodio").value
            var Serie = new serie(titulo,ano,sinopse,document.getElementById("genero").value,episodios,
            temporadas)
            listaCadastros.push(Serie);
        }
    
        listagenero.push(document.getElementById("genero").value);
        localStorage.setItem("listagenero", JSON.stringify(listagenero));
        localStorage.setItem("listaCadastros", JSON.stringify(listaCadastros));

        carregar();
    }

    function aparecerdonada(){
        var campoFilme = document.getElementById("camposFilme");
        var camposerie = document.getElementById("camposSerie");
    if((document.getElementById("tipoConteudo").value) === "Filme"){
        campoFilme.classList.remove("escondido")
        camposerie.classList.add("escondido")
    }else{
        campoFilme.classList.add("escondido")
        camposerie.classList.remove("escondido")
    }
}
document.getElementById("tipoConteudo").addEventListener("change", () =>{
    var campoFilme = document.getElementById("camposFilme");
    var camposerie = document.getElementById("camposSerie");
    if((document.getElementById("tipoConteudo").value) === "Filme"){
        campoFilme.classList.remove("escondido")
        camposerie.classList.add("escondido")
    }else{
        campoFilme.classList.add("escondido")
        camposerie.classList.remove("escondido")
    }
})
    
        
    function carregar(){
        var divelementos = document.getElementById("listaConteudo");
       for(let i = 0; i < listaCadastros.length ; i++){
        let li = document.createElement("li");
        li.innerHTML = listaCadastros[i];
        divelementos.appendChild(li);
       }

    }