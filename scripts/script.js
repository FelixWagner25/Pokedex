// Aussagekräftige Namen für Funktionen und Variablen
// camelCase für die Benennung
// Code formatiert
// Maximal 14 Zeilen pro Funktion
// Gleicher abstand zwischen Funktionen (1 oder 2 Leerzeichen)
// HTML Templates in extra-Funktionen ausgelagert
// Suchleiste: Man muss mindestens 3 Buchstaben eingeben, bevor gesucht wird
let baseUrl = "https://pokeapi.co/api/v2/";

let numberPokemons = 16;

let pokemonArray = [];

async function init() {
  try {
    initializePokemonArray();
    await loadAllPokemonData();
    renderCards();
  } catch (error) {
    console.log("Error at loading pokemon data:");
    console.log(error);
  }
}

async function loadAllPokemonData() {
  for (
    let indexPokemon = 1;
    indexPokemon < numberPokemons + 1;
    indexPokemon++
  ) {
    await loadSinglePokemon(indexPokemon);
  }
}

function initializePokemonArray() {
  for (let i = 0; i < numberPokemons; i++) {
    pokemonArray[i] = {};
  }
}

async function loadSinglePokemon(indexPokemon) {
  await insertPokemonName(indexPokemon);
  await insertPokemonType(indexPokemon);
  await insertPokemonImage(indexPokemon);
}

async function loadPokemonDataToJson(path = "") {
  let response = await fetch(baseUrl + path);
  let responseToJSON = await response.json();
  return responseToJSON;
}

function getPokemonPathByIndex(indexPokemon) {
  return "pokemon/" + String(indexPokemon) + "/";
}

async function insertPokemonName(indexPokemon) {
  let indexArray = indexPokemon - 1;
  let path = getPokemonPathByIndex(indexPokemon);
  responseJSON = await loadPokemonDataToJson(path);
  pokemonArray[indexArray].name = responseJSON.name;
}

async function insertPokemonType(indexPokemon) {
  let indexArray = indexPokemon - 1;
  let path = getPokemonPathByIndex(indexPokemon);
  responseJSON = await loadPokemonDataToJson(path);
  let typesPokemon = [];
  for (let indexType = 0; indexType < responseJSON.types.length; indexType++) {
    typesPokemon[indexType] = responseJSON.types[indexType].type.name;
  }
  pokemonArray[indexArray].types = typesPokemon;
}

async function insertPokemonImage(indexPokemon) {
  let indexArray = indexPokemon - 1;
  let path = getPokemonPathByIndex(indexPokemon);
  responseJSON = await loadPokemonDataToJson(path);
  pokemonArray[indexArray].image =
    responseJSON.sprites.other.home.front_default;
}

function capitaliseFirstCharacter(word) {
  return word.substring(0, 1).toUpperCase() + word.substring(1);
}

function renderCards() {
  contentRef = document.getElementById("content");
  contentRef.innerHTML = "";
  for (let indexArray = 0; indexArray < pokemonArray.length; indexArray++) {
    if (pokemonHas2Attributes(indexArray)) {
      contentRef.innerHTML += getCardTemplate2Attr(indexArray);
    } else {
      contentRef.innerHTML += getCardTemplate1Attr(indexArray);
    }
  }
}

function pokemonHas2Attributes(indexArray) {
  if (pokemonArray[indexArray].types.length == 2) {
    return true;
  }
  return false;
}

async function loadMorePokemon(additionalPokemon = 16) {
  numberPokemons += additionalPokemon;
  await init();
}
