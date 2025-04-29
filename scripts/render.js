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

async function showDetailedCard(indexArray) {
  let indexPokemon = currentPokemons[indexArray].id;
  await loadPokemonHabitatAndEvolution(indexPokemon);
  openDetailedCard();
  renderDetailedCardCore(indexArray);
  showDetailedTab(currentDetailedTabId);
  renderDetailedTabs(indexArray);
  blurBackground();
}

function showDetailedTab(htmlId) {
  removeFocusFromAllTabs();
  addFocusToTabLnk(htmlId);
  closeAllDetailedTabs();
  openDetailedTab(htmlId);
}

function renderDetailedCardCore(indexArray) {
  detailedCardRef = document.getElementById("detailed-card-div");
  detailedCardRef.innerHTML = "";
  if (pokemonHas2Attributes(indexArray)) {
    detailedCardRef.innerHTML = getDetailedCardCoreTemplate2Attr(indexArray);
  } else {
    detailedCardRef.innerHTML = getDetailedCardCoreTemplate1Attr(indexArray);
  }
}

function renderDetailedTabs(indexArray) {
  renderAboutTab(indexArray);
  renderBaseStatsTab(indexArray);
  renderEvolutionTab(indexArray);
  renderMovesTab(indexArray);
}

function renderAboutTab(indexArray) {
  ref = document.getElementById("about-tab");
  ref.innerHTML = getAboutTabTemplate(indexArray);
}

function renderBaseStatsTab(indexArray) {
  ref = document.getElementById("base-stats-tab");
  ref.innerHTML = getBaseStatsTabTemplate(indexArray);
  renderAllProgrBars(indexArray);
}

function renderEvolutionTab(indexArray) {
  ref = document.getElementById("evolution-tab");
  if (pokemonHasThreeEvolutionSteps(indexArray)) {
    ref.innerHTML = getEvolutionTabTemplate3Level(indexArray);
  } else {
    ref.innerHTML = getEvolutionTabTemplate2Level(indexArray);
  }
}

function renderMovesTab(indexArray) {
  ref = document.getElementById("moves-tab");
  ref.innerHTML = getMovesTabTemplate(indexArray);
}

function renderAllProgrBars(indexArray) {
  let htmlId = "";
  let baseStatsValue = 0;
  for (let i = 0; i < currentPokemons[indexArray].baseStats.length; i++) {
    htmlId = "progr-" + i;
    baseStatsValue = currentPokemons[indexArray].baseStats[i].value;
    insertProgrBarAttributes(htmlId, baseStatsValue);
  }
}

function insertProgrBarAttributes(htmlId, baseStatValue) {
  insertProgrBarColor(htmlId, baseStatValue);
  drawProgrBar(htmlId, baseStatValue);
}

function insertProgrBarColor(htmlId, baseStatsValue) {
  if (valueGreaterThan50(baseStatsValue)) {
    addColorGreen(htmlId);
  } else {
    addColorRed(htmlId);
  }
}

function insertProgrBarValue(htmlId, baseStatsValue) {
  let widthPercent = String(baseStatsValue) + "%";
  document.getElementById(htmlId).style.width = widthPercent;
}

function drawProgrBar(htmlId, baseStatsValue) {
  let progrBarRef = document.getElementById(htmlId);
  progrBarRef.style.width = "";
  let widthPercent = 0;
  let widthPercentStr = "";
  let id = setInterval(frame, 20);
  function frame() {
    if (widthPercent >= baseStatsValue) {
      clearInterval(id);
    } else {
      widthPercent++;
      widthPercentStr = String(widthPercent) + "%";
      progrBarRef.style.width = widthPercentStr;
    }
  }
}

function addColorRed(htmlId) {
  document.getElementById(htmlId).classList.add("bg-red");
}

function addColorGreen(htmlId) {
  document.getElementById(htmlId).classList.add("bg-green");
}

function showNextPokemon(indexArray) {
  let nextIndexArray = getNextIndexArray(indexArray);
  showDetailedCard(nextIndexArray);
}

function showPreviousPokemon(indexArray) {
  let previousIndexArray = getPreviousIndexArray(indexArray);
  showDetailedCard(previousIndexArray);
}

function getNextIndexArray(indexArray) {
  let nextIndexArray;
  if (indexArray == currentPokemons.length - 1) {
    nextIndexArray = 0;
  } else {
    nextIndexArray = indexArray + 1;
  }
  return nextIndexArray;
}

function getPreviousIndexArray(indexArray) {
  let previousIndexArray;
  if (indexArray == 0) {
    previousIndexArray = currentPokemons.length - 1;
  } else {
    previousIndexArray = indexArray - 1;
  }
  return previousIndexArray;
}

function renderNoResultsMsg() {
  document.getElementById("content").innerHTML = getNoResultsMsgTemplate();
}
