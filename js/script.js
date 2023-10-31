function buscaPokemon(){
    
document.getElementById("buscarPokemon").addEventListener("click", function(){
    const nomePokemon = "nomePokemon";//Substitua pelo nome do Pokemon desejado
const url=`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;
XMLHttpRequest
var xhr= new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onload=function() { 
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            exibirDadosPokemon(data);
        } else {
            alert("Erro ao buscar o Pokemon. Verifique o nome e tente novamente.");
        }
    };
    xhr.send();
});

function exibirDadosPokemon(pokemon) {
    document.getElementById("nomePokemon").textContent = pokemon.name;
    const outrosDetalhes = document.getElementById("outrosDetalhes");
    outrosDetalhes.innerHTML = "";
    outrosDetalhes.innerHTML += `<li>Altura: ${pokemon.height} decímetros</li>`;
    outrosDetalhes.innerHTML += `<li>Peso: ${pokemon.weight} hectogramas</li>`;
    // Você pode adicionar mais detalhes aqui, dependendo do que deseja exibir.
}}
