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
        />
        <img src=${currentPokemons[indexArray].image} alt="${
    currentPokemons[indexArray].name
  }" class="overlay-img" />
        <img
          src="./assets/icons/arrow_forward_white.png"
          alt="arrow forward"
          class="arrow-forward"
          id="arrow-forward"
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
    />
    <img src=${currentPokemons[indexArray].image} alt="${
    currentPokemons[indexArray].name
  }" class="overlay-img" />
    <img
      src="./assets/icons/arrow_forward_white.png"
      alt="arrow forward"
      class="arrow-forward"
      id="arrow-forward"
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
        <span class="card-text">Id</span>
        <span class="card-text">${currentPokemons[indexArray].id}</span>
        <span class="card-text">Height</span>
        <span class="card-text">${currentPokemons[indexArray].height} dm</span>
        <span class="card-text">Weight</span>
        <span class="card-text">${currentPokemons[indexArray].weight} hg</span>
        <span class="card-text">Abilities</span>
        <span class="card-text">${getPokemonAllAbilites(indexArray)}</span>
        <span class="card-text">Habitat</span>
        <span class="card-text">${currentPokemons[indexArray].habitat}</span>
      </div>
  `;
}

function getBaseStatsTabTemplate(indexArray) {
  return `
            <div class="base-stats-div">
            <span class="card-text">HP</span>
            45
            <span>progression</span>
            <span class="card-text">Attack</span>
            60
            <span>progression</span>
            <span class="card-text">Defense</span
            ><span class="card-text">26</span
            ><span class="card-text">progression</span>
            <span class="card-text">Sp. Attack</span
            ><span class="card-text">72</span
            ><span class="card-text">progression</span>
            <span class="card-text">Sp. Defense</span>
            <span class="card-text">46</span>
            <span class="card-text">progression</span>
            <span class="card-text">Speed</span>
            <span class="card-text">12</span>
            <span class="card-text">progression</span>
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
