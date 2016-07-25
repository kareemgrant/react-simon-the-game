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
    listeningForPattern: false,
    message: null,
    selectedLevel: { id: 1, name: 'Level 1', patternCount: 3, interval: 2000 },
  },
};

module.exports = InitialState;
