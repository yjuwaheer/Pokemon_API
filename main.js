let idRand = Math.floor((Math.random() * 500) + 1);

    const apiData = {
        url: "https://pokeapi.co/api/v2/",
        type: "pokemon",
        id: idRand.toString()
    };

    const {url, type, id} = apiData;
    const api = `${url}${type}/${id}`;

    fetch(api)
        .then( (data) => data.json())
        .then( (pokemon) => generateHtml(pokemon) )

    const generateHtml = (data) => {
        const html = `
            <div class="name">${data.name}</div>
            <img src=${data.sprites.front_default}>
            <div class="details">
                <span>Height: ${data.height}</span>
                <span>Weight: ${data.weight}</span>
            </div>
        `

        const pokemonDiv = document.querySelector('.pokemon')
        pokemonDiv.innerHTML = html
    }