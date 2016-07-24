import React, { Component } from 'react';
import Pad from './Pad';
import { dispatch } from '../store/Store';
import { displaySequence, generateSequence } from '../actions/ActionCreators';

const propTypes = {
  activeColor: React.PropTypes.string,
  patternCount: React.PropTypes.number,
};

class Board extends Component {
  startRound(interval) {
    const { patternCount } = this.props;

    dispatch(generateSequence(patternCount));
    dispatch(displaySequence(interval));
  }

  render() {
    const { activeColor } = this.props;
    return (
      <div className="boardContainer clearfix">
        <Pad
          activeColor={activeColor}
          color="red"
          audio={"http://www.sounds.beachware.com/2illionzayp3may/tlahs/BING.mp3"}
        />

        <Pad
          activeColor={activeColor}
          color="blue"
          audio={"http://resources.schoolscience.co.uk/CDA/CD/files/sound/decorativelamp.mp3"}
        />

        <Pad
          activeColor={activeColor}
          color="yellow"
          audio={"http://stephane.brechet.free.fr/Sons/MP3/BELL.mp3"}
        />

        <Pad
          activeColor={activeColor}
          color="green"
          audio={"http://www.richardbrice.net/bell_1.mp3"}
        />

        <button className="btn btn-default" onClick={() => this.startRound(500)}>Start</button>
      </div>
    );
  }
}

Board.propTypes = propTypes;
module.exports = Board;
