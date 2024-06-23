//função de mudar imagem pelo id e pela url
function changeImage(id, url) {
  document.getElementById(id).src = url;
}
//função de mudar texto pelo id e pelo texto
function changeText(id, text) {
  document.getElementById(id).innerText = text;
}

// Daqui para baixo voce ira escrever
// o código para resolver o desafio

let idOffSet = 0; //Id de inicio da lista de pokemons
let idLimit = 500; //Id da quantidade de pokemons para retornar
let idPokemon = 0;

//Funcao pra buscar os dados na API a partir da url passada
async function fetchPokemon () {
  const url = `https://pokeapi.co/api/v2/pokemon///?offset=${idOffSet}&limit=${idLimit}`;
  const respostaAPI = await fetch(url).then((response) => response.json());
  //console.log(respostaAPI);
  return respostaAPI;
}

//Busca os dados do pokemon por meio da url que vem no objeto da chamada inicial
async function atualizaPokemon(idPokemon) {

  const pokemon = await fetchPokemon();
  
  id = idPokemon +1;
  url = pokemon.results[idPokemon].url;
  text = pokemon.results[idPokemon].name;
  
  changeImage(id, url);
  changeText(id, text);
}



function previousPokemon() {
  alert("Pokemon Anterior");
  //abra o terminal em inspecionar no chrome para visualizar
  console.log("Pokemon Anterior");
}

function nextPokemon() {
  alert("Pokemon Seguinte");
  //abra o terminal em inspecionar no chrome para visualizar
  console.log("Pokemon Seguinte");
}
