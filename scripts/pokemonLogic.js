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
  let path = getPokemonPathByIndex(indexPokemon);
  responseJSON = await loadPokemonDataToJson(path);
  await insertPokemonDefaultProperties(indexPokemon, responseJSON);
}

async function loadPokemonHabitatAndEvolution(indexPokemon) {
  let path = getPokemonPathByIndex(indexPokemon);
  responseJSON = await loadPokemonDataToJson(path);
  let pathSpecies = getSpeciesPath(responseJSON);
  responseSpeciesJSON = await loadPokemonDataToJson(pathSpecies);
  let pathEvolution = getEvolutionPath(responseSpeciesJSON);
  responseEvolutionJSON = await loadPokemonDataToJson(pathEvolution);
  await insertPokemonHabitat(indexPokemon, responseSpeciesJSON);
  await insertPokemonEvolutionImages(indexPokemon, responseEvolutionJSON);
}

async function loadPokemonDataToJson(path = "") {
  let response = await fetch(path);
  let responseToJSON = await response.json();
  return responseToJSON;
}

function getPokemonPathByIndex(indexPokemon) {
  return baseUrl + "pokemon/" + String(indexPokemon) + "/";
}

function pokemonHas2Attributes(indexArray) {
  if (currentPokemons[indexArray].types.length == 2) {
    return true;
  }
  return false;
}

async function loadMorePokemon(additionalPokemon = 20) {
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
    enableLoadMoreBtn();
    return;
  } else if (hasMoreThan2Characters(filterKey)) {
    currentPokemons = filterPokemons(filterKey);
    renderCards();
    disableLoadMoreBtn();
    if (currentPokemons.length == 0) {
      renderNoResultsMsg();
    }
  } else return;
}

function pokemonHasThreeEvolutionSteps(indexArray) {
  if (currentPokemons[indexArray].evolutionImages.length == 3) {
    return true;
  }
  return false;
}

function getPokemonAllAbilites(indexArray) {
  let pokemonAbilites = "";
  for (let i = 0; i < currentPokemons[indexArray].abilities.length - 1; i++) {
    pokemonAbilites += currentPokemons[indexArray].abilities[i] + ", ";
  }
  pokemonAbilites +=
    currentPokemons[indexArray].abilities[
      currentPokemons[indexArray].abilities.length - 1
    ];
  return pokemonAbilites;
}
