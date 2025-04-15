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

let currentPokemons = [];

let currentDetailedTabId = "about-tab";

async function init() {
  await loadAndShowPokemons();
}

async function loadAndShowPokemons() {
  showLoadingSpinner();
  try {
    initializePokemonArray();
    await loadAllPokemonData();
    currentPokemons = pokemonArray;
    renderCards();
  } catch (error) {
    console.log("Error at loading pokemon data:");
    console.log(error);
  }
  hideLoadingSpinner();
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
  for (let indexArray = 0; indexArray < currentPokemons.length; indexArray++) {
    if (pokemonHas2Attributes(indexArray)) {
      contentRef.innerHTML += getCardTemplate2Attr(indexArray);
    } else {
      contentRef.innerHTML += getCardTemplate1Attr(indexArray);
    }
  }
}

function pokemonHas2Attributes(indexArray) {
  if (currentPokemons[indexArray].types.length == 2) {
    return true;
  }
  return false;
}

async function loadMorePokemon(additionalPokemon = 16) {
  numberPokemons += additionalPokemon;
  disableLoadMoreBtn();
  await loadAndShowPokemons();
  enableLoadMoreBtn();
}

function filterPokemons(filterKey) {
  filterKey = filterKey.toLowerCase();
  filteredPokemons = pokemonArray.filter((pokemon) =>
    pokemon.name.includes(filterKey)
  );
  return filteredPokemons;
}

function searchAndShowPokemons() {
  filterKey = getInputValueSearch();
  if (filterKey === "") {
    currentPokemons = pokemonArray;
    renderCards();
    return;
  } else if (hasMoreThan2Characters(filterKey)) {
    currentPokemons = filterPokemons(filterKey);
    renderCards();
  } else return;
}

function getInputValueSearch() {
  inputValue = document.getElementById("search").value;
  return inputValue;
}

function hasMoreThan2Characters(word) {
  if (word.length > 2) {
    return true;
  }
  return false;
}

function showLoadingSpinner() {
  loaderRef = document.getElementById("loading-spinner-div");
  loaderRef.classList.add("loading-spinner-div");
}

function hideLoadingSpinner() {
  loaderRef = document.getElementById("loading-spinner-div");
  loaderRef.classList.remove("loading-spinner-div");
}

function showDetailedCard(indexArray) {
  openDetailedCard();
  blurBackground();
}

function openDetailedCard(indexArray) {
  detailedCardRef = document.getElementById("detailed-card-div");
  detailedCardRef.classList.remove("d-none");
}

function blurBackground() {
  backgroundRef = document.getElementById("background-dim");
  backgroundRef.classList.remove("d-none");
  document.body.style.overflow = "hidden";
}

function disableLoadMoreBtn() {
  document.getElementById("load-more-btn").classList.add("d-none");
}

function enableLoadMoreBtn() {
  document.getElementById("load-more-btn").classList.remove("d-none");
}

function closeDetailedCard() {
  detailedCardRef = document.getElementById("detailed-card-div");
  detailedCardRef.classList.add("d-none");
  unblurBackground();
}

function unblurBackground() {
  backgroundRef = document.getElementById("background-dim");
  backgroundRef.classList.add("d-none");
  document.body.style.overflow = "";
}

function showDetailedTab(htmlId) {
  removeFocusFromAllTabs();
  addFocusToTabLnk(htmlId + "-lnk");
  closeCurrentDetailedTab(currentDetailedTabId);
  openDetailedTab(htmlId);
}

function removeFocusFromAllTabs() {
  tabRefs = document.getElementsByClassName("tab-lnk");
  for (let i = 0; i < tabRefs.length; i++) {
    tabRefs[i].classList.remove("focus");
  }
}

function addFocusToTabLnk(htmlId) {
  document.getElementById(htmlId).classList.add("focus");
}

function openDetailedTab(htmlId) {
  document.getElementById(htmlId).classList.remove("d-none");
  currentDetailedTabId = htmlId;
}

function closeCurrentDetailedTab(htmlId) {
  document.getElementById(htmlId).classList.add("d-none");
}
