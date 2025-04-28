function getCardTemplate1Attr(indexArray) {
  return `
    <div class="card pd-lr-16px pd-tb-16px ${
      currentPokemons[indexArray].types[0]
    }-card" onclick='showDetailedCard(${indexArray})'>
        <div class="card-name">${capitaliseFirstCharacter(
          currentPokemons[indexArray].name
        )}</div>
        <div class="card-content pd-tb-16px">
            <div><span class="attribute ${
              currentPokemons[indexArray].types[0]
            }-attr">${currentPokemons[indexArray].types[0]}</span></div>
            <img class="card-img" src="${
              currentPokemons[indexArray].image
            }" alt=${currentPokemons[indexArray].name} />
        </div>
    </div>
    `;
}

function getCardTemplate2Attr(indexArray) {
  return `
      <div class="card pd-lr-16px pd-tb-16px ${
        currentPokemons[indexArray].types[0]
      }-card" onclick='showDetailedCard(${indexArray})'>
          <div class="card-name">${capitaliseFirstCharacter(
            currentPokemons[indexArray].name
          )}</div>
          <div class="card-content pd-tb-16px">
              <div><span class="attribute ${
                currentPokemons[indexArray].types[0]
              }-attr">${currentPokemons[indexArray].types[0]}</span></div>
              <div><span class="attribute ${
                currentPokemons[indexArray].types[0]
              }-attr">${currentPokemons[indexArray].types[1]}</span></div>
              <img class="card-img" src="${
                currentPokemons[indexArray].image
              }" alt=${currentPokemons[indexArray].name} />
          </div>
      </div>
      `;
}

function getDetailedCardCoreTemplate1Attr(indexArray) {
  return `
    <div class="${currentPokemons[indexArray].types[0]}-card">
      <img
        src="./assets/icons/close_white.png"
        alt="Close"
        class="close-icon"
        onclick="closeDetailedCard()"
      />
      <div class="overlay-name pd-lr-detailed-card">${capitaliseFirstCharacter(
        currentPokemons[indexArray].name
      )}</div>
      <div class="overlay-attr-div pd-lr-detailed-card">
        <div class="overlay-attr ${
          currentPokemons[indexArray].types[0]
        }-attr">${currentPokemons[indexArray].types[0]}</div>
      </div>
      <div class="overlay-img-div">
        <img
          src="./assets/icons/arrow_back_white.png"
          alt="arrow back"
          class="arrow-back"
          id="arrow-back"
          onclick="showPreviousPokemon(${indexArray})"
        />
        <img src=${currentPokemons[indexArray].image} alt="${
    currentPokemons[indexArray].name
  }" class="overlay-img" />
        <img
          src="./assets/icons/arrow_forward_white.png"
          alt="arrow forward"
          class="arrow-forward"
          id="arrow-forward"
          onclick="showNextPokemon(${indexArray})"
        />
      </div>
      <div class="overlay-info">
        <div class="info-tabs-div pd-lr-32px">
          <button
            class="tab-lnk focus"
            onclick="showDetailedTab('about-tab')"
            id="about-tab-lnk"
          >
            About
          </button>
          <button
            class="tab-lnk"
            onclick="showDetailedTab('base-stats-tab')"
            id="base-stats-tab-lnk"
          >
            Base Stats
          </button>
          <button
            class="tab-lnk"
            onclick="showDetailedTab('evolution-tab')"
            id="evolution-tab-lnk"
          >
            Evolution
          </button>
          <button
            class="tab-lnk"
            onclick="showDetailedTab('moves-tab')"
            id="moves-tab-lnk"
          >
            Moves
          </button>
        </div>
        <div class="center-content margin-t-16px">
          <nav id="nav-indicator-div">
            <div id="nav-indicator"></div>
          </nav>
        </div>
        <div class="pd-lr-32px pd-tb-24px" id="about-tab">
        </div>
        <div class="d-none pd-lr-32px pd-tb-24px" id="base-stats-tab">
        </div>
        <div class="d-none pd-lr-32px pd-tb-24px" id="evolution-tab">
        </div>
        <div class="d-none pd-lr-32px pd-tb-24px" id="moves-tab">
        </div>
      </div>
    </div>
  `;
}

function getDetailedCardCoreTemplate2Attr(indexArray) {
  return `
  <div class="${currentPokemons[indexArray].types[0]}-card">
  <img
    src="./assets/icons/close_white.png"
    alt="Close"
    class="close-icon"
    onclick="closeDetailedCard()"
  />
  <div class="overlay-name pd-lr-detailed-card">${capitaliseFirstCharacter(
    currentPokemons[indexArray].name
  )}</div>
  <div class="overlay-attr-div pd-lr-detailed-card">
    <div class="overlay-attr ${currentPokemons[indexArray].types[0]}-attr">${
    currentPokemons[indexArray].types[0]
  }</div>
        <div class="overlay-attr ${
          currentPokemons[indexArray].types[0]
        }-attr">${currentPokemons[indexArray].types[1]}</div>
  </div>
  <div class="overlay-img-div">
    <img
      src="./assets/icons/arrow_back_white.png"
      alt="arrow back"
      class="arrow-back"
      id="arrow-back"
      onclick="showPreviousPokemon(${indexArray})"
    />
    <img src=${currentPokemons[indexArray].image} alt="${
    currentPokemons[indexArray].name
  }" class="overlay-img" />
    <img
      src="./assets/icons/arrow_forward_white.png"
      alt="arrow forward"
      class="arrow-forward"
      id="arrow-forward"
      onclick="showNextPokemon(${indexArray})"
    />
  </div>
  <div class="overlay-info">
    <div class="info-tabs-div pd-lr-32px">
      <button
        class="tab-lnk focus"
        onclick="showDetailedTab('about-tab')"
        id="about-tab-lnk"
      >
        About
      </button>
      <button
        class="tab-lnk"
        onclick="showDetailedTab('base-stats-tab')"
        id="base-stats-tab-lnk"
      >
        Base Stats
      </button>
      <button
        class="tab-lnk"
        onclick="showDetailedTab('evolution-tab')"
        id="evolution-tab-lnk"
      >
        Evolution
      </button>
      <button
        class="tab-lnk"
        onclick="showDetailedTab('moves-tab')"
        id="moves-tab-lnk"
      >
        Moves
      </button>
    </div>
    <div class="center-content margin-t-16px">
      <nav id="nav-indicator-div">
        <div id="nav-indicator"></div>
      </nav>
    </div>
    <div class="pd-lr-32px pd-tb-24px" id="about-tab">
    </div>
    <div class="d-none pd-lr-32px pd-tb-24px" id="base-stats-tab">
    </div>
    <div class="d-none pd-lr-32px pd-tb-24px" id="evolution-tab">
    </div>
    <div class="d-none pd-lr-32px pd-tb-24px" id="moves-tab">
    </div>
  </div>
  </div>
`;
}

function getAboutTabTemplate(indexArray) {
  return `
      <div class="about-tab-div">
        <span class="card-text">id</span>
        <span class="card-text">${currentPokemons[indexArray].id}</span>
        <span class="card-text">height</span>
        <span class="card-text">${currentPokemons[indexArray].height} dm</span>
        <span class="card-text">weight</span>
        <span class="card-text">${currentPokemons[indexArray].weight} hg</span>
        <span class="card-text">abilities</span>
        <span class="card-text">${getPokemonAllAbilites(indexArray)}</span>
        <span class="card-text">habitat</span>
        <span class="card-text">${currentPokemons[indexArray].habitat}</span>
      </div>
  `;
}

function getBaseStatsTabTemplate(indexArray) {
  return `
          <div class="base-stats-div">
            <span class="card-text">${currentPokemons[indexArray].baseStats[0].name}</span>
            ${currentPokemons[indexArray].baseStats[0].value}
            <div class="progressbar-wrapper">
              <div class="progressbar" id="progr-0"></div>
            </div>
            <span class="card-text">${currentPokemons[indexArray].baseStats[1].name}</span>
            ${currentPokemons[indexArray].baseStats[1].value}
            <div class="progressbar-wrapper">
              <div class="progressbar" id="progr-1"></div>
            </div>
            <span class="card-text">${currentPokemons[indexArray].baseStats[2].name}</span>
            <span class="card-text">${currentPokemons[indexArray].baseStats[2].value}</span>
            <div class="progressbar-wrapper">
              <div class="progressbar" id="progr-2"></div>
            </div>
            <span class="card-text">${currentPokemons[indexArray].baseStats[3].name}</span>
            <span class="card-text">${currentPokemons[indexArray].baseStats[3].value}</span>
            <div class="progressbar-wrapper">
              <div class="progressbar" id="progr-3"></div>
            </div>
            <span class="card-text">${currentPokemons[indexArray].baseStats[4].name}</span>
            <span class="card-text">${currentPokemons[indexArray].baseStats[4].value}</span>
            <div class="progressbar-wrapper">
              <div class="progressbar" id="progr-4"></div>
            </div>
            <span class="card-text">${currentPokemons[indexArray].baseStats[5].name}</span>
            <span class="card-text">${currentPokemons[indexArray].baseStats[5].value}</span>
            <div class="progressbar-wrapper">
              <div class="progressbar" id="progr-5"></div>
            </div>
          </div>    
  `;
}

function getEvolutionTabTemplate2Level(indexArray) {
  return `
  <div class="evolution-div">
            <div class="evolution-pokemon">
              <img src="${
                currentPokemons[indexArray].evolutionImages[0].image
              }" alt="" class="evolution-img" />
              <p class="evolution-text">${capitaliseFirstCharacter(
                currentPokemons[indexArray].evolutionImages[0].name
              )}</p>
            </div>
            <img
              src="./assets/icons/arrow_forward_gray.png"
              alt="arrow forward"
              class="evolution-arrow"
            />
            <div class="evolution-pokemon">
              <img src="${
                currentPokemons[indexArray].evolutionImages[1].image
              }" alt="" class="evolution-img" />
              <p class="evolution-text">${capitaliseFirstCharacter(
                currentPokemons[indexArray].evolutionImages[1].name
              )}</p>
            </div>
          </div>
  `;
}

function getEvolutionTabTemplate3Level(indexArray) {
  return `
  <div class="evolution-div">
            <div class="evolution-pokemon">
              <img src="${
                currentPokemons[indexArray].evolutionImages[0].image
              }" alt="" class="evolution-img" />
              <p class="evolution-text">${capitaliseFirstCharacter(
                currentPokemons[indexArray].evolutionImages[0].name
              )}</p>
            </div>
            <img
              src="./assets/icons/arrow_forward_gray.png"
              alt="arrow forward"
              class="evolution-arrow"
            />
            <div class="evolution-pokemon">
              <img src="${
                currentPokemons[indexArray].evolutionImages[1].image
              }" alt="" class="evolution-img" />
              <p class="evolution-text">${capitaliseFirstCharacter(
                currentPokemons[indexArray].evolutionImages[1].name
              )}</p>
            </div>
            <img
              src="./assets/icons/arrow_forward_gray.png"
              alt="arrow forward"
              class="evolution-arrow"
            />
            <div class="evolution-pokemon">
              <img src="${
                currentPokemons[indexArray].evolutionImages[2].image
              }" alt="" class="evolution-img" />
              <p class="evolution-text">${capitaliseFirstCharacter(
                currentPokemons[indexArray].evolutionImages[2].name
              )}</p>
            </div>
          </div>
  `;
}

function getMovesTabTemplate(indexArray) {
  return `
            <div class="moves-div">
            <span>${currentPokemons[indexArray].moves[0]}</span>
            <span>${currentPokemons[indexArray].moves[1]}</span>
            <span>${currentPokemons[indexArray].moves[2]}</span>
            <span>${currentPokemons[indexArray].moves[3]}</span>
            <span>${currentPokemons[indexArray].moves[4]}</span>
          </div>
  `;
}
