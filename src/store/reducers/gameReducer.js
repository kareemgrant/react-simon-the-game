const ActionTypes = require('../../actions/ActionTypes');

const gameReducer = (gameData = {}, action) => {
  switch (action.type) {
    case ActionTypes.START_GAME:
      return Object.assign({}, gameData, {
        gameInProgress: true,
        sequence: [],
        sequenceInProgress: false,
        gameOver: false,
        activeColor: null,
        currentRound: 1,
        message: action.message,
      });
    case ActionTypes.UPDATE_GAME_DATA:
      return Object.assign({}, gameData, action.data);
    case ActionTypes.UPDATE_GAME_SEQUENCE:
      return Object.assign({}, gameData, { sequence: action.sequence });
    case ActionTypes.END_GAME:
      return Object.assign({}, gameData, {
        gameInProgress: false,
        sequence: [],
        sequenceInProgress: false,
        gameOver: true,
        activeColor: null,
        patternCount: 3,
        currentRound: 1,
        currentIndex: 0,
        message: action.message,
      });
    case ActionTypes.ADVANCE_ROUND:
      return Object.assign({}, gameData, {
        currentRound: gameData.currentRound + 1,
        patternCount: gameData.patternCount + 1,
        currentIndex: 0,
        beginNextRound: true,
        listeningForPattern: false,
      });
    default:
      return gameData;
  }
};

module.exports = gameReducer;
