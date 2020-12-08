const pkmContainer = document.querySelector("pkm-container")



fetch("https://pokeapi.co/api/v2/pokemon/")
.then(response => response.json())
.then((pokemon) => {
    pkmContainer.innerHTML = pokemon
})



