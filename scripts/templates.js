function getCardTemplate1Attr(indexArray) {
  return `
    <div class="card pd-lr-16px pd-tb-16px ${
      currentPokemons[indexArray].types[0]
    }-card">
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
      }-card">
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
