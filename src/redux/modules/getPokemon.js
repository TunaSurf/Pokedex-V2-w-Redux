const GET_ALL_POKEMON = "GET_ALL_POKEMON";
const ALL_POKEMON_LOADED = "ALL_POKEMON_LOADED";

const initialState = {
  pokemon: [],
  pokemonLoaded: false,
  pokemonLoadedAt: null
};

export default function(state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_ALL_POKEMON:
      return {
        ...state,
        pokemon: data,
        pokemonLoaded: true,
        pokemonLoadedAt: new Date()
      };
    case ALL_POKEMON_LOADED:
      return {
        ...state,
        pokemonLoadedAt: new Date()
      };
    default:
      return state;
  }
}

// Fetch's a list of pokemon from PokeAPI and dispatches the results in
// the form of an array
export function getAllPokemon() {
  return async function(dispatch, getState) {
    const { getPokemon } = getState();
    // Ping api for smallest request to retrieve total poke count
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon-species/?limit=1"
    );
    const data = await res.json();
    // Compare the total count to the previous total count, if they match
    // then no new pokemon have been added and a full request is unneeded.
    if (data.count === getPokemon.pokemon.length) {
      return dispatch({
        type: ALL_POKEMON_LOADED
      });
    }

    // Request for the full list of pokemon
    const resFull = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/?limit=${data.count}`
    );
    const pokemon = await resFull.json();
    console.log("full api call");
    return dispatch({
      type: GET_ALL_POKEMON,
      data: pokemon.results
    });
  };
}
