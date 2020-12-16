export default async function procurarPoke(nomePok) {
    try {
      return await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePok}`).then(
        (response) => {
          return response.json();
        }
      );
    } catch (error) {
      console.error();
    }
  }