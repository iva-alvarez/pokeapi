
export const searchPokemon = async ( pokemon ) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {
        console.log(err);
    }
  };

  export const PokemonData = async ( limit = 9 , offset = 0 ) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {
        console.log(err);
    }
  };

  export const PokemonUrl  = async (url) => {
    try {
    
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {
        console.log(err);
    }
  };