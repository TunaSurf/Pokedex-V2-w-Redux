import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";
import PokemonList from "./pokemonList";

function App() {
  return (
    <Provider store={store}>
      <PokemonList />
    </Provider>
  );
}

export default App;
