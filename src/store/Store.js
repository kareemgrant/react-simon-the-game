import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import InitialState from './InitialState';
import gameReducer from './reducers/gameReducer';

const createStoreWithMiddleware = compose(
  applyMiddleware(Thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const rootReducer = (state = {}, action) => {
  return {
    gameData: gameReducer(state.gameData, action),
  };
};

module.exports = createStoreWithMiddleware(rootReducer, InitialState);
