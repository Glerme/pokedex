const pkmContainer = document.querySelector("pkm-container");
const input = document.getElementById("pesquisa");
const pesquisar = document.getElementById("buscar");
const idpkm = document.getElementById("numpkm");
const nomePokemon = document.getElementById("nomeP");
const habilidade = document.getElementById("habilidade");
const type1 = document.getElementById("tipo1");
const type2 = document.getElementById("tipo2");
const hp = document.getElementById("hp")
const normalImg = document.getElementById("normal")
const shiny = document.getElementById("shiny")

function procurarPoke(nomePok) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nomePok}`)
    .then((response) => response.json())
    .then((pokemon) => {
      console.log(pokemon);
      const imagem = normalImg.src = pokemon.sprites.front_default
      const imgShiny = shiny.src = pokemon.sprites.front_shiny
      const idpokemon = (idpkm.innerText = "#" + pokemon.id);
      const nomepkm = (nomePokemon.innerText = pokemon.name.toUpperCase());
      const habilidades = (habilidade.innerText = pokemon.abilities[0].ability.name.toUpperCase());
      const tipo1 = (type1.innerText = pokemon.types[0].type.name.toUpperCase());
      const tipo2 =  (type2.innerText = pokemon.types[1].type.name.toUpperCase()); // Mudar dps para um tipo
      const pv = hp.innerHTML = pokemon.stats[0].base_stat

      return idpokemon, nomepkm, tipo1, habilidades,tipo2,pv,imagem,imgShiny
    });
}

pesquisar.addEventListener("click", (event) => {
  event.preventDefault();
  const nomePok = input.value.toLowerCase();
  procurarPoke(nomePok);
});
