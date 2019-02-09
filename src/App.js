import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./redux/store";
import PokemonList from "./pokemonList";
import PokemonDetail from "./PokemonDetail";

function App() {
  return (
    <Provider store={store}>
      <h1>Pokedex</h1>
      <Router>
        <>
          <Route exact path="/" component={PokemonList} />
          <Route path="/:pokemon" component={PokemonDetail} />
        </>
      </Router>
    </Provider>
  );
}

export default App;
