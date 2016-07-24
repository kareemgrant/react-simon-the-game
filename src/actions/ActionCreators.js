import _ from 'lodash';
import { COLORS } from '../store/constants/GameConstants';

const ActionTypes = require('./ActionTypes');

function startGame() {
  return {
    type: ActionTypes.START_GAME,
  };
}

function endGame(message) {
  return {
    type: ActionTypes.END_GAME,
    message,
  };
}

function advanceRound() {
  return {
    type: ActionTypes.ADVANCE_ROUND,
  };
}

function generateSequence(itemCount) {
  const newSequence = [];
  for (let i = 0; i < itemCount; i++) {
    newSequence.push(_.sample(COLORS));
  }

  return {
    type: ActionTypes.UPDATE_GAME_SEQUENCE,
    sequence: newSequence,
  };
}

function displaySequence(interval) {
  return (dispatch, getState) => {
    const { gameData: { sequence } } = getState();
    const items = _.clone(sequence);
    let index = 0;
    let intervalId = null;


    dispatch(updateGameData({ sequenceInProgress: true }));

    intervalId = setInterval(() => {
      if (!items.length) {
        dispatch(updateGameData({ sequenceInProgress: false, activeColor: null }));
        clearInterval(intervalId);
      }

      items.shift();
      dispatch(updateGameData({
        activeColor: sequence[index],
        currentIndex: index++,
      }));
    }, interval);
  };
}

function updateGameData(data) {
  return {
    type: ActionTypes.UPDATE_GAME_DATA,
    data,
  };
}

module.exports = {
  startGame,
  endGame,
  displaySequence,
  generateSequence,
  updateGameData,
  advanceRound,
};
