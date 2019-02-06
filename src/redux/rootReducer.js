import { combineReducers } from 'redux'

import getPokemon from './modules/getPokemon'

const rootReducer = combineReducers({
  getPokemon
});

export default rootReducer