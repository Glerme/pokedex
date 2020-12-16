export default function tipo2(pokemon) {
    if (pokemon.types[1]) {
      return pokemon.types[1].type.name;
    } else {
      return " - ";
    }
}