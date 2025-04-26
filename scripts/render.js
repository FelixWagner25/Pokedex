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

function showDetailedCard(indexArray) {
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
