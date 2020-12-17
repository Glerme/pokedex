export default async function procurarPoke(nomePok) {
    try {
      return await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePok}`).then(
        (response) => {
          const erro = document.querySelector('.erro')
          erro.style.display = 'none'
          return response.json();
        }
      );
    } catch (error) {
      const erro = document.querySelector('.erro')
      erro.style.display = 'block'
      console.error();
    }
  }