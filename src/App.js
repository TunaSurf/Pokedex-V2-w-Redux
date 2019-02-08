import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "./redux/store";
import PokemonList from "./pokemonList";
import PokemonDetail from "./PokemonDetail";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Route exact path="/" component={PokemonList} />
        <Route exact path="/:pokemon" component={PokemonDetail} />
      </Provider>
    </Router>
  );
}

export default App;
