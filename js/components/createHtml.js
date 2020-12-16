import tipo2 from "./tipo2.js";
export default function criarHtml(pokemon) {
  const card = `
   <section class="pkm">
   <div class="imagens">
     <img id="normal" src="${pokemon.sprites.front_default}"/>
     <img id="shiny" src="${pokemon.sprites.front_shiny}">
   </div>
   
   <h3>${pokemon.name.toUpperCase()}</h3>
   <span id="numpkm">${"#" + pokemon.id}</span>
   <div class="tipos">
   <p class="tipo1 ${
     pokemon.types[0].type.name
   }">${pokemon.types[0].type.name.toUpperCase()}</p>
   <p class="tipo2 ${tipo2(pokemon)}">${tipo2(pokemon).toUpperCase()}</p>
   </div>
   
   <div class="container-habilidades">
     <div class="divisao">
       <div>
         <span>Abilities:</span>
         <p>${pokemon.abilities[0].ability.name.toUpperCase()}</p>
       </div>
       <div>
         <span>HP:</span>
         <p>${pokemon.stats[0].base_stat}</p>
       </div>
       <div>
         <span>Attack:</span>
         <p>${pokemon.stats[1].base_stat}</p>
       </div>
       <div>
         <span>Defense:</span>
         <p>${pokemon.stats[2].base_stat}</p>
       </div>
       <div>
         <span>Sp. Atk:</span>
         <p>${pokemon.stats[3].base_stat}</p>
       </div>
       <div>
         <span>Sp. Def:</span>
         <p>${pokemon.stats[4].base_stat}</p>
       </div>
       <div>
         <span>Speed:</span>
         <p>${pokemon.stats[5].base_stat}</p>
       </div>
       <div>
         <span>Height:</span>
         <p>${pokemon.weight / 10}kg</p>
       </div>
       <div>
         <span>Weight:</span>
         <p>${pokemon.height / 10}m</p>
       </div>
       
       
     </div>
     
     </div>
   </section>
   </div>
     `;

  return card;
}
