async function insertPokemonHabitat(indexPokemon, responseSpeciesJSON) {
  let indexArray = indexPokemon - 1;
  pokemonArray[indexArray].habitat = responseSpeciesJSON.habitat.name;
}

async function insertPokemonEvolutionImages(
  indexPokemon,
  responseEvolutionJSON
) {
  let indexArray = indexPokemon - 1;
  evolutionImages = await getEvolutionImagesArray(responseEvolutionJSON);
  pokemonArray[indexArray].evolutionImages = evolutionImages;
}

async function getEvolutionImagesArray(responseEvolutionJSON) {
  let evolutionImages = [];
  evolutionImages.push(await getBaseLevelNameAndImage(responseEvolutionJSON));
  if (pokemonHasFirstEvolution(responseEvolutionJSON)) {
    evolutionImages.push(
      await getFirstEvolutionNameAndImage(responseEvolutionJSON)
    );
  }
  if (pokemonHasSecondEvolution(responseEvolutionJSON)) {
    evolutionImages.push(
      await getSecondEvolutionNameAndImage(responseEvolutionJSON)
    );
  }
  return evolutionImages;
}

function getPokemonIdFromSpeciesURL(speciesUrl) {
  return speciesUrl.split("/")[6];
}

async function getPokemonImagePathByIndex(indexPokemon) {
  let path = getPokemonPathByIndex(indexPokemon);
  let responseJSON = await loadPokemonDataToJson(path);
  let imagePath = responseJSON.sprites.other.home.front_default;
  return imagePath;
}

async function getBaseLevelNameAndImage(responseEvolutionJSON) {
  let baseLevelName = responseEvolutionJSON.chain.species.name;
  let baseLevelImg = await getPokemonImagePathByIndex(
    getPokemonIdFromSpeciesURL(responseEvolutionJSON.chain.species.url)
  );
  return { name: baseLevelName, image: baseLevelImg };
}

async function getFirstEvolutionNameAndImage(evolutionJson) {
  let firstEvolutionName = evolutionJson.chain.evolves_to[0].species.name;
  let firstEvolutionImg = await getPokemonImagePathByIndex(
    getPokemonIdFromSpeciesURL(evolutionJson.chain.evolves_to[0].species.url)
  );
  return { name: firstEvolutionName, image: firstEvolutionImg };
}

async function getSecondEvolutionNameAndImage(evolutionJson) {
  let secondEvolutionName =
    evolutionJson.chain.evolves_to[0].evolves_to[0].species.name;
  let secondEvolutionImg = await getPokemonImagePathByIndex(
    getPokemonIdFromSpeciesURL(
      evolutionJson.chain.evolves_to[0].evolves_to[0].species.url
    )
  );
  return { name: secondEvolutionName, image: secondEvolutionImg };
}

function pokemonHasFirstEvolution(evolutionJson) {
  if (evolutionJson.chain.evolves_to.length > 0) {
    return true;
  }
  return false;
}

function pokemonHasSecondEvolution(evolutionJson) {
  if (evolutionJson.chain.evolves_to[0].evolves_to.length > 0) {
    return true;
  }
  return false;
}

async function insertPokemonDefaultProperties(indexPokemon, responseJSON) {
  let indexArray = indexPokemon - 1;
  pokemonArray[indexArray].name = responseJSON.name;
  pokemonArray[indexArray].types = getPokemonTypesFromJSON(responseJSON);
  pokemonArray[indexArray].image =
    responseJSON.sprites.other.home.front_default;
  pokemonArray[indexArray].id = responseJSON.id;
  pokemonArray[indexArray].height = responseJSON.height;
  pokemonArray[indexArray].weight = responseJSON.weight;
  pokemonArray[indexArray].abilities = getPokemonAbilitesFromJSON(responseJSON);
  pokemonArray[indexArray].baseStats =
    getPokemonBaseStatsFromJSON(responseJSON);
  pokemonArray[indexArray].moves = getPokemonMovesFromJSON(responseJSON);
}

function getSpeciesPath(pokemonJSON) {
  let speciesPath = pokemonJSON.species.url;
  return speciesPath;
}

function getEvolutionPath(speciesJSON) {
  let pathEvolution = speciesJSON.evolution_chain.url;
  return pathEvolution;
}

function getPokemonTypesFromJSON(responseJSON) {
  let typesPokemon = [];
  for (let indexType = 0; indexType < responseJSON.types.length; indexType++) {
    typesPokemon[indexType] = responseJSON.types[indexType].type.name;
  }
  return typesPokemon;
}

function getPokemonAbilitesFromJSON(responseJSON) {
  let abilitiesPokemon = [];
  for (i = 0; i < responseJSON.abilities.length; i++) {
    abilitiesPokemon[i] = responseJSON.abilities[i].ability.name;
  }
  return abilitiesPokemon;
}

function getPokemonBaseStatsFromJSON(responseJSON) {
  let baseStats = [];
  for (let i = 0; i < responseJSON.stats.length; i++) {
    baseStats[i] = {};
    baseStats[i].name = responseJSON.stats[i].stat.name;
    baseStats[i].value = responseJSON.stats[i].base_stat;
  }
  return baseStats;
}

function getPokemonMovesFromJSON(responseJSON) {
  let moves = [];
  for (let i = 0; i < responseJSON.moves.length; i++) {
    moves[i] = responseJSON.moves[i].move.name;
  }
  return moves;
}
