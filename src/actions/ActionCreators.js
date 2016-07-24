import _ from 'lodash';
import { COLORS } from '../store/constants/GameConstants';

const ActionTypes = require('./ActionTypes');

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

    intervalId = setInterval(() => {
      if (!items.length) clearInterval(intervalId);
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
  displaySequence,
  generateSequence,
  updateGameData,
};
