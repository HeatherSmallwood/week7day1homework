
document.addEventListener('DOMContentLoaded', () => {
    const getPokemonData = async () => {
        const pokemonNameInput = document.getElementById('pokemonName');
        const pokemonName = pokemonNameInput.value.toLowerCase();
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
        
        const pokeName = document.getElementById('pokeName');
        const pokeImage = document.getElementById('pokeImage');
        const abilitiesList = document.getElementById('abilitiesList');

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Pokemon not found!');
            }

            const data = await response.json();
            pokeName.innerText = data.name;

            
            pokeImage.src = data.sprites.front_default;
            pokeImage.alt = data.name; 

           
            abilitiesList.innerHTML = '';

            
            data.abilities.forEach((ability) => {
                const listItem = document.createElement('li');
                listItem.innerText = ability.ability.name;
                abilitiesList.append(listItem);
            });
        } catch (error) {
            console.error('Error:', error.message);
            alert('Pokemon not found! Please try another.');
        }
    };

    const createPokemonSearch = () => {
        const pokemonInput = document.createElement('input');
        pokemonInput.setAttribute('type', 'text');
        pokemonInput.setAttribute('id', 'pokemonName');
        pokemonInput.setAttribute('placeholder', 'Enter Pokémon name');

        const searchButton = document.createElement('button');
        searchButton.innerText = 'Search';
        searchButton.addEventListener('click', getPokemonData);

        const pokemonInfo = document.getElementById('pokemonInfo');

        pokemonInfo.append(pokemonInput);
        pokemonInfo.append(searchButton);
    };

   
    const pokemonNameInput = document.getElementById('pokemonName');
    if (pokemonNameInput){
        pokemonNameInput.addEventListener('keypress', function (e) {
         if (e.key === 'Enter') {
            getPokemonData();
            }
        });
    }

    createPokemonSearch();
});
