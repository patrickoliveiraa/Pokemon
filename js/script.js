function buscaPokemon() {
    const nomePokemon = document.getElementById('nomePokemon').value
    const url = `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`;

    // Solicitação GET.
    fetch(url)
        // Tratamento do sucesso
        .then(response => response.json())  // converter para json
        .then(json => {
            document.getElementById('nome').value = json.name
            document.getElementById('especie').value = json.species
        })    //imprimir dados no console
        .catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch
}
