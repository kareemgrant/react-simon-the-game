import React, { Component } from 'react';
import Pad from './Pad';
import { dispatch } from '../store/Store';
import { displaySequence } from '../actions/ActionCreators';

const propTypes = {
  activeColor: React.PropTypes.string,
};

class Board extends Component {
  render() {
    const { activeColor } = this.props;
    return (
      <div className="boardContainer clearfix">
        <Pad activeColor={activeColor} color="red" />
        <Pad activeColor={activeColor} color="blue" />
        <Pad activeColor={activeColor} color="yellow" />
        <Pad activeColor={activeColor} color="green" />
        <button onClick={() => dispatch(displaySequence(2000))}>Start</button>
      </div>
    );
  }
}

Board.propTypes = propTypes;
module.exports = Board;
