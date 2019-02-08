import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

// Array set for middleware so additional middlewares can be added
// easily. applyMiddleware does not accept an array, so the items
// within must be spread.
const middleware = [thunk];
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
