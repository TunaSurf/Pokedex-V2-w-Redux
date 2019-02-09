import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { getAllPokemon } from "./redux/modules/getPokemon";

function PokemonList({
  getAllPokemon,
  pokemon,
  pokemonLoaded,
  pokemonLoadedAt
}) {
  // This can be optimized. Instead of an empty array telling useEffect to
  // only run once at mount and unmount, pokemonLoadedAt can be utilized
  // somehow to have the effect run whenever a certain amount of time has
  // passed. **TODO**
  useEffect(() => {
    const time = 60 * 1000; //one hour
    if (!pokemonLoaded || new Date() - new Date(pokemonLoadedAt) > time) {
      getAllPokemon();
    }
  }, []);

  return pokemonLoaded ? (
    <ul>
      {pokemon.map((pokemon, i) => (
        <li key={pokemon.name}>
          <Link to={`/${pokemon.name}`}>
            {pokemon.name} #{i + 1}
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    // If the list of pokemon is still being retrieved, this is where a
    // skeleton list elements will be implemented.
    <h1>Loading</h1>
  );
}

const mapStateToProps = state => ({
  pokemon: state.getPokemon.pokemon,
  pokemonLoaded: state.getPokemon.pokemonLoaded,
  pokemonLoadedAt: state.getPokemon.pokemonLoadedAt
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAllPokemon
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonList);
