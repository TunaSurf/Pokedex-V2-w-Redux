const GET_ALL_POKEMON = "GET_ALL_POKEMON";

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
    default:
      return state;
  }
}

// Fetch's a list of pokemon from PokeAPI and dispatches the results in
// the form of an array
export function getAllPokemon() {
  return async function(dispatch) {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon-species/");
    const data = await res.json();
    // res returns a smaller object which the total number of pokemon
    // available is retrieved from. This is used in the seond request
    // in order to display the full list at once. This can be optimized.
    // Instead of running the full fetch everytime after retrieving count,
    // the full fetch can be ran only if the count has changed since last
    // time it was ran, which can be stored.
    const resFull = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/?limit=${data.count}`
    );
    const pokemon = await resFull.json();

    return dispatch({
      type: GET_ALL_POKEMON,
      data: pokemon.results
    });
  };
}
