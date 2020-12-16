import criarHtml from './components/createHtml.js';
import procurarPoke from './components/fetch.js'

const pkmContainer = document.querySelector("pkm-container");
const input = document.getElementById("pesquisa");
const btnPesquisar = document.querySelector("button#buscar ");
const pkm = document.getElementById("pkm");


function startApp(pokemon) {
  pkm.innerHTML = criarHtml(pokemon)
}

function buscar(e) {
  const nomePok = input.value.toLowerCase();
  procurarPoke(nomePok).then((pokemon) => {
    startApp(pokemon);
  });
}

function procurar(e) {
  if (e.target == btnPesquisar || e.keyCode == 13) {
    e.preventDefault();
    buscar(e);
  }
}
document.addEventListener("click", procurar);
