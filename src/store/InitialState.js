const InitialState = {
  gameData: {
    gameInProgress: false,
    sequenceInProgress: false,
    gameOver: false,
    beginNextRound: false,
    patternCount: 3,
    sequence: [],
    currentIndex: 0,
    activeColor: null,
    currentRound: 1,
    message: null,
  },
};

module.exports = InitialState;
