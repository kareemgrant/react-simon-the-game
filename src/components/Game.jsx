import React, { Component } from 'react';
import Board from './Board';

const propTypes = {
  gameData: React.PropTypes.object,
};

class Game extends Component {
  render() {
    console.log('rendering game', this.props);
    const { gameData: { activeColor, patternCount } } = this.props;

    return (
      <div className="container">
        <Board 
          activeColor={activeColor}
          patternCount={patternCount}
        />
      </div>
    );
  }
}

Game.propTypes = propTypes;
module.exports = Game;
