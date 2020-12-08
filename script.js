const pkmContainer = document.querySelector("pkm-container")
const input = document.getElementById("pesquisa")
const pesquisar = document.getElementById("buscar")
const nome = document.getElementById('nomeP')
const idpkm = document.getElementById("numpkm")


function procurarPoke(nomePok) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nomePok}`)
    .then(response => response.json())
    .then((pokemon) => {
        
        console.log(idpkm.innerText = '#' + pokemon.id)
        console.log(nome.innerText = pokemon.name)
        
})
}

pesquisar.addEventListener('click', event =>{
    event.preventDefault()
    const nomePok = input.value.toLowerCase()
    procurarPoke(nomePok)
})




