/*
ENGNET - PROCESSO TRAINEE
BACKEND - DESAFIO 3
Vinicius Magao - VVAGA [SQUAD-4]
*/

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
async function fetchPokemon (url) {
  const respostaAPI = await fetch(url).then((response) => response.json());
  //console.log(respostaAPI);
  return respostaAPI;
}

//Atualiza os dados do pokemon por meio da url que vem no objeto da chamada inicial
async function atualizaPokemon(idPokemon) {
  
  //Pega o nome do pokemon do objeto da primeira chamada e envia pra changeText
  let url = `https://pokeapi.co/api/v2/pokemon///?offset=${idOffSet}&limit=${idLimit}`;
  let pokemon = await fetchPokemon(url);
  text = pokemon.results[idPokemon].name;
  changeText("name", text);

  //Busca a imagem do pokemon e emvia pra changeImage
  url = pokemon.results[idPokemon].url;
  pokemon = await fetchPokemon(url);
  url = pokemon.sprites.front_default;
  changeImage("img_sprite_front_default", url);
}

function previousPokemon() {
  //alert("Pokemon Anterior");
  //abra o terminal em inspecionar no chrome para visualizar
  //console.log("Pokemon Anterior");

  if (idPokemon == 0) {
    idPokemon = idLimit - 1;
    console.log(idPokemon);
    atualizaPokemon(idPokemon);
  } else {
    idPokemon -= 1;
    atualizaPokemon(idPokemon);
  }
  
}

function nextPokemon() {
  //alert("Pokemon Seguinte");
  //abra o terminal em inspecionar no chrome para visualizar
  //console.log("Pokemon Seguinte");

  if (idPokemon == idLimit-1) {
    idPokemon = 0;
    atualizaPokemon(idPokemon);
  } else {
    idPokemon += 1;
    atualizaPokemon(idPokemon);
  }
}

atualizaPokemon(idPokemon);