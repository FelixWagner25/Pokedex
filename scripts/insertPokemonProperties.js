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

async function insertPokemonId(indexPokemon) {
  let indexArray = indexPokemon - 1;
  let path = getPokemonPathByIndex(indexPokemon);
  responseJSON = await loadPokemonDataToJson(path);
  pokemonArray[indexArray].id = responseJSON.id;
}

async function insertPokemonHeight(indexPokemon) {
  let indexArray = indexPokemon - 1;
  let path = getPokemonPathByIndex(indexPokemon);
  responseJSON = await loadPokemonDataToJson(path);
  pokemonArray[indexArray].height = responseJSON.height;
}

async function insertPokemonWeight(indexPokemon) {
  let indexArray = indexPokemon - 1;
  let path = getPokemonPathByIndex(indexPokemon);
  responseJSON = await loadPokemonDataToJson(path);
  pokemonArray[indexArray].weight = responseJSON.weight;
}

async function insertPokemonAbilities(indexPokemon) {
  let indexArray = indexPokemon - 1;
  let path = getPokemonPathByIndex(indexPokemon);
  responseJSON = await loadPokemonDataToJson(path);
  let abilitiesPokemon = [];
  for (i = 0; i < responseJSON.abilities.length; i++) {
    abilitiesPokemon[i] = responseJSON.abilities[i].ability.name;
  }
  pokemonArray[indexArray].abilities = abilitiesPokemon;
}

async function insertPokemonHabitat(indexPokemon) {
  let indexArray = indexPokemon - 1;
  let pathSpecies = await getSpeciesPathByIndex(indexPokemon);
  responseSpeciesJSON = await loadPokemonDataToJson(pathSpecies);
  pokemonArray[indexArray].habitat = responseSpeciesJSON.habitat.name;
}

async function insertPokemonBaseStats(indexPokemon) {
  let indexArray = indexPokemon - 1;
  let path = getPokemonPathByIndex(indexPokemon);
  responseJSON = await loadPokemonDataToJson(path);
  let baseStats = [];
  for (let i = 0; i < responseJSON.stats.length; i++) {
    baseStats[i] = {};
    baseStats[i].name = responseJSON.stats[i].stat.name;
    baseStats[i].value = responseJSON.stats[i].base_stat;
  }
  pokemonArray[indexArray].baseStats = baseStats;
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

async function insertPokemonFirstFiveMoves(indexPokemon) {
  let indexArray = indexPokemon - 1;
  let path = getPokemonPathByIndex(indexPokemon);
  responseJSON = await loadPokemonDataToJson(path);
  let moves = [];
  for (let i = 0; i < responseJSON.moves.length; i++) {
    moves[i] = responseJSON.moves[i].move.name;
  }
  pokemonArray[indexArray].moves = moves;
}

async function getBaseLevelNameAndImage(evolutionJson) {
  let baseLevelName = evolutionJson.chain.species.name;
  let baseLevelImg = await getPokemonImagePathByIndex(
    getPokemonIdFromSpeciesURL(evolutionJson.chain.species.url)
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
