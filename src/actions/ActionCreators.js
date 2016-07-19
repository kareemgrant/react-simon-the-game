const ActionTypes = require('./ActionTypes');

function startGame() {
  return {
    type: ActionTypes.START_GAME,
  };
}

function displaySequence(interval) {
  return (dispatch, getState) => {
    const { gameData: { sequence, currentIndex } } = getState();

    let intervalId = null;
    console.log('currentIndex is', currentIndex);
    if (currentIndex < sequence.length) {
      intervalId = setInterval(() => {
        dispatch(clearActiveColor());
        dispatch(incrementIndex(intervalId));
      }, interval);
    }
  };
}

function incrementIndex(intervalId) {
  return (dispatch, getState) => {
    const { gameData: { currentIndex, patternCount, sequence } } = getState();
    console.log(currentIndex);
    if (currentIndex < patternCount) {
      dispatch(updateActiveColor(sequence[currentIndex]));
      dispatch({ type: ActionTypes.INCREMENT_INDEX });
    } else {
      clearInterval(intervalId);
      console.log('stop');
    }
  };
}

function updateActiveColor(color) {
  return {
    type: ActionTypes.UPDATE_ACTIVE_COLOR,
    color,
  };
}

function clearActiveColor() {
  return {
    type: ActionTypes.UPDATE_ACTIVE_COLOR,
  };
}

module.exports = {
  startGame,
  incrementIndex,
  displaySequence,
  updateActiveColor,
  clearActiveColor,
};
