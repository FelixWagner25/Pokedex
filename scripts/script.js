let baseUrl = "https://pokeapi.co/api/v2/";

let numberPokemons = 16;

let pokemonArray = [];

let currentPokemons = [];

let currentDetailedTabId = "base-stats-tab";

async function init() {
  await loadAndShowPokemons();
}

function capitaliseFirstCharacter(word) {
  return word.substring(0, 1).toUpperCase() + word.substring(1);
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

function openDetailedCard() {
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

function removeFocusFromAllTabs() {
  tabRefs = document.getElementsByClassName("tab-lnk");
  for (let i = 0; i < tabRefs.length; i++) {
    tabRefs[i].classList.remove("focus");
  }
}

function addFocusToTabLnk(htmlId) {
  document.getElementById(htmlId + "-lnk").classList.add("focus");
}

function openDetailedTab(htmlId) {
  document.getElementById(htmlId).classList.remove("d-none");
  currentDetailedTabId = htmlId;
}

function closeCurrentDetailedTab(htmlId) {
  document.getElementById(htmlId).classList.add("d-none");
}

function closeAllDetailedTabs() {
  document.getElementById("about-tab").classList.add("d-none");
  document.getElementById("base-stats-tab").classList.add("d-none");
  document.getElementById("evolution-tab").classList.add("d-none");
  document.getElementById("moves-tab").classList.add("d-none");
}

function valueGreaterThan50(value) {
  if (value > 50) {
    return true;
  }
  return false;
}
