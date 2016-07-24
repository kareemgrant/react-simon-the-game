const ActionTypes = require('../../actions/ActionTypes');

const gameReducer = (gameData = {}, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_GAME_DATA:
      return Object.assign({}, gameData, action.data);
    case ActionTypes.INCREMENT_INDEX:
      return Object.assign({}, gameData, { currentIndex: gameData.currentIndex + 1 });
    case ActionTypes.UPDATE_ACTIVE_COLOR:
      return Object.assign({}, gameData, { activeColor: action.color });
    case ActionTypes.CLEAR_ACTIVE_COLOR:
      return Object.assign({}, gameData, { activeColor: null });
    default:
      return gameData;
  }
};

module.exports = gameReducer;
