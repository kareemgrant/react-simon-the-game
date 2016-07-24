const ActionTypes = require('../../actions/ActionTypes');

const gameReducer = (gameData = {}, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_GAME_DATA:
      return Object.assign({}, gameData, action.data);
    case ActionTypes.UPDATE_GAME_SEQUENCE:
      return Object.assign({}, gameData, { sequence: action.sequence });
    default:
      return gameData;
  }
};

module.exports = gameReducer;
