import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./redux/rootReducer";
import PokemonList from "./pokemonList";

// Array set for middleware so additional middlewares can be added
// easily. applyMiddleware does not accept an array, so the items
// within must be spread.
const middleware = [thunk];
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => {
  return (
    <Provider store={store}>
      <PokemonList />
    </Provider>
  );
};

export default App;
