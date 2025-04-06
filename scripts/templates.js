function getCardTemplate1Attr(indexArray) {
  return `
    <div class="card pd-lr-16px pd-tb-16px ${
      pokemonArray[indexArray].types[0]
    }-card">
        <div class="card-name">${capitaliseFirstCharacter(
          pokemonArray[indexArray].name
        )}</div>
        <div class="card-content pd-tb-16px">
            <div><span class="attribute ${
              pokemonArray[indexArray].types[0]
            }-attr">${pokemonArray[indexArray].types[0]}</span></div>
            <img class="card-img" src="${pokemonArray[indexArray].image}" alt=${
    pokemonArray[indexArray].name
  } />
        </div>
    </div>
    `;
}

function getCardTemplate2Attr(indexArray) {
  return `
      <div class="card pd-lr-16px pd-tb-16px ${
        pokemonArray[indexArray].types[0]
      }-card">
          <div class="card-name">${capitaliseFirstCharacter(
            pokemonArray[indexArray].name
          )}</div>
          <div class="card-content pd-tb-16px">
              <div><span class="attribute ${
                pokemonArray[indexArray].types[0]
              }-attr">${pokemonArray[indexArray].types[0]}</span></div>
              <div><span class="attribute ${
                pokemonArray[indexArray].types[0]
              }-attr">${pokemonArray[indexArray].types[1]}</span></div>
              <img class="card-img" src="${
                pokemonArray[indexArray].image
              }" alt=${pokemonArray[indexArray].name} />
          </div>
      </div>
      `;
}
