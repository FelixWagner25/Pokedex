async function insertPokemonHabitat(indexPokemon) {
  let indexArray = indexPokemon - 1;
  let pathSpecies = await getSpeciesPathByIndex(indexPokemon);
  responseSpeciesJSON = await loadPokemonDataToJson(pathSpecies);
  pokemonArray[indexArray].habitat = responseSpeciesJSON.habitat.name;
}

async function insertPokemonEvolutionImages(indexPokemon) {
  let indexArray = indexPokemon - 1;
  evolutionImages = await getEvolutionImagesArray(indexPokemon);
  pokemonArray[indexArray].evolutionImages = evolutionImages;
}

async function getEvolutionImagesArray(indexPokemon) {
  let evolutionImages = [];
  let pathEvolution = await getEvolutionPathByIndex(indexPokemon);
  responseEvolutionJSON = await loadPokemonDataToJson(pathEvolution);
  evolutionImages.push(getBaseLevelNameAndImage(indexPokemon));
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

function getBaseLevelNameAndImage(indexPokemon) {
  let indexArray = indexPokemon - 1;
  let baseLevelName = pokemonArray[indexArray].name;
  let baseLevelImg = pokemonArray[indexArray].image;
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

async function insertPokemonDefaultProperties(indexPokemon) {
  let indexArray = indexPokemon - 1;
  let path = getPokemonPathByIndex(indexPokemon);
  responseJSON = await loadPokemonDataToJson(path);

  pokemonArray[indexArray].name = responseJSON.name;
  let typesPokemon = [];
  for (let indexType = 0; indexType < responseJSON.types.length; indexType++) {
    typesPokemon[indexType] = responseJSON.types[indexType].type.name;
  }
  pokemonArray[indexArray].types = typesPokemon;
  pokemonArray[indexArray].image =
    responseJSON.sprites.other.home.front_default;
  pokemonArray[indexArray].id = responseJSON.id;
  pokemonArray[indexArray].height = responseJSON.height;
  pokemonArray[indexArray].weight = responseJSON.weight;
  let abilitiesPokemon = [];
  for (i = 0; i < responseJSON.abilities.length; i++) {
    abilitiesPokemon[i] = responseJSON.abilities[i].ability.name;
  }
  pokemonArray[indexArray].abilities = abilitiesPokemon;
  let baseStats = [];
  for (let i = 0; i < responseJSON.stats.length; i++) {
    baseStats[i] = {};
    baseStats[i].name = responseJSON.stats[i].stat.name;
    baseStats[i].value = responseJSON.stats[i].base_stat;
  }
  pokemonArray[indexArray].baseStats = baseStats;
  let moves = [];
  for (let i = 0; i < responseJSON.moves.length; i++) {
    moves[i] = responseJSON.moves[i].move.name;
  }
  pokemonArray[indexArray].moves = moves;
}
