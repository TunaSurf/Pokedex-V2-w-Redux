const GET_ALL_POKEMON = 'GET_ALL_POKEMON';

const initialState = {
  pokemon: [],
  pokemonLoaded: false,
  pokemonLoadedAt: null
}

export default function (state = initialState, action) {
  const { type, data } = action
  switch (type) {
    case GET_ALL_POKEMON:
      return {
        ...state,
        pokemon: data,
        pokemonLoaded: true,
        pokemonLoadedAt: new Date()
      }
    default: return state
  }
}

export function getAllPokemon() {
  return async function (dispatch) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const pokemon = await res.json();
    console.log(pokemon)

    return dispatch({
      type: GET_ALL_POKEMON,
      data: pokemon.results
    })
  }
}