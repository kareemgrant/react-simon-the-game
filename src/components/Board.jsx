import React, { Component } from 'react';
import Pad from './Pad';
import { dispatch } from '../store/Store';
import {
  endGame,
  startGame,
  displaySequence,
  generateSequence,
  advanceRound,
  updateGameData,
} from '../actions/ActionCreators';

const propTypes = {
  activeColor: React.PropTypes.string,
  patternCount: React.PropTypes.number,
  sequence: React.PropTypes.array,
  gameInProgress: React.PropTypes.bool,
  beginNextRound: React.PropTypes.bool,
  gameOver: React.PropTypes.bool,
  message: React.PropTypes.string,
  currentRound: React.PropTypes.number,
  sequenceInProgress: React.PropTypes.bool,
};

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      patternIndex: 0,
    };

    this.validateSelection = this.validateSelection.bind(this);
  }

  getCurrentCorrectColor() {
    const { sequence } = this.props;
    const { patternIndex } = this.state;

    return sequence[patternIndex];
  }

  validateSelection(color) {
    const { sequence } = this.props;
    const { patternIndex } = this.state;

    if (color === sequence[patternIndex]) {
      if (patternIndex < (sequence.length - 1)) {
        this.setState({ patternIndex: patternIndex + 1 });
      } else {
        this.setState({ patternIndex: 0 });
        dispatch(advanceRound());
      }
    } else {
      dispatch(endGame('Game over, please try again'));
    }
  }

  startRound(interval) {
    const { patternCount } = this.props;
    dispatch(startGame());
    dispatch(generateSequence(patternCount));
    dispatch(displaySequence(interval));
  }

  nextRound(interval) {
    const { patternCount } = this.props;

    dispatch(updateGameData({ beginNextRound: false }));
    dispatch(generateSequence(patternCount));
    dispatch(displaySequence(interval));
  }

  renderAlert() {
    const { gameOver, message } = this.props;

    if (!gameOver && !message) { return null; }

    return (
      <div className="alert alert-info" role="alert"> {message}</div>
    );
  }

  renderInstructions() {
    const { gameInProgress, sequenceInProgress, beginNextRound } = this.props;

    if (gameInProgress && sequenceInProgress) { return null; }
    if (!gameInProgress) { return null; }
    if (gameInProgress && beginNextRound) { return null; }

    return (
      <div className="prompt">
        <p>Please repeat the pattern by pressing on the colored pads above</p>
      </div>
    );
  }

  renderStartButton() {
    const { gameInProgress } = this.props;

    if (gameInProgress) { return null; }

    return (
      <div className="btn-center btn-container">
        <button className="btn btn-default" onClick={() => this.startRound(2000)}>Start</button>
      </div>
    );
  }

  renderNextRoundButton() {
    const { gameInProgress, beginNextRound } = this.props;
    if (!gameInProgress) { return null; }
    if (!beginNextRound) { return null; }

    return (
      <div className="btn-center btn-container">
        <button className="btn btn-default" onClick={() => this.nextRound(2000)}>Next Round</button>
      </div>
    );
  }

  renderResetButton() {
    const { gameInProgress, beginNextRound } = this.props;

    if (!gameInProgress) { return null; }
    if (beginNextRound) { return null; }

    return (
      <div className="btn-center btn-container">
        <button className="btn btn-default" onClick={() => console.log('resetting game')}>Reset</button>
      </div>
    );
  }

  render() {
    const {
      activeColor,
      gameInProgress,
      sequenceInProgress,
      currentRound,
    } = this.props;

    return (
      <div className="boardContainer clearfix">
        <h2>Simon The Game</h2>
        <h3>Current Round: {currentRound}</h3>
        {this.renderAlert()}

        <Pad
          activeColor={activeColor}
          color="red"
          audio={"http://www.sounds.beachware.com/2illionzayp3may/tlahs/BING.mp3"}
          losingAudio={"http://static1.grsites.com/archive/sounds/cartoon/cartoon183.mp3"}
          listeningForPattern={gameInProgress && !sequenceInProgress}
          currentCorrectColor={this.getCurrentCorrectColor()}
          validateSelection={this.validateSelection}
        />

        <Pad
          activeColor={activeColor}
          color="blue"
          audio={"http://resources.schoolscience.co.uk/CDA/CD/files/sound/decorativelamp.mp3"}
          losingAudio={"http://static1.grsites.com/archive/sounds/cartoon/cartoon183.mp3"}
          listeningForPattern={gameInProgress && !sequenceInProgress}
          currentCorrectColor={this.getCurrentCorrectColor()}
          validateSelection={this.validateSelection}
        />

        <Pad
          activeColor={activeColor}
          color="yellow"
          audio={"http://stephane.brechet.free.fr/Sons/MP3/BELL.mp3"}
          losingAudio={"http://static1.grsites.com/archive/sounds/cartoon/cartoon183.mp3"}
          listeningForPattern={gameInProgress && !sequenceInProgress}
          currentCorrectColor={this.getCurrentCorrectColor()}
          validateSelection={this.validateSelection}
        />

        <Pad
          activeColor={activeColor}
          color="green"
          audio={"http://www.richardbrice.net/bell_1.mp3"}
          losingAudio={"http://static1.grsites.com/archive/sounds/cartoon/cartoon183.mp3"}
          listeningForPattern={gameInProgress && !sequenceInProgress}
          currentCorrectColor={this.getCurrentCorrectColor()}
          validateSelection={this.validateSelection}
        />

        {this.renderInstructions()}
        {this.renderStartButton()}
        {this.renderResetButton()}
        {this.renderNextRoundButton()}
      </div>
    );
  }
}

Board.propTypes = propTypes;
module.exports = Board;
